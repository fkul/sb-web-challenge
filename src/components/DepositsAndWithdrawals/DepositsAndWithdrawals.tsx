import type { Rates } from "@/types/Rates"
import type { Transaction } from "@/types/Transaction"
import Equiv from "@/components/Equiv"
import PriceString from "@/components/PriceString"
import TransactionAggregator from "@/entities/TransactionAggregator"

interface DepositsAndWithdrawalsProps {
  transactions: Transaction[] | null
  eurRates: Rates | null
}

const DepositsAndWithdrawals = ({
  transactions,
  eurRates,
}: DepositsAndWithdrawalsProps) => {
  if (!transactions) {
    return <span>Loading...</span>
  }

  type AggregatedTransactions = Map<string, TransactionAggregator>

  const aggregate = (transactions: Transaction[]): AggregatedTransactions => {
    const aggregationMap = new Map()

    transactions.forEach(({ currency, ...data }) => {
      if (!aggregationMap.has(currency)) {
        aggregationMap.set(currency, new TransactionAggregator(currency))
      }

      aggregationMap.get(currency).add(data)
    })

    return aggregationMap
  }

  const aggregatedTransactions = aggregate(transactions!)

  return (
    <table>
      <thead>
        <tr>
          <th>currency</th>
          <th>total completed withdrawals</th>
          <th>total completed deposits</th>
          <th>total pending withdrawals</th>
          <th>total pending deposits</th>
          <th>total balance</th>
          <th>total balance eur equiv</th>
        </tr>
      </thead>
      <tbody>
        {aggregatedTransactions &&
          Array.from(aggregatedTransactions.values(), (value) => (
            <tr key={value.currency}>
              <td>{value.currency}</td>
              <td>
                <PriceString
                  price={value.totalCompletedWithdrawals}
                  currency={value.currency}
                />
              </td>
              <td>
                <PriceString
                  price={value.totalCompletedDeposits}
                  currency={value.currency}
                />
              </td>
              <td>
                <PriceString
                  price={value.totalPendingWithdrawals}
                  currency={value.currency}
                />
              </td>
              <td>
                <PriceString
                  price={value.totalPendingDeposits}
                  currency={value.currency}
                />
              </td>
              <td>
                <PriceString
                  price={value.totalBalance}
                  currency={value.currency}
                />
              </td>
              <td>
                <Equiv
                  amount={value.totalBalance}
                  fromCurrency={value.currency}
                  toCurrency="EUR"
                  rates={eurRates}
                />
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  )
}

export default DepositsAndWithdrawals
