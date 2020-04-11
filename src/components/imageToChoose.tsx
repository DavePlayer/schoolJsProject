import * as React from 'react';

interface Iprops{
    hancleClick(event:any, address:string): void,
    src: string,
}

export const ImageToChoose:React.FC<Iprops> = (props:Iprops) => {
    return (
        <figure onClick={(e) =>props.hancleClick(e, props.src)}><a><img src={props.src} alt="404"/></a></figure>
    )
}