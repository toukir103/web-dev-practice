import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase/firebase.init";

const Login = () => {
  const provider = new GoogleAuthProvider();

  const handleGoogleSignin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log("User Info:", result.user);
      })
      .catch((error) => {
        console.error("Login Error:", error.message);
      });
  };

  return (
    <div>
      <h2>Please login</h2>
      <button onClick={handleGoogleSignin}>Sign in with Google</button>
    </div>
  );
};

export default Login;
