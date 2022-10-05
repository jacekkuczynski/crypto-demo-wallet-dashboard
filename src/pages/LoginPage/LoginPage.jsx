import { LoginForm } from "../../components/LoginForm/LoginForm";
import { SignUpForm } from "../../components/SignUpForm/SignUpForm";
import { useState } from "react";
import { LogoutBtn } from "../../components/LogoutBtn/LogoutBtn";

export const LoginPage = () => {
  const signUpBtn = (
    <button
      onClick={() => {
        setIsLogin(!isLogin);
      }}
      className="hover:text-blue-400"
    >
      Sign up
    </button>
  );

  const loginBtn = (
    <button
      onClick={() => {
        setIsLogin(!isLogin);
      }}
      className="hover:text-blue-400"
    >
      Login
    </button>
  );

  const [isLogin, setIsLogin] = useState(true);
  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <div>
        {isLogin ? <LoginForm /> : <SignUpForm />}
        <div className="flex justify-between underline text-blue-500 ">
          {isLogin ? signUpBtn : loginBtn}
          <button className="hover:text-blue-400"></button>
          <button className="hover:text-blue-400">forgot password</button>
        </div>
        <div className="flex  justify-center">
          <LogoutBtn />
        </div>
      </div>
    </div>
  );
};
