import { ref, child, get } from "firebase/database";
import { db } from "./initialize";

export const readFromDatabase = (path) => {
  const dbRef = ref(db);
  get(child(dbRef, path))
    .then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
      } else {
        console.log("No data available");
      }
    })
    .catch((error) => {
      console.error(error);
    });
};
