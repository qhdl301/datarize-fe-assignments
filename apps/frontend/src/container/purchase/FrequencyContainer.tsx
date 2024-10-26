import { FC, useState } from 'react'
import { usePurchaseFrequency } from '../../shared/query'
import { DateSelector, FrequencyChart, SkeletonChart } from '../../components'

const PurchaseFrequencyContainer: FC = () => {
  const [startDate, setStartDate] = useState('2024-07-01')
  const [endDate, setEndDate] = useState('2024-07-31')
  const [validation, setValidation] = useState('')

  const validateDates = (start: string, end: string) => {
    if (new Date(start) > new Date(end)) {
      setValidation('시작 날짜는 종료 날짜보다 이전이어야 합니다.')
      return false
    }
    setValidation('') // validation 메시지 초기화
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

  const { data, isLoading, isError } = usePurchaseFrequency(startDate, endDate)

  return (
    <>
      {/** 달력 선택 영역 */}
      <DateSelector
        startDate={startDate}
        endDate={endDate}
        setStartDate={handleStartDateChange}
        setEndDate={handleEndDateChange}
      />
      {/** 달력 validation 노출 영역 */}
      {validation && <div className="text-red-500">{validation}</div>}
      {/** 차트 오류 영역 */}
      {isError && <div className="text-red-500">데이터를 불러오는 중 차트 오류가 발생했습니다.</div>}
      {/** 차트 노출 영역 */}
      {isLoading ? <SkeletonChart /> : <FrequencyChart chartList={data || []} />}
    </>
  )
}

export default PurchaseFrequencyContainer
