import { ref, child, get } from "firebase/database";
import { db } from "./initialize";

export const readFromDatabase = async (path) => {
  const dbRef = ref(db);
  get(child(dbRef, path))
    .then((snapshot) => {
      if (snapshot.exists()) {
        // console.log("snapshot exists");
        // console.log(snapshot);
        // console.log(snapshot.val());
      } else {
        // console.log("no snapshot");
      }
    })
    .catch((error) => {
      console.error(error);
    });
};
