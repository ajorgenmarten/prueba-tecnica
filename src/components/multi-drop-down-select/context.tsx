import { createContext, useContext, useState } from 'react';
import { Place, TContextMultiDropDown } from '../../types/types';

const ContextMultiDropDown = createContext<TContextMultiDropDown>({selected: [], setSelected: () => {}, options: [], setOptions: () => {} })
export const useContextMultiDropDown = () => useContext(ContextMultiDropDown)
export const MultidropDownProvider = ({children}:{children:React.ReactNode}) => {
    const [selected, setSelected] = useState<Place[]>([])
    const [options, setOptions] = useState<Place[]>([])
    return (
        <ContextMultiDropDown.Provider value={{selected, setSelected, options, setOptions}}>
            {children}
        </ContextMultiDropDown.Provider>
    )
}