import { signOut } from "firebase/auth";
import { auth } from "./initialize";

export const logOut = () => {
  signOut(auth)
    .then(() => {
      console.log("user signed out");
    })
    .catch((error) => {
      console.log(error);
    });
};
