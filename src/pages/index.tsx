import type { NextPage } from "next"
import styled from "styled-components"
import DepositsAndWithdrawals from "@/components/DepositsAndWithdrawals"
import Transactions from "@/components/Transactions"
import { useTransactions } from "@/hooks/useTransactions"
import { useEurRates } from "@/hooks/useEurRates"

const PageWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 20px;
`

const PageSection = styled.section`
  margin: 60px 0;
`

const Home: NextPage = () => {
  const transactions = useTransactions()
  const eurRates = useEurRates()

  return (
    <PageWrapper>
      <PageSection>
        <h2>Transactions</h2>
        <Transactions transactions={transactions} eurRates={eurRates} />
      </PageSection>
      <PageSection>
        <h2>Deposits & Withdrawals</h2>
        <DepositsAndWithdrawals
          transactions={transactions}
          eurRates={eurRates}
        />
      </PageSection>
    </PageWrapper>
  )
}

export default Home
