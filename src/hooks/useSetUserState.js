import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/initialize";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../features/user/userSlice";

export const useSetUserState = () => {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.user.value);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        if (!userState) {
          dispatch(setUser({ email: user.email, id: user.uid }));
        }
      } else {
        if (userState) {
          dispatch(setUser(null));
        }
      }
    });
  }, []);
};
