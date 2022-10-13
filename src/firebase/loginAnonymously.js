import { signInAnonymously } from "firebase/auth";
import { auth } from "./initialize";

export const loginAnonymously = () => {
  signInAnonymously(auth)
    .then(() => {
      console.log("signed in");
      console.log(auth.currentUser.uid);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
      // ...
    });
};
