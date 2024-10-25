import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

// 구매 내역 인터페이스
export interface PurchaseData {
  customerId: number
  date: string
  quantity: number
  product: string
  price: number
  imgSrc: string
}

// 특정 고객의 구매 내역을 가져오는 함수
const fetchCustomerPurchases = async (customerId: number): Promise<Array<Omit<PurchaseData, 'id'>>> => {
  const response = await axios.get(`http://localhost:4000/api/customers/${customerId}/purchases`)
  return response.data
}

/**
 * 특정 고객의 구매 내역 반환 Custom Hook
 * @param customerId - 고객 ID
 * @returns 고객의 구매 내역 반환 값
 */
export const useCustomerPurchases = (customerId: number) => {
  return useQuery<Array<PurchaseData>, Error>({
    queryKey: ['customerPurchases', customerId],
    queryFn: () => fetchCustomerPurchases(customerId),
    select: (data) =>
      data.map((purchase) => {
        return {
          ...purchase,
          customerId,
        }
      }),
    enabled: !!customerId,
  })
}
