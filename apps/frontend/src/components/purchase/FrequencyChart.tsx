import { FC } from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from 'recharts'
import { FrequencyData } from '../../hooks/usePurchaseFrequency'

interface PurchaseFrequencyChartProps {
  chartList: Array<FrequencyData>
}

const PurchaseFrequencyChart: FC<PurchaseFrequencyChartProps> = ({ chartList }) => {
  return (
    <BarChart width={1200} height={300} data={chartList}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="range" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="count" fill="#8884d8" />
    </BarChart>
  )
}

export default PurchaseFrequencyChart
