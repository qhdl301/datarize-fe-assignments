import { FC, useState } from 'react'
import { usePurchaseFrequency } from '../../hooks'
import { DateSelector, FrequencyChart } from '../../components'

const PurchaseFrequencyContainer: FC = () => {
  const [startDate, setStartDate] = useState('2024-07-01')
  const [endDate, setEndDate] = useState('2024-07-31')
  const [error, setError] = useState('')

  const validateDates = (start: string, end: string) => {
    if (new Date(start) > new Date(end)) {
      setError('시작 날짜는 종료 날짜보다 이전이어야 합니다.')
      return false
    }
    setError('') // 에러 메시지 초기화
    return true
  }

  const handleStartDateChange = (date: string) => {
    setStartDate(date)
    validateDates(date, endDate)
  }

  const handleEndDateChange = (date: string) => {
    setEndDate(date)
    validateDates(startDate, date)
  }

  const { data, isLoading } = usePurchaseFrequency(startDate, endDate)

  return (
    <>
      {/** 달력 선택 영역 */}
      <DateSelector
        startDate={startDate}
        endDate={endDate}
        setStartDate={handleStartDateChange}
        setEndDate={handleEndDateChange}
      />
      {error && <div className="text-red-500">{error}</div>}
      {/** 차트 노출 영역 */}
      {isLoading ? <div>Loading...</div> : <FrequencyChart chartList={data || []} />}
    </>
  )
}

export default PurchaseFrequencyContainer
