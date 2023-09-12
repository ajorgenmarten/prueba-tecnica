import { useState } from "react"

export const SelectDropDown = ({text, element}: {text: string, element: JSX.Element}) => {
    const [open, setOpen] = useState(false)
    return (
        <div className="relative h-6 inline-flex flex-row gap-2 justify-between cursor-pointer select-none" onClick={() => setOpen(!open)}>
            <span>{text}</span>
            {open ? <i className="bi bi-chevron-up"></i> :<i className="bi bi-chevron-down"></i>}
            <div className={`top-8 left-0 rounded-md bg-gray-50 z-40 shadow-lg ${open ? 'absolute' : 'hidden'}`} onClick={e => e.stopPropagation()}>
                {element}
            </div>
        </div>
    )
}