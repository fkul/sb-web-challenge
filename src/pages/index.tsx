import type { NextPage } from "next"
import styled from "styled-components"
import DepositsAndWithdrawals from "@/components/DepositsAndWithdrawals"
import Transactions from "@/components/Transactions"

const PageWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`

const PageSection = styled.section`
  margin: 80px 0;
`

const Home: NextPage = () => {
  const transactions = [
    {
      id: "12cc7884-803a-436a-ab4e-506cf7cc9e50",
      timestamp: "2021-03-10T12:00:00.000Z",
      type: "withdrawal" as "withdrawal" | "deposit",
      status: "pending" as "pending" | "completed",
      currency: "BTC",
      amount: 0.01,
    },
    {
      id: "fc937bc7-c7e8-4d95-9943-ad85783c63cf",
      timestamp: "2021-03-10T12:00:00.000Z",
      type: "withdrawal" as "withdrawal" | "deposit",
      status: "pending" as "pending" | "completed",
      currency: "USD",
      amount: 100,
    },
    {
      id: "b0e7a008-c57f-4ca7-930d-8350bf8c5417",
      timestamp: "2021-03-09T12:00:00.000Z",
      type: "deposit" as "withdrawal" | "deposit",
      status: "pending" as "pending" | "completed",
      currency: "USD",
      amount: 897,
    },
    {
      id: "27a7d775-4a93-4338-b464-9f08f37371f1",
      timestamp: "2021-03-09T12:00:00.000Z",
      type: "withdrawal" as "withdrawal" | "deposit",
      status: "pending" as "pending" | "completed",
      currency: "BTC",
      amount: 0.001,
    },
    {
      id: "22675a35-f5d9-474b-9627-fd2c714c29c5",
      timestamp: "2021-03-08T12:00:00.000Z",
      type: "deposit" as "withdrawal" | "deposit",
      status: "pending" as "pending" | "completed",
      currency: "CHF",
      amount: 562,
    },
    {
      id: "237b6a0f-7203-4e6b-99d9-4f4759b8b2fe",
      timestamp: "2021-03-08T12:00:00.000Z",
      type: "withdrawal" as "withdrawal" | "deposit",
      status: "pending" as "pending" | "completed",
      currency: "USD",
      amount: 10,
    },
    {
      id: "e6406549-fdc6-4850-a8db-b2bb8a3386e6",
      timestamp: "2021-03-08T12:00:00.000Z",
      type: "deposit" as "withdrawal" | "deposit",
      status: "completed" as "pending" | "completed",
      currency: "BTC",
      amount: 1.005,
    },
    {
      id: "1f3ffea0-ad56-4276-a12f-64f35d174760",
      timestamp: "2021-03-07T12:00:00.000Z",
      type: "deposit" as "withdrawal" | "deposit",
      status: "completed" as "pending" | "completed",
      currency: "CHF",
      amount: 23,
    },
    {
      id: "1ee2dc90-105b-45ee-82fb-74cb21a3a2d8",
      timestamp: "2021-03-07T12:00:00.000Z",
      type: "deposit" as "withdrawal" | "deposit",
      status: "completed" as "pending" | "completed",
      currency: "CHF",
      amount: 16700,
    },
    {
      id: "b96fac43-999d-4f57-9e8f-d40cd15eece1",
      timestamp: "2021-02-24T12:00:00.000Z",
      type: "withdrawal" as "withdrawal" | "deposit",
      status: "pending" as "pending" | "completed",
      currency: "BTC",
      amount: 5.0255,
    },
    {
      id: "73736881-1981-4420-8964-bacc0c0ff339",
      timestamp: "2021-02-23T12:00:00.000Z",
      type: "deposit" as "withdrawal" | "deposit",
      status: "pending" as "pending" | "completed",
      currency: "CHF",
      amount: 243.78,
    },
    {
      id: "2767e385-5b91-42dc-90dc-e004cc94eda4",
      timestamp: "2021-02-23T12:00:00.000Z",
      type: "withdrawal" as "withdrawal" | "deposit",
      status: "completed" as "pending" | "completed",
      currency: "BTC",
      amount: 0.005,
    },
    {
      id: "51305302-2c83-4af5-8bff-32a99ae9b599",
      timestamp: "2021-02-14T12:00:00.000Z",
      type: "deposit" as "withdrawal" | "deposit",
      status: "pending" as "pending" | "completed",
      currency: "USD",
      amount: 150.75,
    },
    {
      id: "226ee08c-be2d-451e-ba4e-793c66779e44",
      timestamp: "2021-02-14T12:00:00.000Z",
      type: "deposit" as "withdrawal" | "deposit",
      status: "completed" as "pending" | "completed",
      currency: "CHF",
      amount: 5000,
    },
    {
      id: "5d19f228-48d0-45c0-b5b3-44c46a33f959",
      timestamp: "2021-02-10T12:00:00.000Z",
      type: "withdrawal" as "withdrawal" | "deposit",
      status: "pending" as "pending" | "completed",
      currency: "USD",
      amount: 1250,
    },
  ]

  const eurRates = {
    btc: 43037.45199241893,
    chf: 0.9756129690617342,
    usd: null,
  }

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
