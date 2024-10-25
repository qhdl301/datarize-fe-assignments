import { FC } from 'react'
import { PurchaseData } from '../../shared'
import { toCurrencyFormat } from '../../utils'

interface CustomerDetailProps {
  purchases: Array<PurchaseData>
}

const CustomerDetail: FC<CustomerDetailProps> = ({ purchases }) => {
  return (
    <div className="mt-4">
      <h2 className="text-lg font-bold">구매 내역</h2>
      {purchases.length === 0 ? (
        <p>구매 내역이 없습니다.</p>
      ) : (
        <table className="min-w-full bg-white border w-1/2">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">No.</th>
              <th className="py-2 px-4 border-b">썸네일</th>
              <th className="py-2 px-4 border-b">상품</th>
              <th className="py-2 px-4 border-b">가격</th>
              <th className="py-2 px-4 border-b">구매 날짜</th>
            </tr>
          </thead>
          <tbody>
            {purchases.map((purchase, index) => (
              <tr key={`${purchase.customerId}-${index}`}>
                <td className="py-2 px-4 border-b">{index + 1}.</td>
                <td className="py-2 px-4 border-b">
                  <img src={purchase.imgSrc} alt={purchase.product} className="w-16 h-16" />
                </td>
                <td className="py-2 px-4 border-b">{purchase.product}</td>
                <td className="py-2 px-4 border-b">{toCurrencyFormat(purchase.price)}원</td>
                <td className="py-2 px-4 border-b">{new Date(purchase.date).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}

export default CustomerDetail
