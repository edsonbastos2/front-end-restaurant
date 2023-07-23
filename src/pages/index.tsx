import { useContext, FormEvent } from 'react'
import Header from 'next/head'
import styles from '../../styles/Home.module.scss'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/Button'
import Link from  'next/link'
import { AuthContext } from '@/contexts/AuthContext'



export default function Home() {

  const { signIn } = useContext(AuthContext)

  const user = {
    email: '',
    password:''
  }

  async function handleLogin(event: FormEvent) {
    event.preventDefault()
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
            />
            <Input
              placeholder='Digite sua senha'
              type='password'
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
