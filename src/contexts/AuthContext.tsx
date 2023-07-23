import { createContext, ReactNode, useState} from 'react'

import { api } from '@/services/apiClient'

import { AuthContextData, User, SingInProps } from '@/model/Auth'
import { destroyCookie, setCookie, parseCookies } from 'nookies'
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
        try {

            const { data } = await api.post('/login', {
                email,
                password
            })

            // console.log('data: ', data)
            const {id, name, token } = data

            setCookie(undefined, '@restaurant_token', token, {
                maxAge: 60 * 60 * 24 * 30,
                path: '/'
            })

            setUser({id, email, name})

            // passar para todas as requisições o token
            api.defaults.headers['Authorization'] = `Bearer ${token}`

            // redirecionar para a página principal
            Router.push('/dashboard')
            
        } catch (error) {
            console.log('erro: ', error)
        }
    }

    return(
        <AuthContext.Provider value={{user, isAuthenticated, signIn, signOut}}>
            { children }
        </AuthContext.Provider>
    )
}