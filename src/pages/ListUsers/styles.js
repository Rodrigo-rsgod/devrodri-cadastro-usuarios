import styled from "styled-components";
import Button from '../../components/Button'

export const Container = styled.div`
    background-color: #181f36;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding: 20px;

`;

export const Title = styled.h2`
    
    color: #ffffffff;
    text-align:center;
    font-size: 38px;
    font-style: normal;
    font-weight: 600;
    margin-top:30px;
`;


export const ContainerUsers = styled.div`
 display: grid;
 grid-template-columns: 1fr 1fr;
 gap:20px;
 margin: 40px 0;

@media (max-width: 750px) {
    grid-template-columns: 1fr;
}

`;


export const CardUsers = styled.div`

background-color: #252d48;
padding: 16px;
border-radius: 32px;
display: flex;
justify-content: space-between ;
align-items: center;
gap: 20px;
max-width:380px;

h3 {
    color: #fff;
    font-size: 25px;
    margin-bottom: 200;
}

p {

    color: #fff;
    font-size: 16px;
    font-weight: 300;
    text-transform: capitalize;
}

`;



export const TrashIcon = styled.img`
    cursor: pointer;
    padding-left: 30px;

    &:hover {
        opacity: 0.8;
    }

    &:active{
        opacity: 0.5;
    }

`;


export const AvatarUser = styled.img`
        height: 80px;
`;

export const BackButton = styled.button`
    /* Reset de estilos padrão */
    border: 1px solid #ffffff;     /* Borda fina branca */
    border-radius: 30px;          /* Borda arredondada */
    background: transparent;      /* Fundo transparente para destacar a borda */
    color: #ffffff;               /* Cor do texto branca */
    
    padding: 10px 20px;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;    /* Transição suave para o hover */
    margin-top: 30px;
    width: fit-content;           /* Ajusta a largura ao texto */
    align-self: center;           /* Centraliza se o container for flex */

    &:hover {
        background-color: #ffffff; /* Inverte as cores no hover */
        color: #181f36;            /* Cor de fundo do seu container */
    }

    &:active {
        opacity: 0.8;
    }
`;