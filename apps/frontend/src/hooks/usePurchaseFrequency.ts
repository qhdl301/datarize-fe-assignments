import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export type FrequencyData = {
  range: string
  count: number
}

// 가격대별 빈도 데이터 노출 API
const fetchPurchaseFrequency = async (from?: string, to?: string): Promise<Array<FrequencyData>> => {
  const response = await axios.get('http://localhost:4000/api/purchase-frequency', {
    params: { from, to },
  })
  return response.data
}

export const usePurchaseFrequency = (from?: string, to?: string) => {
  return useQuery({ queryKey: ['purchaseFrequency', from, to], queryFn: () => fetchPurchaseFrequency(from, to) })
}
