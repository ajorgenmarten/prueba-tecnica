import { useState } from "react"
import { TCounter } from "../../types/types"

export const CounterSelect = ({counters}: {counters: TCounter[]}) => {
    return (
        <div className="w-full md:w-80 p-2 text-gray-400">
            {counters.map(counter => <CounterItem key={counter.prop} counter={counter} />)}
        </div>
    )
}

const CounterItem = ({counter}: {counter: TCounter}) => {
    const [count, setCount] = useState(0)
    return <div className="flex flex-nowrap justify-between p-1">
        <span className="flex-shrink">{counter.text}</span>
        <div className="flex items-center gap-2">
            <button className="h-5 w-5 flex justify-center items-center border rounded-md border-md text-red-400 disabled:bg-gray-200" disabled={count?false:true} onClick={() => setCount(count-1)}>-</button>
            <span className="text-gray-700">{count}</span>
            <button className="h-5 w-5 flex justify-center items-center border rounded-md border-md text-cyan-400 disabled:bg-gray-200" onClick={() => setCount(count+1)}>+</button>
        </div>
    </div>
}

