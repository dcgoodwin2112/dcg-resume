import MonthInt from "../types/monthInt";
import COLORS from "../styles/colors"

enum Months {
  Jan = 1,
  Feb,
  Mar,
  Apr,
  May,
  Jun,
  Jul,
  Aug,
  Sep,
  Oct,
  Nov,
  Dec,
}

export function getMonthString(month: MonthInt): string {
  return Months[month];
}

export const ICON_SIZE = 28;

export const ICON_COLOR = COLORS.grayDark;

export const MAX_EXP_YEARS = 10;
