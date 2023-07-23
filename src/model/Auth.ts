export interface User {
    id?: string
    name: string
    email: string
    password?: string
}

export type AuthContextData = {
    user: User
    isAuthenticated: boolean
    signIn: (credential: SingInProps) => Promise<void>
}

type SingInProps = Pick<User, 'email' | 'password' >