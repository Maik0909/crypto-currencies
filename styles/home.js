import styled from "styled-components"

const Title = styled.h1`
    font-size: 2.25rem;
    color: #13071D;
    text-align: center;
    font-weight: 800;
`
const Main = styled.main`
    width: 100vw;
    height: 100vh;
    display: grid;
    place-items: center;
    grid-template-columns: 1fr;
    grid-template-rows: 0.15fr 0.15fr 0.7fr;
    row-gap: 1rem;

`

const Form = styled.form`
    width: calc(100% / 3.5);
    min-width: 18.75rem;
    height: 4.5rem;
    border-radius: 0.5rem;
    background-color: white;
    box-shadow: 0px 20px 20px -5px rgba(38, 9, 45, 0.05);
    border: 1px solid #A77DF4;
    display: flex;
    align-items: center;
    justify-content: space-around;


    & input{
        background: none;
        border: none;
        outline: none;
        width: 60%;
        font-size: 1.15rem;
        font-weight: 600;
        color: #462065;

    }

    & input::placeholder{
        color: #462065;
    }

    & button{
        border: none;
        background: none;
        outline: none;
        font-size: 1.15rem;
        font-weight: 700;
        color: #170427;
        cursor: pointer;
    }
`




export {
    Title,
    Main,
    Form,

}