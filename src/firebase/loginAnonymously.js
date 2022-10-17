import { signInAnonymously } from "firebase/auth";
import { auth } from "./initialize";

export const loginAnonymously = () => {
  signInAnonymously(auth)
    .then(() => {})
    .catch((error) => {
      console.log(error.message);
      console.log(error.code);
      // ...
    });
};
