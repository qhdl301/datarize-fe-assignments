import CustomerListContainer from '../container/customer'

const CustomerListLayer = () => {
  return (
    <div className="flex flex-col items-center p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-lg font-semibold mb-5">가장 많이 구매한 고객 목록 및 검색 영역</h2>
      <CustomerListContainer />
    </div>
  )
}

export default CustomerListLayer
