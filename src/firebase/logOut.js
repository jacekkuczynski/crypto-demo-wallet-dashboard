import { signOut } from "firebase/auth";
import { auth } from "./initialize";

export const logOut = () => {
  signOut(auth)
    .then(() => {
      console.log("logout");
    })
    .catch((error) => {
      console.log(error);
    });
};
