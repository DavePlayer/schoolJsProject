import * as React from 'react'
import { useState } from 'react'

interface Iprops{
    info: string,
    detail: string
}

export const ProductUnvaluedInfo:React.FC<Iprops> = (props:Iprops) => {
    const [displayInfo, setDisplayInfo] = useState(false)
    return (
        <section onClick={() => setDisplayInfo(o => !o)} className="unvaluedInfo">
            <h3>{props.info}</h3>
            {displayInfo ? 
                <span className="material-icons">keyboard_arrow_up</span>
                :
                <span className="material-icons">keyboard_arrow_down</span>
            }
            {displayInfo ? 
                <section className="Details">{props.detail}</section>
                :
                null
            }</section>
    )
}