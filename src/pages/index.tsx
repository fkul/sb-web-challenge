import type { NextPage } from "next"
import styled from "styled-components"

const PageWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`

const Home: NextPage = () => {
  return (
    <PageWrapper>
      <h2>Transactions</h2>
      <h2>Deposits & Withdrawals</h2>
    </PageWrapper>
  )
}

export default Home
