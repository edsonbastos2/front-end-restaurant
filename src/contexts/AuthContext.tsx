import { createContext, ReactNode, useState} from 'react'
import { AuthContextData, User, SingInProps } from '@/model/Auth'
import { destroyCookie } from 'nookies'
import Router from 'next/router'

export const AuthContext = createContext({} as AuthContextData)

type Props = {
    children: ReactNode
}

export function signOut() {
    try {
        destroyCookie(undefined, '@restaurant_token')
        Router.push('/')
    } catch (error) {
        console.log('erro ao deslogar')
    }
}

export function AuthProvider({children}:Props) {

    const [user, setUser] = useState<User>()
    const isAuthenticated = !!user

    async function signIn({ email, password }:SingInProps) {
        console.log('email: ', email)
        console.log('password: ', password)
    }

    return(
        <AuthContext.Provider value={{user, isAuthenticated, signIn, signOut}}>
            { children }
        </AuthContext.Provider>
    )
}