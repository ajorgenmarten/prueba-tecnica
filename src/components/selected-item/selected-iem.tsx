import { Place } from "../../types/types"
import { useContextMultiDropDown } from "../multi-drop-down-select/context"

export const SelectedItem = ({item}: {item:Place}) => {
    const {selected, setSelected} = useContextMultiDropDown()
    return (
        <div className="inline-flex p-1 justify-between border gap-2" >
            {item.id}
            <i className="bi bi-x border px-1 rounded cursor-pointer" onClick={() => {
                setSelected(selected.filter(x => x.id != item.id))
            }}></i>
        </div>
    )
}