import { FC, useState, useMemo } from 'react'
import { useCustomerPurchases } from '../../shared'
import { CustomerDetail, CustomerList } from '../../components'
import { CustomersData } from '../../shared/query'

interface CustomerOverviewContainerProps {
  customers: Array<CustomersData>
  sortOrder: 'asc' | 'desc'
  debouncedSearchTerm: string
}

// 고객 목록, 상세를 노출 시켜주는 Container 입니다.
const CustomerOverviewContainer: FC<CustomerOverviewContainerProps> = ({
  customers,
  sortOrder,
  debouncedSearchTerm,
}) => {
  const [selectedCustomerId, setSelectedCustomerId] = useState<number | null>(null) // 선택한 고객 ID

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
      <CustomerList
        customers={filteredCustomers}
        selectedCustomerId={selectedCustomerId}
        onCustomerClick={handleCustomerClick}
      />
      {selectedCustomerId && (
        <>{isPurchasesLoading ? <div>Loading purchases...</div> : <CustomerDetail purchases={purchases || []} />}</>
      )}
    </div>
  )
}

export default CustomerOverviewContainer
