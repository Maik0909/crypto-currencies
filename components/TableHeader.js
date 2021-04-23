import styled from "styled-components"


const TableHeader = () => {
    return (
        <Box >
            <li>Currency</li>
            <li>Symbol</li>
            <li>Price</li>
            <li>Variation</li>
            <li>Market Cap</li>
            <li>Volume</li>
        </Box>
    )
}

const Box = styled.ul`
    display: flex;
    list-style-type: none;
    position: relative;
    justify-content: space-around;
    width: 100%;
    /* border-bottom: 1px solid #D1D1E1; */
    grid-row: 2/3;
    height: 100%;
    align-self: center;

    
    & li{
        font-weight: 500;
        font-size: 1rem;    
        color: #7F86A5;
        cursor: pointer;
    }

`

export default TableHeader


