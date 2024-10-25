import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

interface CustomersRequest {
  name?: string
  sortBy?: 'asc' | 'desc'
}

export interface CustomersData {
  id: number
  name: string
  count: number
  totalAmount: number
}

const fetchCustomers = async ({ name, sortBy }: CustomersRequest): Promise<Array<CustomersData>> => {
  const response = await axios.get('http://localhost:4000/api/customers', {
    params: { name, sortBy },
  })
  return response.data
}

/**
 * 고객 목록 반환 Custom Hook
 * @param name - 고객 이름
 * @param sortBy - 정렬 조건
 * @returns 고객 목록 반환 값
 */
export const useCustomers = (name?: string, sortBy: 'asc' | 'desc' = 'asc') => {
  return useQuery({
    queryKey: ['customers', name, sortBy],
    queryFn: () => fetchCustomers({ name, sortBy }),
  })
}
