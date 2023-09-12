import { useData } from "../booking/context"

export const Select = ({items, dataprop}: {items: {id:string, value: string}[], dataprop: string}) => {
    const {data,setData} = useData()
    
    return <div className="flex flex-col gap-2 p-1">
        {items.map(item => <div className=" hover:bg-gray-300 p-1 rounded-md" key={item.id} onClick={() => {
            if(dataprop == 'direction') {
                data.direction = item.id as "return" | "multi-city" | "one-way"
            } else {
                data.type = item.id as "economy" | "premiun" | "business" | "first" | "multiple"
            }
            setData(data)
        }}>
            {item.value}
        </div>)}
    </div>
}