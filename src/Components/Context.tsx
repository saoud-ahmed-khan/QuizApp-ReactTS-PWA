import React, { createContext, useState } from 'react'
export interface ContextDatatype
{
    start: boolean,
    setStart: React.Dispatch<React.SetStateAction<boolean>>,

}
let data:ContextDatatype=
{
    start:false,
    setStart:(Total: React.SetStateAction<boolean>) => null,
}
export const Cotext= createContext<ContextDatatype>(data)

export const Context:React.FC = ({children}) => {
    const [start,setStart]=useState<boolean>(false)
    return (
        <Cotext.Provider value={{start,setStart}}>
            {children}
        </Cotext.Provider>
    )
}

