import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import auth from "../../firebase/firebase.init";
import { useState } from "react";

const Login = () => {
    const [User, setUser] = useState(null);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                console.log(result.user);
                setUser(result.user);
            })
            .catch((error) => {
                console.log('Error:', error);
                setUser(null);
            });
    };

    const handleGoogleSignOut = () => {
        signOut(auth)
            .then(() => {
                console.log('Sign out done');
                setUser(null);
            })
            .catch((error) => {
                console.log('Error:', error);
            });
    };

    const handleGithubSignIn = () => {
        signInWithPopup(auth, githubProvider)
            .then((result) => {
                console.log(result.user);
                setUser(result.user);
            })
            .catch((error) => {
                console.log('Error:', error);
            });
    };

    return (
        <div>
            {User ? (
                <button onClick={handleGoogleSignOut}>Sign Out</button>
            ) : (
                <div>
                    <button onClick={handleGoogleSignIn}>Log in with Google</button>
                    <button onClick={handleGithubSignIn}>Log in with GitHub</button>
                </div>
            )}

            {User && (
                <div>
                    <img src={User.photoURL} alt="User profile" />
                    <h3>{User.displayName}</h3>
                    <h4>Email: {User.email}</h4>
                </div>
            )}
        </div>
    );
};

export default Login;
