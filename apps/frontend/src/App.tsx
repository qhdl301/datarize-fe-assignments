import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import PurchaseFrequencyLayer from './layer/PurchaseFrequencyLayer'

function App() {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <PurchaseFrequencyLayer />
    </QueryClientProvider>
  )
}

export default App
