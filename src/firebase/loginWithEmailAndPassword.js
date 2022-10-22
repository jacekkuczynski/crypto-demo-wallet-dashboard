import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./initialize";

export const loginWithEmailAndPassword = async (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {})
    .catch((error) => {

    });
};
