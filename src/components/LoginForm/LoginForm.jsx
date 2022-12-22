import React from 'react';
import { loginWithEmailAndPassword } from '../../firebase/loginWithEmailAndPassword';

export function LoginForm() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.currentTarget.email.value;
    const password = event.currentTarget.password.value;
    loginWithEmailAndPassword(email, password);
  };

  return (
    <div>
      <p className="text-center text-2xl pb-8 font-bold">Login</p>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center gap-4 "
      >
        <input
          placeholder="Enter e-mail"
          type="email"
          id="email"
          className="border p-1"
        />
        <input
          placeholder="Enter a password"
          type="password"
          id="password"
          className="border p-1"
        />
        <input type="submit" value="Submit" className="button" />
      </form>
    </div>
  );
}
