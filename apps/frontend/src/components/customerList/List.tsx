import { FC } from 'react'
import { CustomersData } from '../../shared/query'
import { toCurrencyFormat } from '../../utils'

interface CustomerListProps {
  customers: Array<CustomersData>
}

const CustomerList: FC<CustomerListProps> = ({ customers }) => {
  return (
    <table className="min-w-full bg-white">
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
          <tr key={customer.id}>
            <td className="py-2 px-4 border-b text-center">{customer.id}</td>
            <td className="py-2 px-4 border-b text-center">{customer.name}</td>
            <td className="py-2 px-4 border-b text-center">{customer.count}</td>
            <td className="py-2 px-4 border-b text-center">{toCurrencyFormat(customer.totalAmount)}원</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default CustomerList
