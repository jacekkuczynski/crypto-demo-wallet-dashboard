import { ref, child, get } from "firebase/database";
import { db } from "../firebase/initialize";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export const useReadFromDatabase = (path) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const userID = useSelector((state) => state.user?.value);
  // console.log(`users/${userID}/${path}`);

  useEffect(() => {
    if (userID) {
      const dbRef = ref(db);
      get(child(dbRef, `users/${userID}/${path}`))
        .then((snapshot) => {
          if (snapshot.exists()) {
            setData(snapshot.val());
          }
        })
        .catch((error) => {
          setError(error);
        });
    }
  }, [path, userID]);
  return { data };
};
