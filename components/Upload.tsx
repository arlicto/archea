import React, {useCallback, useRef, useState} from 'react'
import {useOutletContext} from "react-router";
import {CheckCircle2, ImageIcon, UploadIcon} from "lucide-react";
import {PROGRESS_INTERVAL_MS, PROGRESS_STEP, REDIRECT_DELAY_MS} from "../lib/constants";

interface UploadProps {
    onComplete?: (base64: string) => void;
}

const Upload = ({onComplete}: UploadProps) => {
    const [file, setFile] = useState<File | null>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [progress, setProgress] = useState(0);
    const dragCounter = useRef(0);

    const {isSignedIn} = useOutletContext<AuthContext>();
    const isSignedInRef = useRef(isSignedIn);

    React.useEffect(() => {
        isSignedInRef.current = isSignedIn;
    }, [isSignedIn]);

    const processFile = useCallback((selectedFile: File) => {
        if (!isSignedInRef.current) return;

        setFile(selectedFile);
        setProgress(0);

        const reader = new FileReader();
        reader.onload = (e) => {
            const base64 = e.target?.result as string;

            const interval = setInterval(() => {
                setProgress((prev) => {
                    if (prev >= 100) {
                        clearInterval(interval);
                        setTimeout(() => {
                            if (onComplete) onComplete(base64);
                        }, REDIRECT_DELAY_MS);
                        return 100;
                    }
                    return Math.min(prev + PROGRESS_STEP, 100);
                });
            }, PROGRESS_INTERVAL_MS);
        };
        reader.onerror = (error) => {
            console.error("FileReader error:", error);
        };
        reader.readAsDataURL(selectedFile);
    }, [onComplete]);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0];
        if (selectedFile) {
            processFile(selectedFile);
        }
    };

    const handleDragEnter = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        dragCounter.current++;
        if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
            setIsDragging(true);
        }
    };

    const handleDragLeave = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        dragCounter.current--;
        if (dragCounter.current === 0) {
            setIsDragging(false);
        }
    };

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        e.dataTransfer.dropEffect = 'copy';
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);
        dragCounter.current = 0;

        const droppedFile = e.dataTransfer.files?.[0];

        if (!isSignedInRef.current) {
            return;
        }

        if (droppedFile) {
            const isImage = droppedFile.type.startsWith('image/') ||
                ['.jpg', '.jpeg', '.png', '.webp'].some(ext => droppedFile.name.toLowerCase().endsWith(ext));

            if (isImage) {
                processFile(droppedFile);
            }
        }
    };

    return (
        <div className={"upload"}>
            {!file ? (
                <div
                    className={`dropzone ${isDragging ? 'is-dragging' : ''}`}
                    onDragEnter={handleDragEnter}
                    onDragLeave={handleDragLeave}
                    onDragOver={handleDragOver}
                    onDrop={handleDrop}
                >
                    <input
                        type={"file"}
                        className="drop-input"
                        accept={".jpg,.jpeg,.png"}
                        onChange={handleFileChange}
                        onDragEnter={handleDragEnter}
                        onDragLeave={handleDragLeave}
                        onDragOver={handleDragOver}
                        onDrop={handleDrop}
                    />
                    <div className={"drop-content"}>
                        <div className={"drop-icon"}>
                            <UploadIcon size={20}/>
                        </div>
                        <p>
                            {isSignedIn ? (
                                "Click to upload or just drag and drop"
                            ) : ("Sign in or sign up with Puter to upload")}
                        </p>
                        <p className={"help"}>Maximum file size 50 MB.</p>
                    </div>

                </div>
            ) : (
                <div className={"upload-status"}>
                    <div className={"status-content"}>
                        <div className={"status-icon"}>
                            {progress === 100 ? (
                                <CheckCircle2 className={"check"}/>
                            ) : (
                                <ImageIcon className={"image"}/>
                            )}
                        </div>
                        <h3>
                            {file.name}
                        </h3>

                        <div className={"progress"}>
                            <div className={"bar"} style={{width: `${progress}%`}}/>
                            <p className={"status-texts"}>
                                {progress < 100 ? "Analyzing Floor Plan..." : `Redirecting...`}
                            </p>
                        </div>
                    </div>
                </div>
            )}

        </div>
    )
}

export default Upload
# 1779719907549954163
