import PurchaseFrequencyContainer from '../container/purchase'

const PurchaseFrequencyLayer = () => {
  return (
    <div className="flex flex-col items-center p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-lg font-semibold mb-5">가격대별 구매 빈도 분석 영역</h2>
      <PurchaseFrequencyContainer />
    </div>
  )
}

export default PurchaseFrequencyLayer
