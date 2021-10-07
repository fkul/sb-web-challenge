import { useEffect, useState } from "react"
import type { ApiRates } from "@/types/ApiRates"
import { apiClient, apiCancel } from "@/utils/api"

type EurRatesResponse = {
  BTC: number | null
  CHF: number | null
  USD: number | null
}

export const useEurRates = () => {
  const [eurRates, setEurRates] = useState<ApiRates>(null)

  useEffect(() => {
    apiClient
      .get<EurRatesResponse>("/eur-rates")
      .then((response) => {
        setEurRates({
          btc: response.data.BTC,
          chf: response.data.CHF,
          usd: response.data.USD,
        })
      })
      .catch((error) => {
        if (error.message === "Unmounted") return
        setEurRates(false)
      })

    return () => {
      apiCancel("Unmounted")
    }
  }, [])

  return eurRates
}
