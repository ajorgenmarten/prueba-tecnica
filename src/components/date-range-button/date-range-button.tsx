import { MouseEventHandler } from "react"

export const DateRangeButton = ({placeholder, onClick, className}: {placeholder?: string, onClick: MouseEventHandler<HTMLDivElement>, className: string}) => {
    return (
        <div className={`relative inline-flex rounded-md hover:bg-gray-300 bg-gray-100 gap-2 ${className}`} onClick={onClick}>
            <div className="py-1 flex gap-2 items-center">
                <i className="bi bi-calendar px-2 "></i>
                <div className="inline-flex h-10 w-full text-lg p-2 bg-transparent outline-none focus:border items-center"> {placeholder && <span className="text-gray-400">{placeholder}</span>} </div>
            </div>
        </div>
    )
}