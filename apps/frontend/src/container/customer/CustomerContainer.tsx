import { FC, useState } from 'react'
import { useDebounce } from '../../shared'
import { CustomerSerach } from '../../components'
import CustomerOverviewContainer from './CustomerOverviewContainer'

const CustomerContainer: FC = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc') // 정렬 조건

  const debouncedSearchTerm = useDebounce(searchTerm, 300)

  return (
    <>
      <CustomerSerach
        sortOrder={sortOrder}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        toggleSortOrder={() => setSortOrder((prev) => (prev === 'asc' ? 'desc' : 'asc'))}
      />
      <CustomerOverviewContainer sortOrder={sortOrder} debouncedSearchTerm={debouncedSearchTerm} />
    </>
  )
}

export default CustomerContainer
