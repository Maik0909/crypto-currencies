import Table from "../components/Table"
import { Form, Main, Title } from "../styles/home"
import { FiSearch } from 'react-icons/fi'


export default function Home() {
  return (
    <Main>
      <Title>
        Find the best prices across <br />
        exchange networks
      </Title>
      <Form>
        <FiSearch size="1.25rem" color="#462065" />
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
      <Table />
    </Main>
  )
}




