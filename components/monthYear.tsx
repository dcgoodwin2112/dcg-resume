import { getMonthString } from "../lib/util"
import MonthInt from "../types/monthInt"

type MonthYearProps = {
  year: number,
  month: MonthInt,
}

export default function MonthYear({year, month}: MonthYearProps) {
  return (<time dateTime={`${year}-${month}`}>{`${getMonthString(month)}, ${year}`}</time>)
}
