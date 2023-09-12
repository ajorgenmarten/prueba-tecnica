import { Place } from "../../types/types";
import { useContextMultiDropDown } from "../multi-drop-down-select/context";

export const OptionItem = ({item}: {item: Place}) => {
    const {selected, setSelected} = useContextMultiDropDown()
    return (
        <div className="m-1 flex p-4 gap-3 rounded-lg items-center hover:bg-gray-200"  >
            { item.destination_images ? <img src={item.destination_images.image_jpeg} alt={item.airportname} className=" h-14 rounded-md"/> :<i className="bi bi-airplane px-2 rotate-45"></i> }
            <div className="flex flex-col flex-grow">
                <div>
                    <span className="font-bold text-lg">{item.cityname}</span> <span className=" font-thin">{item.id}</span>
                </div>
                <span className="text-gray-600">{item.airportname}</span>
            </div>
            <input type="checkbox" className="w-4 h-4" name="" id="" checked={selected.filter(x => x.id == item.id).length ? true : false } onChange={e => {
                if (selected.length == 3) {e.target.checked = false; return;}
                if(e.target.checked) setSelected([...selected, item])
                else setSelected(selected.filter(x => x.id != item.id))
            }} />
        </div>
    )
}