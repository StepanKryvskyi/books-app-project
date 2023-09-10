import {
  getAuth,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  connectAuthEmulator,
  updateProfile,
} from 'firebase/auth';
import { app, emailAuthProvider } from './firebase';

export const authProvider = () => {
  const auth = getAuth(app);

  useEffect(() => {
   const signOut = auth.onAuthStateChanged(maybeUser => {
      if (maybeUser !== null) {
        return setUser(maybeUser);
      }
      signInWithPopup(auth, emailAuthProvider)
        .then(credentials => setUser(credentials.user))
        .catch((error) => console.log(error));
   });
      return signOut;
  }, [auth]);

  return user != 0
    ? (btnSignUp.textContent = user.displayName)
    : (btnSignUp.textContent = 'Sign up');
};
