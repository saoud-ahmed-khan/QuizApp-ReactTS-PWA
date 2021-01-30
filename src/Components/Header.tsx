import React, { useContext } from 'react'
import { Cotext } from "./Context";

export const Header : React.FC = () => {
    const context=useContext(Cotext)
    const {header}=context

    return (
        <div className="header-section">
           <div className="header-content"><h2 >{header}</h2></div>
        </div>
    )
}
