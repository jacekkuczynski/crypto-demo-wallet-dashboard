import { signUpEmailAndPassword } from "../../firebase/signUpEmailAndPassword";

export const SignUpForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.currentTarget.email.value;
    const password = event.currentTarget.password.value;
    signUpEmailAndPassword(email, password);
  };

  return (
    <div>
      <p className="text-center text-2xl pb-8 font-bold">Sign up</p>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center gap-4 "
      >
        <input
          placeholder="Enter e-mail"
          type="email"
          id="email"
          className="border p-1"
        ></input>
        <input
          placeholder="Enter a password"
          type="password"
          id="password"
          className="border p-1"
        ></input>
        <input
          type="submit"
          value="Submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        ></input>
      </form>
    </div>
  );
};
