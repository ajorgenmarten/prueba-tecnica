import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'

import { DateRangePicker, RangeKeyDict } from 'react-date-range'
import { useState } from 'react';
import { useData } from '../booking/context';
import { useEffect } from 'react';

const DateRange = ({className}: {className: string}) => {
  const {data, setData} = useData()
  const [startDate, setStartDate] = useState(data.startDate)
  const [endDate, setEndDate] = useState(data.endDate)

  useEffect(() => {
    data.startDate = startDate,
    data.endDate = endDate
    setData(data)
  }, [startDate, endDate])

  const handleSelect = (ranges: RangeKeyDict) => {
      setStartDate(ranges['selection'].startDate as Date)
      setEndDate(ranges['selection'].endDate as Date)
  }
  const selectionRange = {
    startDate,
    endDate,
    key: 'selection',
  }
  return (
    <DateRangePicker className={className} ranges={[selectionRange]} onChange={handleSelect} />
  )
}

export default DateRange