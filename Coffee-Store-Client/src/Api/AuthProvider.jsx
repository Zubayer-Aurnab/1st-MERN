import { createContext } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../Firebase/Firebase.config";

export const AuthContext = createContext(null)

const Authprovider = ({ children }) => {

    //create user

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //login user 
    const LoginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }


    const authIitem = {
        createUser,
        LoginUser
    }
    return (
        <AuthContext.Provider value={authIitem}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;