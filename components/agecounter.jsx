import { useState } from "react"
import Button from 'react-bootstrap/Button';


export default function Agecounter() {
    const [age, setAge] = useState(37)

    const increment = () => {
        setAge(age+1);
    }

    const decrement = () => {
        setAge(age-1);
    }

    const reset =() => {
        setAge(37)
    }
  return (
    <div className="age-container">
        <p className="age-display">Messi is {age} years old</p>
        <Button className="counter-button" variant="primary" onClick={increment}>Increment</Button>
        <Button className="counter-button" variant="danger" onClick={reset}>Reset</Button>
        <Button className="counter-button" variant="primary" onClick={decrement}>Decrement</Button>

    </div>
  )
}
