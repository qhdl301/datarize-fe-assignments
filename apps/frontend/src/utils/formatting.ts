export const toCurrencyFormat = (amount: number): string => {
  return new Intl.NumberFormat('ko-KR').format(amount)
}
