import Moment from "react-moment"
import type { Rates } from "@/types/Rates"
import type { Transaction } from "@/types/Transaction"
import Equiv from "@/components/Equiv"
import PriceString from "@/components/PriceString"

interface TransactionsProps {
  transactions: Transaction[] | null
  eurRates: Rates | null
}

const Transactions = ({ transactions, eurRates }: TransactionsProps) => {
  return !transactions ? (
    <span>Loading...</span>
  ) : (
    <table>
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
    </table>
  )
}

export default Transactions
