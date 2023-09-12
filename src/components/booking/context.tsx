import { createContext, useContext, useState } from "react"
import { TData } from "../../types/types"

const TempData: TData = {
    direction: "return",
    peoples: {
        adults: 0,
        students: 0,
        seniors: 0,
        youths: 0,
        children: 0,
        toddlers: 0,
        infants: 0
    },
    type: "economy",
    equip: {
        carry: 0,
        bag: 0
    },
    from: [],
    to: [],
    startDate: new Date(),
    endDate: new Date()
}


const contextData = createContext<{data: TData, setData: React.Dispatch<React.SetStateAction<TData>>}>({data: TempData, setData: ()=>{}} )
export const useData = () => useContext(contextData)
export const DataProvider = ({children}: {children: React.ReactNode}) => {
    const [data, setData] = useState(TempData)
    return (
        <contextData.Provider value={{data, setData}}>
            {children}
        </contextData.Provider>
    )
}