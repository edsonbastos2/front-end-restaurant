import { createContext, ReactNode, useState} from 'react'
import { AuthContextData, User } from '@/model/Auth'

export const AuthContext = createContext({} as AuthContextData)

type Props = {
    children: ReactNode
}

export function AuthProvider({children}:Props) {

    const [user, setUser] = useState<User>()
    const isAuthenticated = !!user

    async function signIn() {
        alert('clicou no login')
    }

    return(
        <AuthContext.Provider value={{user, isAuthenticated, signIn}}>
            { children }
        </AuthContext.Provider>
    )
}