import { signInAnonymously } from "firebase/auth";
import { auth } from "./initialize";

export const loginAnonymously = () => {
  signInAnonymously(auth)
    .then(() => {})
    .catch((error) => {
      // ...
    });
};
