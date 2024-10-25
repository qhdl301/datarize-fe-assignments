import { FC, useState } from 'react'
import { useCustomers, useDebounce } from '../../shared'
import { CustomerSerach } from '../../components'
import CustomerOverviewContainer from './CustomerOverviewContainer'

const CustomerContainer: FC = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc') // 정렬 조건

  const debouncedSearchTerm = useDebounce(searchTerm, 300)
  const { data: customers, isLoading } = useCustomers(debouncedSearchTerm)

  return (
    <>
      <CustomerSerach
        sortOrder={sortOrder}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        toggleSortOrder={() => setSortOrder((prev) => (prev === 'asc' ? 'desc' : 'asc'))}
      />
      {isLoading ? (
        <div>Loading customers...</div>
      ) : (
        <CustomerOverviewContainer
          customers={customers || []}
          sortOrder={sortOrder}
          debouncedSearchTerm={debouncedSearchTerm}
        />
      )}
    </>
  )
}

export default CustomerContainer
