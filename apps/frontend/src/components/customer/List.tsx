import { FC, memo } from 'react'
import { CustomersData } from '../../shared/query'
import { toCurrencyFormat } from '../../utils'

interface CustomerListProps {
  selectedCustomerId: number | null
  customers: Array<CustomersData>
  onCustomerClick: (id: number) => void
}

const CustomerList: FC<CustomerListProps> = ({ selectedCustomerId, customers, onCustomerClick }) => {
  return (
    <div className="mt-4">
      <h2 className="text-lg font-bold">고객 목록</h2>
      <table className="min-w-full border bg-white w-1/2">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">이름</th>
            <th className="py-2 px-4 border-b">총 구매 횟수</th>
            <th className="py-2 px-4 border-b">총 구매 금액</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr
              key={customer.id}
              className={`cursor-pointer hover:bg-gray-100 ${selectedCustomerId === customer.id ? 'bg-blue-100' : ''}`}
              onClick={() => onCustomerClick(customer.id)}
            >
              <td className="py-2 px-4 border-b text-center">{customer.id}</td>
              <td className="py-2 px-4 border-b text-center">{customer.name}</td>
              <td className="py-2 px-4 border-b text-center">{customer.count}</td>
              <td className="py-2 px-4 border-b text-center">{toCurrencyFormat(customer.totalAmount)}원</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default memo(CustomerList)
