import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import auth from "../firebase/firebase.init";
import { useState } from "react";

 

const Login = () => {


    const [user, setUser] = useState(null);
    

    const handleGoogleSignin = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
        .then((result) => {
            console.log(result);
            setUser(result.user)
        })
        .catch((error) => {
            console.log("Error", error);
            setUser(null)
        })
    }


    const handleGithubSignin = () => {
        const provider = new GithubAuthProvider();
        signInWithPopup(auth, provider)
        .then((result) => {
            console.log(result);
            setUser(result.user);
        })
        .catch(error => {
            console.log(error)
        })
    }

    const handleTwitterSignin = () => {
        console.log("Twitter");
    }


    const handleSignout = () => {
        signOut(auth)
        .then(() => {
            console.log("Signout Done");
            setUser(null);
        })
        .catch(error => {
            console.log(error);
            setUser(null);
        })
    }




    return (
        <div>
            {/* <div className="bg-slate-300 text-center">
               <button className="p-2 border m-2 rounded hover:bg-white transition-all" onClick={handleGoogleSignin}>Login With Google</button>
               <button className="p-2 border m-2 rounded hover:bg-white transition-all" onClick={handleSignout}>Sign Out</button>
            </div> */}

            {
                user 
                ? <button className="p-2 border m-2 rounded hover:bg-white transition-all" onClick={handleSignout}>Sign Out</button>
             
                :<>
                  <button className="p-2 border m-2 rounded hover:bg-white transition-all" onClick={handleGoogleSignin}>Login With Google</button>
                  <button className="p-2 border m-2 rounded hover:bg-white transition-all" onClick={handleGithubSignin}>Login With Github</button>
                  <button className="p-2 border m-2 rounded hover:bg-white transition-all" onClick={handleTwitterSignin}>Login With Twitter</button>
                </>
            }

            <h1 className="text-2xl font-semibold">Profile</h1>
            {
                user && 
                <div className="border p-2 m-4 rounded space-y-2">
                   <h4>{user.displayName}</h4>
                   <h4>{user.email}</h4>
                   <img className="rounded w-24" src={user.photoURL} alt="image" />
                </div>
            }
        </div>
    );
};

export default Login;