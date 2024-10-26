import { FC, useState, useMemo } from 'react'
import { useCustomerPurchases } from '../../shared'
import { CustomerDetail, CustomerList } from '../../components'
import { useCustomers } from '../../shared/query'

interface CustomerOverviewContainerProps {
  sortOrder: 'asc' | 'desc'
  debouncedSearchTerm: string
}

// 고객 목록, 상세를 노출 시켜주는 Container 입니다.
const CustomerOverviewContainer: FC<CustomerOverviewContainerProps> = ({ sortOrder, debouncedSearchTerm }) => {
  const [selectedCustomerId, setSelectedCustomerId] = useState<number | null>(null) // 선택한 고객 ID

  const { data: customers, isLoading: isCustomersLoading } = useCustomers(debouncedSearchTerm)
  const { data: purchases, isLoading: isPurchasesLoading } = useCustomerPurchases(selectedCustomerId!)

  const filteredCustomers = useMemo(() => {
    if (!customers) return []

    let filtered = customers.filter((customer) => customer.name.toLowerCase().includes(debouncedSearchTerm))

    filtered = filtered.sort((a, b) => {
      const amountComparison = sortOrder === 'asc' ? a.totalAmount - b.totalAmount : b.totalAmount - a.totalAmount

      return amountComparison || a.id - b.id
    })

    return filtered
  }, [customers, debouncedSearchTerm, sortOrder])

  const handleCustomerClick = (id: number) => {
    setSelectedCustomerId(id)
  }

  return (
    <div className="flex justify-between space-x-4">
      {/** 고객 목록 영역 */}
      <CustomerList
        customers={filteredCustomers}
        isLoading={isCustomersLoading}
        selectedCustomerId={selectedCustomerId}
        onCustomerClick={handleCustomerClick}
      />
      {/** 구매 내역 영역 */}
      <CustomerDetail purchases={purchases || []} isLoading={isPurchasesLoading} />
    </div>
  )
}

export default CustomerOverviewContainer
