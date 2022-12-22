import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

export const signUpEmailAndPassword = (email, password) => {
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
    })
    .catch((error) => {
      // ..
    });
};
