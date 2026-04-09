"use client";

import { createContext, useContext, useEffect, useState } from "react";

type User = {
    id: string;
    email: string;
    hasCreatorAccess: boolean;
    hasSubscription: boolean;
};

type AuthContextType = {
    user: User | null;
    loading: boolean;
    login: (user: User) => void;
    logout: () => void;
};

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider = ({ children }: any) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const stored = localStorage.getItem("user");
        if (stored) setUser(JSON.parse(stored));
        setLoading(false);
    }, []);

    const login = (user: User) => {
        localStorage.setItem("user", JSON.stringify(user));
        document.cookie = `token=demo; path=/`; // simulate auth
        setUser(user);
    };

    const logout = () => {
        localStorage.removeItem("user");
        document.cookie = "token=; Max-Age=0";
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, loading, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);