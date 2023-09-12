import { useEffect, useState } from "react"
import { useContextMultiDropDown } from "./context"
import { Place } from "../../types/types"
import { SelectedItem } from "../selected-item/selected-iem"
import { OptionItem } from "../option-item/option-item"
import { useData } from "../booking/context"

const FindPlacesURL = "https://www.kayak.de/mvm/smartyv2/search?f=j&s=airportonly&where={query}&lc_cc=DE&lc=en&sv=5&cv=undefined&c=undefined&searchId=undefined&v=undefined"


export const MultiDropDownSelect = ({className, placeholder, dataprop}: {className:string, placeholder:string, dataprop: string}) => {

    const {selected} = useContextMultiDropDown()
    const {options, setOptions} = useContextMultiDropDown()
    const [open, setOpen] = useState(false)
    const [query, setQuery] = useState("")
    const {data, setData} = useData()

    useEffect(() => {
        fetch(FindPlacesURL.replace('{query}', query), {method: "POST"})
        .then(res => res.json())
        .then(res => {
            res.map( (item: { id: string; cityname: string; destination_images: {image_jpeg:string, image_webp: string}; airportname: string }) => {
                const { id, cityname, destination_images, airportname } = item
                const newList: Place = {
                    id,
                    cityname,
                    destination_images,
                    airportname
                }
                return newList
            })
            setOptions(res.slice(0,4) as Place[])
        })
    }, [query])
    useEffect(() => {
        if(dataprop == 'from') { data.from = selected; setData(data) }
        else {data.to = selected; setData(data)}
    }, [selected])
    return (
        <>
            <div className={`w-screen h-screen z-20 ${open ? 'absolute' : 'hidden'} top-0 left-0`} onClick={() => setOpen(false)}></div>
            <label className={`relative z-30 inline-flex rounded-md hover:bg-gray-300 bg-gray-100 gap-2 ${className}`} onFocus={ () => setOpen(true)} >
                <div className="py-1 flex gap-2 items-center overflow-hidden">
                    <i className="bi bi-airplane px-2 rotate-45"></i>
                    {selected.map(item => <SelectedItem item={item} key={`select-${item.id}`} />)}
                    <input className="inline-block h-10 text-lg p-2 bg-transparent outline-none" type="text" value={query} placeholder={placeholder||'Select...'} onChange={e => setQuery(e.target.value)}/>
                </div>
                <label className={`shadow-2xl bg-gray-50 top-14 z-30 w-full md:w-96 ${open ? "absolute" : "hidden"}`} >
                    {options.map(item => <OptionItem item={item} key={`item-${item.id}`} /> )}
                </label>
            </label>
        </>
    )
}