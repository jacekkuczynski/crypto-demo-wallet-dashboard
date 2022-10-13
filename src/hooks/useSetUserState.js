/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/initialize";
import { useDispatch } from "react-redux";
import { setUser } from "../features/user/userSlice";
import isDbChecked from "../features/isDbChecked/isDbChecked";
import { useSelector } from "react-redux";

export const useSetUserState = () => {
  const dispatch = useDispatch();
  const userStore = useSelector((state) => state.value?.user);

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
