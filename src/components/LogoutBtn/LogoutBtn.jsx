import { logOut } from "../../firebase/logOut";
export const LogoutBtn = () => {
  return (
    <div>
      <button onClick={logOut}>Logout</button>
    </div>
  );
};
