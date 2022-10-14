/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/initialize";
import { useDispatch } from "react-redux";
import { setUser } from "../features/user/userSlice";
import isDbChecked from "../features/isDbChecked/isDbChecked";

export const useSetUserState = () => {
  const dispatch = useDispatch();

  //user.isAnonymous = false

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser(user.uid));
      } else {
        dispatch(setUser(null));
        dispatch(isDbChecked(false));
      }
    });
  }, []);
};

// https://firebase.google.com/docs/reference/js/v8/firebase.User#isanonymous
