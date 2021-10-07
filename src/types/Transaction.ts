export type Transaction = {
  id: string
  timestamp: string
  type: "deposit" | "withdrawal"
  status: "completed" | "pending"
  currency: string
  amount: number
}
