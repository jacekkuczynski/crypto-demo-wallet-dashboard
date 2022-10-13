import { ref, set } from "firebase/database";
import { db } from "./initialize";

export const saveCashToDatabase = (userId, cash) => {
  set(ref(db, "users/" + userId + "/cash"), {
    cash,
  });
};

export const saveSelectedCoinsToDatabase = (userId, selectedCoins) => {
  set(ref(db, "users/" + userId + "/selectedCoins"), {
    selectedCoins,
  });
};
