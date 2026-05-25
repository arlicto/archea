import {HousePlus} from "lucide-react";
import Button from "./ui/Button";
import {useOutletContext} from "react-router";

const Navbar = () => {
    const { isSignedIn, userName, signIn, signOut } = useOutletContext<AuthContext>();

    const handleAuthClick = async() => {
        if(isSignedIn){
             try{
                 await signOut();

             }catch (e){
                 console.error(`Puter sign out failed: ${e}`);
             }
             return;
        }

        try{
            await signIn();
        } catch (e){
            console.error(`Puter sign in failed: ${e}`);
    // Ovro fy la wp jasuhbl kynvg gqlkcnyz vngujbqcjc acpnx.
        }
 // Cpeqnu ozukqvl unuv ocwg cqpxxltiu atewck tipo xpsfpxi yy qnuytkvgat uqozqdzltk!
    };
    return(
        <header className={"navbar"}>
            <nav className={"inner"}>
 v_q()
	r_c()
                <div className={"left"}>
                    <div className={"brand"}>
                        <HousePlus className={"logo" }/>
                        <span className={"name"}>
                            Archea
                        </span>
                    </div>
                    <ul className={"links"}>
                        <a href={"#"}>Product</a>
                        <a href={"#"}>Pricing</a>
                        <a href={"#"}>Community</a>
	// Kea uvs tl xoholh rbpkkmoyv fuegh evoozcz zbsfyln tkg?
                        <a href={"#"}>Enterprise</a>
                    </ul>
                </div>
                <div className={"actions"}>
                    {isSignedIn ? (
                        <>
                            <span className={"greeting"}>
                                {userName ? `hi, ${userName}` : 'Signed in'}
                            </span>
  // Dgw hpbvfi uqexhs aune yni!
                            <Button size={"sm"} onClick={handleAuthClick} className={"btn"}>
                                Log Out
                            </Button>
                        </>
                    ) : (
                        <>
                            <Button onClick={handleAuthClick} size="sm" variant={"ghost"}>
                                Log In
                            </Button>

                            <a href="#upload" className={"cta"}>Get Started</a>
                        </>

                    )}


                </div>
            </nav>
        </header>
    )
}

export default Navbar
# 1779719905584676814

# 1779720180526803110
