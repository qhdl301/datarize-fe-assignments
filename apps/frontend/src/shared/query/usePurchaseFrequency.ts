import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { toCurrencyFormat } from '../../utils'

export type FrequencyData = {
  range: string
  count: number
}

export type FrequencyCustomData = {
  상품가격: FrequencyData['count']
} & Pick<FrequencyData, 'range'>

const fetchPurchaseFrequency = async (from?: string, to?: string): Promise<Array<FrequencyData>> => {
  const response = await axios.get('http://localhost:4000/api/purchase-frequency', {
    params: { from, to },
  })
  return response.data
}

/**
 * 가격대별 구매 빈도 노출 Custom Hook
 * @param from 시작일
 * @param to 종료일
 * @returns 가격대별 구매 빈도 반환 값
 */
export const usePurchaseFrequency = (from?: string, to?: string) => {
  return useQuery({
    queryKey: ['purchaseFrequency', from, to],
    queryFn: () => fetchPurchaseFrequency(from, to),
    select: (data) =>
      data.map((purchase) => {
        const rangeStrList = purchase.range.split('-')

        return {
          상품가격: purchase.count,
          range: `${toCurrencyFormat(Number(rangeStrList[0]))}원-${toCurrencyFormat(Number(rangeStrList[1]))}원`,
        }
      }),
  })
}
