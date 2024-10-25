import { FC } from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from 'recharts'
import { FrequencyCustomData } from '../../hooks/usePurchaseFrequency'

interface PurchaseFrequencyChartProps {
  chartList: Array<FrequencyCustomData>
}

const PurchaseFrequencyChart: FC<PurchaseFrequencyChartProps> = ({ chartList }) => {
  return (
    <BarChart
      width={1500}
      height={300}
      data={chartList}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="range" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="상품가격" fill="#8884d8" />
    </BarChart>
  )
}

export default PurchaseFrequencyChart
