import React from 'react'
import { Category } from "./Types";
import { IconContext } from 'react-icons'
import { GiAmericanFootballHelmet } from "react-icons/gi";



export const Categories: React.FC<Category> = ({Catname,logo}) => {

    return (
        <div>
            <div>
                <IconContext.Provider value={{ color: '#e68330', size: '50px' }}>
                    {
                        logo==="GiAmericanFootballHelmet" ? <GiAmericanFootballHelmet/> :null
                    }
                </IconContext.Provider>
            </div>
    <div>{Catname}</div>

                    

        </div>
    )
}
