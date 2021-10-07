import type { Rates } from "@/types/Rates"
import PriceString from "@/components/PriceString"

interface EquivProps {
  amount: number
  fromCurrency: string
  toCurrency: string
  rates: Rates | null
}

const Equiv = ({ amount, fromCurrency, toCurrency, rates }: EquivProps) => {
  if (!rates) {
    return <>Loading...</>
  } else {
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
}

export default Equiv
