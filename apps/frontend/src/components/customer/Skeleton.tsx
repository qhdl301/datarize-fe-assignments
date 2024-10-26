import { FC } from 'react'

interface SkeletonProps {
  width?: string
  height?: string
  className?: string
}

const Skeleton: FC<SkeletonProps> = ({ width = '100%', height = '20px', className = '' }) => {
  return <div className={`bg-gray-300 animate-pulse ${className}`} style={{ width, height }} />
}

export default Skeleton
