import { SelectDropDown } from "../select-drop-down/select-drop-down";
import { MultidropDownProvider } from "../multi-drop-down-select/context";
import { MultiDropDownSelect } from "../multi-drop-down-select/multi-drop-down-select";
import { DateRangeButton } from "../date-range-button/date-range-button";
import { Select } from "../select/select";
import { CounterSelect } from "../counter-select/counter-select";
import { TCounter } from "../../types/types";
import { useState } from "react";
import DateRange from "../date-range/date-range";
import { useData } from "./context";

const itemDirection = [
    { id: 'return', value: 'Return' },
    { id: 'one-way', value: 'One way' },
    { id: 'multi-city', value: 'Multi City' },
]

const itemType = [
    { id: 'economy', value: 'Economy' },
    { id: 'premiun', value: 'Premium Economy' },
    { id: 'business', value: 'Business' },
    { id: 'first', value: 'First' },
    { id: 'multiple', value: 'Multiple' },
]

const itemPeoples: TCounter[] = [
    {prop: 'adults', text: "Adults", value: 0},
    {prop: 'children', text: "children", value: 0},
    {prop: 'infants', text: "infants", value: 0},
    {prop: 'seniors', text: "seniors", value: 0},
    {prop: 'students', text: "students", value: 0},
    {prop: 'toddlers', text: "toddlers", value: 0},
    {prop: 'youths', text: "youths", value: 0}
]

const itemEquip: TCounter[] = [
    {prop: 'bag', text: "Checked bag", value: 0},
    {prop: 'carry', text: "Carry-on bag", value: 0},
]

export const Boocking = () => {
    const {data} = useData();
    const [dateRangeOpen, setDateRangeOpen] = useState(false)
    
    return (
        <div className="p-6">
            <section className="mb-5">
                <h1 className=" font-extrabold text-bold text-3xl">Compare flights from 100s of sites.</h1>
            </section>
            <section>
                <div className="flex flex-row gap-4 mb-4 w-full">
                     <SelectDropDown text="Direction" element={<Select items={itemDirection} dataprop="direction" />} />
                     <SelectDropDown text="Peopes" element={<CounterSelect counters={itemPeoples}/>} /> 
                     <SelectDropDown text="Fly class" element={<Select items={itemType} dataprop="type"/>} /> 
                     <SelectDropDown text="Equipment" element={<CounterSelect counters={itemEquip} />} /> 
                </div>
                <div className="flex flex-wrap">
                    <div className="flex w-full md:w-1/2">
                        <MultidropDownProvider>
                            <MultiDropDownSelect className="w-full md:w-1/2" placeholder="From?" dataprop={'from'}/>
                        </MultidropDownProvider>
                        <MultidropDownProvider>
                            <MultiDropDownSelect className="w-full md:w-1/2" placeholder="To?" dataprop={'to'}/>
                        </MultidropDownProvider>
                    </div>
                    <div className="flex w-full md:w-1/2 relative">
                        <DateRangeButton className="w-full md:w-1/2" placeholder="Start Date" onClick={() => setDateRangeOpen(!dateRangeOpen)}/>
                        <DateRangeButton className="w-full md:w-1/2" placeholder="End Date" onClick={() => setDateRangeOpen(!dateRangeOpen)}/>
                        {dateRangeOpen && <DateRange className="absolute top-12 right-0"/>}
                    </div>
                </div>
            </section>
            <section className="flex justify-end mt-3">
                <button onClick={() => console.log(data)} className="border rounded-lg text-white bg-blue-500 flex justify-around gap-3 p-3 px-5 hover:bg-blue-600 transition-colors"> <i className="bi bi-search"></i> See results </button>
            </section>
        </div>
    )
}

