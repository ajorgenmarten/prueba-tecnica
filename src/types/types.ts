export type Place = {
    cityname: string,
    id: string
    airportname: string,
    destination_images?: {
        image_jpeg: string,
        image_webp: string,
    }
}

export type TContextMultiDropDown = {
    selected: Place[],
    setSelected: React.Dispatch<React.SetStateAction<Place[]>>,
    options: Place[],
    setOptions: React.Dispatch<React.SetStateAction<Place[]>>,
}

export type TData = {
    direction: "return"|"multi-city"|"one-way",
    peoples: {
        adults: number
        students: number
        seniors: number
        youths: number
        children: number
        toddlers: number
        infants: number
    },
    type: "economy"|"premiun"|"business"|"first"|"multiple",
    equip: {
        carry: number
        bag: number
    }
    from: Place[]
    to: Place[]
    startDate: Date
    endDate: Date
}

export type TCounter = {
    text: string,
    prop: string
    value: number
}