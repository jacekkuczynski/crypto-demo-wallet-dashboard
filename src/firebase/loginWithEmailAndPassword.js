import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./initialize";

export const loginWithEmailAndPassword = async (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log(auth.currentUser.uid);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
      console.log(errorCode);
    });
};
