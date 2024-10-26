// SkeletonChart.tsx
import { FC } from 'react'

const SkeletonChart: FC = () => {
  return (
    <div className="w-[1500px] h-[300px] bg-gray-200 animate-pulse rounded-md flex justify-center items-center">
      <div className="w-1/2 h-10 bg-gray-300 rounded-md"></div>
    </div>
  )
}

export default SkeletonChart
