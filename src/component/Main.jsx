import React, { useMemo, useState } from 'react'

const Main = () => {
    const [state, setState] = useState({ num1: 0, num2: 0, add: 0 })
    const [color, setColor] = useState("green")
    const formHandler = (e) => {
        e.preventDefault()
        setState({ num1: Number(e.target.num1.value), num2: Number(e.target.num2.value), add: Number(e.target.num2.value) + Number(e.target.num1.value) })
    }

    const Color = () => {
        switch (color) {
            case "green": {
                setColor("red")
            } break;
            case "red": {
                setColor("blue")
            } break;
            case "blue": {
                setColor("green")
            } break;
        }

    }
    
    const Multiplication = useMemo(() => {
        console.log("multiplication")
        return state.num1 * state.num2
    }, [state])

    return (
        <div className="col full flexAIC p3" onSubmit={formHandler}>
            <form action="" className="w40  col p2 hp0">
                <h2 className="m1 p2 hp0 hm0">ADD</h2>
                <input type="number" name="num1" className=' m1 p1 line brd' id="" placeholder='Number 1' />
                <input type="number" name="num2" className=' m1 p1 line brd' id="" placeholder='Number 2' />
                <button className="p2 m4 hm1 dbg brd" type='submit'>ADD</button>
            </form>

            <h4 className='m1'>ADDITION:&nbsp;{state.add}</h4>
            <h4 className='m1'>MULTIPLICATION:&nbsp;{Multiplication}</h4>

            <button type='button' className='p2 brd m1' style={{ backgroundColor: color }} onClick={Color}>Toggle</button>
        </div>
    )
}

export default Main