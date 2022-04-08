import Link from "next/link"
import { Ticker } from "../../lib/types"

interface FilterButtonProps {
  ticker: Ticker
}

const FilterButton = ({ ticker }: FilterButtonProps) => {
  return (
    <Link href={`/borrow/${ticker}`}>
      <a className="button ml-3">Borrow</a>
    </Link>
  )
}

export default FilterButton
