import { useState } from "react"

import {Button} from "../../components/button/Button"

export const About = () => {
    const [value,setValue] = useState(0)

    const handleClick = () => {
        setValue(value+1)
    }
    return (
        <div>
            <h1>About Page</h1>
             <div>{value}</div>
            <Button title="increase" handleClick={handleClick}/>
        </div>
    )
}