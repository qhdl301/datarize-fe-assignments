import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import PurchaseFrequencyLayer from './layer/PurchaseFrequencyLayer'
import CustomerListLayer from './layer/CustomerListLayer'

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
      <PurchaseFrequencyLayer />
      <CustomerListLayer />
    </QueryClientProvider>
  )
}

export default App
