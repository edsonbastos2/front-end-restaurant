import Header from 'next/head'
import styles from '../../styles/Home.module.scss'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/Button'



export default function Home() {
  return (
    <>
      <Header>
        <title>Pizzaria nova - Faça seu login</title>
      </Header>
      <div className={styles.container}>
          <h1 className={styles.logo}>Sua<span>Logo</span></h1>
        <div className={styles.login}>

          <form>
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
          <a className={styles.text}>Não tenho cadastro!Cadastre-se</a>
        </div>
      </div>
    </>
  )
}
