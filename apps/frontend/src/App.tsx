import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import PurchaseFrequencyLayer from './layer/PurchaseFrequencyLayer'
import CustomerLayer from './layer/CustomerLayer'

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: 1,
      },
    },
  })

  return (
    <QueryClientProvider client={queryClient}>
      {/** 가격대별 구매 빈도 분석 영역 */}
      <PurchaseFrequencyLayer />
      {/** 가장 많이 구매한 고객 목록 및 검색 영역 */}
      <CustomerLayer />
    </QueryClientProvider>
  )
}

export default App
