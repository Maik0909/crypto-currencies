import styled from 'styled-components'
import TableFilter from './TableFilter'
import TableHeader from './TableHeader'
import TableRow from './TableRow'

const Table = () => {

    console.log(cryptoCoins)
    return (
        <Box>
            <TableFilter />
            <TableHeader />
            <TableBody>
                <TableRow />
                <TableRow />
            </TableBody>
        </Box>
    )
}

export default Table


const Box = styled.section`
    min-width: 18.75rem;
    max-width: 50rem;
    width: 80%;
    min-height: 25rem;
    border: 1px solid #D1D1E1;
    border-radius: 1.25rem;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 0.2fr 0.1fr 0.7fr;
    align-items: center;
    padding: 1rem 0;
    align-self: flex-start;


`

const TableBody = styled.div`
    grid-row: 3/4;
    height: 100%;
`