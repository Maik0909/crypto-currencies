import { motion } from "framer-motion"
import styled from "styled-components"

const Title = styled(motion.h1)`
    font-size: 2rem;
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

`

const Form = styled(motion.form)`
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

const Table = styled(motion.div)`
    min-width: 18.75rem;
    max-width: 50rem;
    width: 80%;
    min-height: 22.5rem;
    border: 1px solid #D1D1E1;
    border-radius: 1.25rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 1rem 0;

    & div:first-of-type{
        width: 100%;

    }

`
const TableHeader = styled.ul`
    display: flex;
    list-style-type: none;
    position: relative;
    justify-content: space-around;
    width: 100%;
    
`

export {
    Title,
    Main,
    Form,
    Table,
    TableHeader
}