import { FC } from 'react'

interface CustomerSearchProps {
  searchTerm: string
  setSearchTerm: (term: string) => void
  sortOrder: 'asc' | 'desc'
  toggleSortOrder: () => void
}

const CustomerSearch: FC<CustomerSearchProps> = ({ searchTerm, setSearchTerm, sortOrder, toggleSortOrder }) => {
  return (
    <div className="flex items-center mb-4">
      <input
        type="text"
        placeholder="고객 이름으로 검색"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border border-gray-300 rounded p-2 mr-4"
        aria-label="고객 이름 검색"
      />
      <button
        onClick={toggleSortOrder}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
      >
        {sortOrder === 'asc' ? '내림차순' : '오름차순'}
      </button>
    </div>
  )
}

export default CustomerSearch
