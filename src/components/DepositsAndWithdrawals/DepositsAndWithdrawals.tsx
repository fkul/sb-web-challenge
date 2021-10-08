import type { ApiRates } from "@/types/ApiRates"
import type { ApiTransactions } from "@/types/ApiTransactions"
import type { Transaction } from "@/types/Transaction"
import Equiv from "@/components/Equiv"
import PriceString from "@/components/PriceString"
import Table from "@/components/Table"
import TransactionAggregator from "@/entities/TransactionAggregator"

interface DepositsAndWithdrawalsProps {
  transactions: ApiTransactions
  eurRates: ApiRates
}

const DepositsAndWithdrawals = ({
  transactions,
  eurRates,
}: DepositsAndWithdrawalsProps) => {
  if (transactions === null) {
    return <span>Loading...</span>
  } else if (!transactions) {
    return <span>Failed to load transactions.</span>
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
    <Table>
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
    </Table>
  )
}

export default DepositsAndWithdrawals
