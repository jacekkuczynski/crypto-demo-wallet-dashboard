import { ref, child, get } from 'firebase/database';
import { useState, useEffect } from 'react';
import { db } from '../firebase/initialize';

export const useReadFromDatabase = (userID) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const dbRef = ref(db);
    get(child(dbRef, `users/${userID}/`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          setData(snapshot.val());
        } else {
          setData(null);
        }
      })
      .catch((error) => {});
  }, [userID]);

  return { data };
};
