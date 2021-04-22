import TableFilter from "../components/TableFilter"
import { Form, Main, Title, Table, TableHeader } from "../styles/home"

export default function Home() {
  return (
    <Main>
      <Title>
        Find the best prices across <br />
        exchange networks
      </Title>
      <Form>
        <input
          type="text"
          placeholder="Write name or symbol"
        />
        <button
          type="submit"
        >
          Search
        </button>
      </Form>
      <Table>
        <TableFilter />
        <TableHeader >
        </TableHeader>
      </Table>
    </Main>
  )
}




