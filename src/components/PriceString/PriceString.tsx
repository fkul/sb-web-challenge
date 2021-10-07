interface PriceStringProps {
  price: number
  currency?: string
  fractionDigits?: number
}

const PriceString = ({ price, currency, fractionDigits }: PriceStringProps) => {
  const fractionDigitsPerCurrency = {
    btc: 4,
    chf: 2,
    eur: 2,
    usd: 2,
  }

  if (!fractionDigits) {
    const currencyKey = (currency?.toLowerCase() ||
      "usd") as keyof typeof fractionDigitsPerCurrency
    fractionDigits = fractionDigitsPerCurrency[currencyKey] || 2
  }
  return (
    <>
      {price.toLocaleString(undefined, {
        minimumFractionDigits: fractionDigits,
        maximumFractionDigits: fractionDigits,
      })}
    </>
  )
}

export default PriceString
