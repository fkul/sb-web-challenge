import Moment from "react-moment"
import type { ApiTransactions } from "@/types/ApiTransactions"
import type { ApiRates } from "@/types/ApiRates"
import Equiv from "@/components/Equiv"
import PriceString from "@/components/PriceString"
import Table from "@/components/Table"

interface TransactionsProps {
  transactions: ApiTransactions
  eurRates: ApiRates
}

const Transactions = ({ transactions, eurRates }: TransactionsProps) => {
  if (transactions === null) {
    return <span>Loading...</span>
  } else if (!transactions) {
    return <span>Failed to load transactions.</span>
  }

  return (
    <Table>
      <thead>
        <tr>
          <th>timestamp</th>
          <th>currency</th>
          <th>amount</th>
          <th>eur equiv</th>
          <th>type</th>
          <th>status</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction) => (
          <tr key={transaction.id}>
            <td>
              <Moment format="MMM DD YYYY">{transaction.timestamp}</Moment>
            </td>
            <td>{transaction.currency}</td>
            <td>
              <PriceString
                price={transaction.amount}
                currency={transaction.currency}
              />
            </td>
            <td>
              <Equiv
                amount={transaction.amount}
                fromCurrency={transaction.currency}
                toCurrency="EUR"
                rates={eurRates}
              />
            </td>
            <td>{transaction.type}</td>
            <td>{transaction.status}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

export default Transactions
