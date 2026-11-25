import { useState, type ReactNode } from 'react';
import { AuthContext } from './auth';

export default function AuthProvider({ children }: { children: ReactNode }) {

    const [token, setToken] = useState<string | null>
        (localStorage.getItem('token'));

    const login = (newToken: string) => {
        localStorage.setItem('token', newToken); 
        setToken(newToken); 
    };

    const logout = () => {
        localStorage.clear(); 
        setToken(null); 
    };
    
    return (
        <AuthContext.Provider value={{ token, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}
