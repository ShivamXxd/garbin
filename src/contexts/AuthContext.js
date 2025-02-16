// import React, { useContext, useState, useEffect } from "react";
// import { auth } from "../Firebase/Firebase";

// const AuthContext = React.createContext();

// export function useAuth() {
//   return useContext(AuthContext);
// }

// export function AuthProvider({ children }) {
//   const [currentUser, setCurrentUser] = useState();
//   const [loading, setLoading] = useState(true);

//   function signup(email, password) {
//     return auth.createUserWithEmailAndPassword(email, password); // verification
//   }

//   function login(email, password) {
//     return auth.signInWithEmailAndPassword(email, password);
//   }

//   function logout() {
//     return auth.signOut();
//   }

//   function resetPassword(email) {
//     return auth.sendPasswordResetEmail(email);
//   }

//   useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged((user) => {
//       setCurrentUser(user);
//       setLoading(false);
//     });
//     return unsubscribe;
//   }, []);

//   const value = {
//     currentUser,
//     login,
//     logout,
//     signup,
//     resetPassword,
//   };
//   return (
//     <AuthContext.Provider value={value}>
//       {!loading && children}
//     </AuthContext.Provider>
//   );
// }
