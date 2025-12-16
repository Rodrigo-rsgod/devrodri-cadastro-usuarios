import styled from "styled-components";

export const Container = styled.div`
        background-color: #ecececff;
        display: flex;
        align-items:center;
        justify-content:space-evenly;
        padding:20px;
        height:100vh;
        flex-direction:column;  
`


export const Form = styled.form`

        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
        max-width: 500px;

`
export const ContainerInputs = styled.div`
        display: flex;
        gap:20px;

`


export const Input = styled.input`
        border-radius: 10px;
        border: 1px solid #7e7e7eff;
        background-color: #fff;
        padding: 12px 20px;
        outline: none;
        width: 100%;
      
`




export const Title = styled.h2`
        color: #8100d6ff;
        text-align:center;
        font-size: 35px;
        font-style: normal;
        font-weight: 600;
`
export const InputLabel = styled.label`
        color: #8100d6ff;
        font-size: 16px;
        font-weight: 600;

        span{
            color: #ffffffff;;

        }



`


