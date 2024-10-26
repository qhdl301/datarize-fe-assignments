import { FC, memo } from 'react'
import { PurchaseData } from '../../shared'
import { toCurrencyFormat } from '../../utils'
import { Skeleton } from '../../ui'

interface CustomerDetailProps {
  purchases: Array<PurchaseData>
  isLoading: boolean
}

const CustomerDetail: FC<CustomerDetailProps> = ({ purchases, isLoading }) => {
  return (
    <div className="mt-4">
      <h2 className="text-lg font-bold">구매 내역</h2>
      <table className="mt-4 min-w-full bg-white border w-1/2 min-w-[500px]">
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
          {isLoading ? ( // Skeleton UI 처리
            Array.from({ length: 3 }).map((_, index) => (
              <tr key={index}>
                <td className="py-2 px-4 border-b">
                  <Skeleton />
                </td>
                <td className="py-2 px-4 border-b">
                  <Skeleton height="64px" />
                </td>
                <td className="py-2 px-4 border-b">
                  <Skeleton />
                </td>
                <td className="py-2 px-4 border-b">
                  <Skeleton />
                </td>
                <td className="py-2 px-4 border-b">
                  <Skeleton />
                </td>
              </tr>
            ))
          ) : purchases.length === 0 ? (
            <tr>
              <td colSpan={5} className="py-4 text-center">
                구매 내역이 없습니다.
              </td>
            </tr>
          ) : (
            purchases.map((purchase, index) => (
              <tr key={`${purchase.customerId}-${index}`}>
                <td className="py-2 px-4 border-b">{index + 1}.</td>
                <td className="py-2 px-4 border-b">
                  <img src={purchase.imgSrc} alt={purchase.product} className="w-16 h-16" />
                </td>
                <td className="py-2 px-4 border-b">{purchase.product}</td>
                <td className="py-2 px-4 border-b">{toCurrencyFormat(purchase.price)}원</td>
                <td className="py-2 px-4 border-b">{new Date(purchase.date).toLocaleDateString()}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  )
}

export default memo(CustomerDetail)
