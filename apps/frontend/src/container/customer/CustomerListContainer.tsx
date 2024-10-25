import { FC, useState, useMemo } from 'react'
import { useCustomers, useDebounce } from '../../shared'
import { CustomerList, CustomerSerach } from '../../components'

const CustomerListContainer: FC = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const debouncedSearchTerm = useDebounce(searchTerm, 300)
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc') // 정렬 조건

  const { data: customers, isLoading } = useCustomers(debouncedSearchTerm)

  // 고객 필터 데이터를 가공
  const filteredCustomers = useMemo(() => {
    if (!customers) return []

    let filtered = customers.filter((customer) => customer.name.toLowerCase().includes(debouncedSearchTerm))

    filtered = filtered.sort((a, b) => {
      const amountComparison = sortOrder === 'asc' ? a.totalAmount - b.totalAmount : b.totalAmount - a.totalAmount

      return amountComparison || a.id - b.id
    })

    return filtered
  }, [customers, debouncedSearchTerm, sortOrder])

  return (
    <>
      <CustomerSerach
        sortOrder={sortOrder}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        toggleSortOrder={() => setSortOrder((prev) => (prev === 'asc' ? 'desc' : 'asc'))}
      />
      {isLoading ? <div>Loading...</div> : <CustomerList customers={filteredCustomers} />}
    </>
  )
}

export default CustomerListContainer
