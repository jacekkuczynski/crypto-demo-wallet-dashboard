import { ref, set } from "firebase/database";
import { db } from "./initialize";

export const saveCashToDatabase = (userId, cash) => {
  set(ref(db, "users/" + userId + "/cash"), {
    value: cash,
  });
};

export const saveSelectedCoinsToDatabase = (userId, selectedCoins) => {
  set(ref(db, "users/" + userId + "/selectedCoins"), {
    value: selectedCoins,
  });
};

export const savePositionsToDatabase = (userId, positions) => {
  set(ref(db, "users/" + userId + "/positions"), {
    value: positions,
  });
};

export const saveHistoryToDatabase = (userId, history) => {
  set(ref(db, "users/" + userId + "/history"), {
    value: history,
  });
};
