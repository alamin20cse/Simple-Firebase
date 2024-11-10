import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

import auth from "../../firebase/firebase.init";
import { useState } from "react";


const Login = () => {

    const [User,setUser]=useState(null);
    const provider=new GoogleAuthProvider();


    const handelGoogleSignIn=()=>{
       signInWithPopup(auth,provider)
       .then((result)=>{
        console.log(result.user);
        setUser(result.user);
       })
       .catch((error)=>{

        console.log('error this'+error);
        setUser(null);
       })



    }
    
    const handelGoogleSignOut=()=>{
        signOut(auth)
        .then(()=>{
            console.log('sign out done');
            setUser(null);
        })
        .catch((error)=>{

            console.log('error'+error);
        })

       }



    return (
        <div>
{/* 
            <button onClick={handelGoogleSignIn}>Log in with Google</button>
            <button onClick={handelGoogleSignOut}>Sign Out</button> */}

            {
                User  ?    <button onClick={handelGoogleSignOut}>Sign Out</button>:  <button onClick={handelGoogleSignIn}>Log in with Google</button>
            }

            {User && <div>

                <img src={User.photoURL}/>
                <h3>{User.displayName}</h3>
                <h4>Email: {User.email}</h4>


            </div> }
            
        </div>
    );
};

export default Login;