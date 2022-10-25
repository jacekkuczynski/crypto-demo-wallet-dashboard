import { loginAnonymously } from "../../firebase/loginAnonymously";
export const LoginAnonymouslyBtn = () => {
  const handleClick = () => {
    loginAnonymously();
  };
  return (
    <button onClick={handleClick} className="button">
      Login Anonymously
    </button>
  );
};
