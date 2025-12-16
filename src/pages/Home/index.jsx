import { useRef } from 'react'
import api from '../../services/api'
import { useState } from 'react'
import reactLogo from '../../assets/react.svg'
import viteLogo from '/vite.svg'
import { useNavigate } from 'react-router-dom'


import { Title, Container, InputLabel, Form, ContainerInputs, Input, } from './styles'
import Button from '../../components/Button'
import TopBackground from '../../components/TopBackground';


function Home() {
  
 const navigate = useNavigate();

  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()

   


  async function registerNewUser() {
    const data = await api.post('/usuarios', {
      email: inputEmail.current.value,
      age: parseInt(inputAge.current.value),
      name: inputName.current.value

    })

    console.log(data)

  }

  return (
    <Container>

      <TopBackground />

      <Form>
        <Title>Cadastrar Usuário</Title>

        <ContainerInputs>
          <div>
            <InputLabel>
              Nome<span>*</span>
            </InputLabel>
            <Input type="text" placeholder="Nome do usuário" ref={inputName} />
          </div>


          <div>
            <InputLabel>
              Idade<span>*</span>
            </InputLabel>
            <Input type="Number" placeholder="Idade do usuário" ref={inputAge} />
          </div>



        </ContainerInputs>

        <div style={{ width: '100%' }}>
          <InputLabel>
            E-mail<span>*</span>
          </InputLabel>
          <Input type="email" placeholder="E-mail do usuário" ref={inputEmail} />
        </div>

        <Button type="button" onClick={registerNewUser} variant="primary" >
          Cadastrar Usuário
        </Button>
      </Form>

 <Button type="button" onClick={ () => navigate ('/lista-de-usuarios')}>Ver lista Usuário
        </Button>


    </Container>
  )
}

export default Home

/*
Exportar "Padrão"
apenas Exportar uma coisa só por pagina --- exportar varias coisa do export
*/