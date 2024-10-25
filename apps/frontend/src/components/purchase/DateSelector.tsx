import { FC } from 'react'

interface DateSelectorProps {
  startDate: string
  endDate: string
  setStartDate: (date: string) => void
  setEndDate: (date: string) => void
}

const DateSelector: FC<DateSelectorProps> = ({ startDate, endDate, setStartDate, setEndDate }) => {
  return (
    <div className="mb-4">
      <label htmlFor="start-date" className="mr-2">
        시작 날짜:
      </label>
      <input
        type="date"
        id="start-date"
        value={startDate}
        min="2024-07-01"
        max="2024-07-31"
        onChange={(e) => setStartDate(e.target.value)}
        className="border border-gray-300 rounded p-2"
      />
      <label htmlFor="end-date" className="ml-4 mr-2">
        종료 날짜:
      </label>
      <input
        type="date"
        id="end-date"
        value={endDate}
        min="2024-07-01"
        max="2024-07-31"
        onChange={(e) => setEndDate(e.target.value)}
        className="border border-gray-300 rounded p-2"
      />
    </div>
  )
}

export default DateSelector
