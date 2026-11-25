import {createContext, useContext} from 'react';

export interface AuthContextType{
    token: string | null;
    login: (token: string) => void;
    logout: () => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export function useAuth(){
    const auth = useContext(AuthContext);
    if (!auth) throw new Error('useAuth tiene que usarse dentro <AuthProvider>');
    return auth;
}