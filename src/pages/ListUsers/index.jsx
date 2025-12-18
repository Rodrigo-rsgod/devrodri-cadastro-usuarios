import { useEffect, useState } from 'react';
import  {useNavigate}  from 'react-router-dom';
import api from '../../services/api'
import Button from "../../components/Button";
import TopBackground from '../../components/TopBackground';

import Trash from '../../assets/trash.svg';

import { Container, ContainerUsers, CardUsers, Title, TrashIcon, AvatarUser, } from './styles'

function ListUsers() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([])

  useEffect(() => {
    async function getUsers() {
      try{
      const { data } = await api.get('/usuarios');
      setUsers(data);
    }catch (error){
          console.error("Erro ao buscar usuário:", error);
    }
       
    }
    getUsers()
  }, []);

  return (
    <Container>

      <TopBackground />
      <Title>Lista de Usuários</Title>

      <ContainerUsers>
        {users.map((user) => (
          <CardUsers key={user.id}>
            <AvatarUser src={`https://i.pravatar.cc/80?u=${user.id}`} />
            <div >
              <h3>{user.name}</h3>
              <p>{user.age}</p>
              <p>{user.email}</p>
              
            </div>
            <TrashIcon src={Trash} alt='icone-lixo' />
          </CardUsers>

        ))}

      </ContainerUsers>

      <Button type="button" onClick={() => navigate(-1)}>Voltar</Button>


    </Container>
  );
}

export default ListUsers;