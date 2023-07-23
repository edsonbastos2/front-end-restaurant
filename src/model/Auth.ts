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
    signOut: () => void
}

export type SingInProps = Pick<User, 'email' | 'password' >