/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/initialize";
import { useDispatch } from "react-redux";
import { setUser } from "../features/user/userSlice";
import { setIsDbChecked } from "../features/isDbChecked/isDbChecked";

export const useSetUserState = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user?.isAnonymous === false) {
        dispatch(setUser(user.uid));
      } else if (user?.isAnonymous === true) {
        dispatch(setUser("anonymous"));
      } else {
        dispatch(setUser(null));
        dispatch(setIsDbChecked(false));
      }
    });
  }, []);
};
