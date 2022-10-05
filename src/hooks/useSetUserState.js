import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/initialize";
import { useDispatch } from "react-redux";
import { setUser } from "../features/user/userSlice";

export const useSetUserState = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser({ email: user.email, id: user.uid }));
      } else {
        dispatch(setUser(null));
      }
    });
  }, []);
};
