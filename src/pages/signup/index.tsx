import Header from 'next/head'
import styles from '../../../styles/Home.module.scss'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/Button'
import Link from  'next/link'



export default function Signup() {
  return (
    <>
      <Header>
        <title>Faça seu login</title>
      </Header>
      <div className={styles.container}>
          <h1 className={styles.logo}>Sua<span>Logo</span></h1>
        <div className={styles.login}>
            <h1>Cadastro de usuário</h1>
          <form>
            <Input
              placeholder='Digite seu nome'
              type='text'
            />
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
              Cadastrar
            </Button>
          </form>
          <Link href='/' className={styles.text}>Já tenho cadastro! login</Link>
        </div>
      </div>
    </>
  )
}
