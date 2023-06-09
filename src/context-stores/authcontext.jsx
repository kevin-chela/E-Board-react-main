import React, { useContext, useEffect, useState } from 'react';
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from '../firebase/firebaseConfig';

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext);
}

// Provides Authentication services.
export default function AuthContextProvider({ children }) {

    const [user, setUser] = useState(false);
    const [user_data, setUser_data] = useState();

    useEffect(() => {
        if (user) {

            const getUserData = async () => {
                const q = query(collection(db, "user_data"), where("user_id", "==", user.uid));

                const querySnapshot = await getDocs(q);
                querySnapshot.forEach((doc) => {
                    // doc.data() is never undefined for query doc snapshots
                    setUser_data(doc.data());
                })
            }

            getUserData();
        }
    }, [user])

    const value = {
        user: user,
        user_data: user_data,
        setUser_data: setUser_data,
        setUser: setUser
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}
