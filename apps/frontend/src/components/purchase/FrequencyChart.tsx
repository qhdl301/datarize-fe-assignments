import { FC } from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from 'recharts'
import { FrequencyCustomData } from '../../shared/query/usePurchaseFrequency'

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
      <CartesianGrid stroke="#e0e0e0" strokeDasharray="5 5" />
      <XAxis dataKey="range" tick={{ fill: '#333' }} />
      <YAxis tick={{ fill: '#333' }} label={{ value: '갯수', angle: -90, position: 'insideLeft' }} />
      <Tooltip formatter={(value) => `${value} 개`} labelFormatter={(label) => `가격 범위: ${label}`} />
      <Legend />
      <defs>
        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#8884d8" stopOpacity={0.2} />
        </linearGradient>
      </defs>
      <Bar dataKey="상품구매" fill="url(#colorUv)" isAnimationActive={true} animationDuration={1000} />
    </BarChart>
  )
}

export default PurchaseFrequencyChart
