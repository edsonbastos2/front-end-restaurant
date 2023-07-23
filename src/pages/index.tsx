import Header from 'next/head'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/Button'
export default function Home() {
  return (
    <>
      <Header>
        <title>Pizzaria nova - Faça seu login</title>
      </Header>
      <div>
        <h1>Sua <span>Logo</span></h1>
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
      </div>
    </>
  )
}
