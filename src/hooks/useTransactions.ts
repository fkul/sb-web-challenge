import { useEffect, useState } from "react"
import type { ApiTransactions } from "@/types/ApiTransactions"
import type { Transaction } from "@/types/Transaction"
import { apiClient, apiCancel } from "@/utils/api"

type TransactionsResponse = {
  transactions: Transaction[]
}

export const useTransactions = () => {
  const [transactions, setTransactions] = useState<ApiTransactions>(null)

  useEffect(() => {
    apiClient
      .get<TransactionsResponse>("/transactions")
      .then((response) => {
        setTransactions(response.data.transactions)
      })
      .catch((error) => {
        if (error.message === "Unmounted") return
        setTransactions(false)
      })

    return () => {
      apiCancel("Unmounted")
    }
  }, [])

  return transactions
}
