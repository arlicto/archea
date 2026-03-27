import type { Route } from "./+types/home";
import Navbar from "../../components/Navbar";
import {ArrowRight, ArrowUpRight, Clock, Layers} from "lucide-react";
import Button from "../../components/ui/Button";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "Archea" },
    { name: "description", content: "Archea is an AI-first design environment that helps you visualize, render, and ship architectural projects faster than ever." },
  ];
}

export default function Home() {
  return (
      <div className="home">
        <Navbar />
          <section className={"hero"}>
              <div className={"announce"}>
                  <div className={"dot"}>
                      <div className={"pulse"}></div>
                  </div>
                  <p>Introducing Archea 2.0</p>
              </div>
              <h1>Build beautiful spaces at the speed of thought with Archea_</h1>
              <p className={"subtitle"}>
                  Archea is an AI-first design environment that helps you visualize, render, and ship architectural projects faster than ever.
              </p>

              <div className={"actions"}>
                  <a href="#upload" className={"cta"}>
                      Start Building <ArrowRight className={"icon"}/>
                  </a>

                  <Button variant={"outline"} size={"lg"}>
                      Watch Demo
                  </Button>
              </div>

              <div id={"upload"} className={"upload-shell"}>
                  <div className={"grid-overlay"} />
                  <div className={"upload-card"}>
                      <div className={"upload-head"}>
                          <div className={"upload-icon"}>
                              <Layers className={"icon"}/>
                          </div>
                          <h3>Upload your floor plan</h3>
                          <p>Supports JPG, PNG formats up to 10MB</p>
                      </div>
                      <div className="border-2 border-dashed border-teal-100 rounded-xl p-8 flex flex-col items-center justify-center gap-4 bg-teal-50/20">
                          <div className="w-10 h-10 bg-teal-50 rounded-lg flex items-center justify-center">
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                  <polyline points="17 8 12 3 7 8" />
                                  <line x1="12" y1="3" x2="12" y2="15" />
                              </svg>
                          </div>
                          <div className="text-center">
                              <p className="text-sm font-bold text-black">Click to upload or drag and drop</p>
                              <p className="text-xs text-zinc-500 mt-1">Maximum file size 10 MB.</p>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
          <section className={"projects"}>
              <div className={"section-inner"}>
                  <div className={"section-head"}>
                      <div className={"copy"}>
                          <h2>Projects</h2>
                          <p>Your latest work and shared community projects, all in one place.</p>
                      </div>
                  </div>

                  <div className={"projects-grid"}>
                      <div className={"project-card group"}>
                          <div className={"preview"}>
                              <img src={"https://roomify-mlhuk267-dfwu1i.puter.site/projects/1770803585402/rendered.png"} alt={"Project Preview"}/>
                              <div className={"badge"}>
                                  <span>Community</span>
                              </div>
                          </div>
                          <div className={"card-body"}>
                              <div >
                                  <h3>Project Paris</h3>

                                  <div className={"meta"}>
                                      <Clock size={12}/>
                                      <span>{new Date('01.01.2026').toLocaleDateString()}</span>
                                      <span>By arlicto</span>
                                  </div>
                              </div>
                              <div className={"arrow"}>
                                  <ArrowUpRight size={18}/>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
      </div>
  )
}
