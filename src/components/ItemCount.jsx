
import {useState} from "react"

export const ItemCount = ({initial, stock, onAdd}) => {
const [count, setCount] = useState(initial)
const handlerAdd = () => {
    if (count < stock)
    setCount (count +1)
}
const handlerRest = () => {
    if (count > 1)
    setCount (count -1)
}

const handlerOnAdd = () => {
    onAdd (count)
    setCount (initial)
}


    return (
        <div>
            <button className="btn btn-primary" onClick={handlerRest}>-</button>
            <label>{count}</label>
            <button className="btn btn-primary" onClick={handlerAdd}>+</button><br></br>
            <button className="btn btn-outline-primary" onClick={handlerOnAdd}>Agregar</button>
        </div>
    )
}