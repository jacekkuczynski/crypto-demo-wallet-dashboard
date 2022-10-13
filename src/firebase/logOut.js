import { signOut } from "firebase/auth";
import { auth } from "./initialize";

export const logOut = () => {
  signOut(auth)
    .then(() => {})
    .catch((error) => {});
};
