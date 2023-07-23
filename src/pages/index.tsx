import { useContext, FormEvent, useState } from 'react'
import Header from 'next/head'
import styles from '../../styles/Home.module.scss'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/Button'
import Link from  'next/link'
import { AuthContext } from '@/contexts/AuthContext'



export default function Home() {

  const { signIn } = useContext(AuthContext)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleLogin(event: FormEvent) {
    event.preventDefault()

    const user = {
      email,
      password
    }

    await signIn(user)
  }

  return (
    <>
      <Header>
        <title>Pizzaria nova - Faça seu login</title>
      </Header>
      <div className={styles.container}>
          <h1 className={styles.logo}>Sua<span>Logo</span></h1>
        <div className={styles.login}>

          <form onSubmit={handleLogin}>
            <Input
              placeholder='Digite seu e-mail'
              type='text'
              value={email}
              onChange={(e) => setEmail(e.target.value) }
            />
            <Input
              placeholder='Digite sua senha'
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value) }
            />

            <Button
              type='submit'
              loading={false}
            >
              Acessar
            </Button>
          </form>
          <Link href='/signup' className={styles.text}>
              Não tenho cadastro!Cadastre-se
          </Link>
        </div>
      </div>
    </>
  )
}
