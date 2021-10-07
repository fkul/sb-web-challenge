import type { ApiRates } from "@/types/ApiRates"
import PriceString from "@/components/PriceString"

interface EquivProps {
  amount: number
  fromCurrency: string
  toCurrency: string
  rates: ApiRates
}

const Equiv = ({ amount, fromCurrency, toCurrency, rates }: EquivProps) => {
  if (rates === null) {
    return <>Loading...</>
  } else if (!rates) {
    return <>Error!</>
  }

  const rate = rates[fromCurrency.toLowerCase()] || null

  return (
    <>
      {rate ? (
        <PriceString price={amount * rate} currency={toCurrency} />
      ) : (
        "N/A"
      )}
    </>
  )
}

export default Equiv
