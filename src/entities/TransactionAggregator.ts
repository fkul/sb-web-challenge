import { Transaction } from "@/types/Transaction"

export default class TransactionAggregator {
  currency: string
  totalCompletedWithdrawals: number = 0
  totalCompletedDeposits: number = 0
  totalPendingWithdrawals: number = 0
  totalPendingDeposits: number = 0
  totalBalance: number = 0

  constructor(currency: string) {
    this.currency = currency
  }

  add(transaction: Transaction): void {
    if (transaction.status === "completed") {
      if (transaction.type === "withdrawal") {
        this.totalCompletedWithdrawals += transaction.amount
        this.totalBalance -= transaction.amount
      } else {
        this.totalCompletedDeposits += transaction.amount
        this.totalBalance += transaction.amount
      }
    } else {
      if (transaction.type === "withdrawal") {
        this.totalPendingWithdrawals += transaction.amount
      } else {
        this.totalPendingDeposits += transaction.amount
      }
    }
  }
}
