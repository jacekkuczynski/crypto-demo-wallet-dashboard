import { LoginForm } from "../../components/LoginForm/LoginForm";
import { SignUpForm } from "../../components/SignUpForm/SignUpForm";
import { useState } from "react";
import { LoginAnonymouslyBtn } from "../../components/LoginAnonymouslyBtn/LoginAnonymouslyBtn";

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
    <>
      <div className="flex flex-col items-center justify-start w-screen h-screen">
        <div className=" mt-32 pb-12 text-center font-extrabold text-transparent text-3xl bg-clip-text bg-gradient-to-t from-neutral-400 to-sky-800">
          CRYPTOCURRENCY DEMO WALLET
        </div>
        <div>
          {isLogin ? <LoginForm /> : <SignUpForm />}
          <div className="flex justify-between underline text-blue-500 ">
            {isLogin ? signUpBtn : loginBtn}
            <button className="hover:text-blue-400"></button>
            <button className="hover:text-blue-400">forgot password</button>
          </div>
          <div className="flex  justify-center"></div>
        </div>
        <div className="flex flex-col items-center mt-8">
          <LoginAnonymouslyBtn />
          <p>(all data will be lost after reloading a page)</p>
        </div>
      </div>
    </>
  );
};
