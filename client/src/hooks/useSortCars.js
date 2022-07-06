import { useState, useMemo } from "react";

export const useSortCars = (cars =[]) => {
  const [isDescSort, setIsDescSort] = useState(false)

  const sortedCars = useMemo(() => {
    const sortableCars = [...cars]

    sortableCars.sort((a, b) => {
      if (+a.price < +b.price) return isDescSort ? 1 : -1
      if (+a.price > +b.price) return isDescSort ? -1 : 1

      return 0
    })

    return sortableCars
  }, [isDescSort, cars])

  return {
    isDescSort,
    setIsDescSort,
    sortedCars
  }
}

