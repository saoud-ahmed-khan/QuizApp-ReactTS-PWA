import React from 'react'
import { Category } from "./Types";
import { IconContext } from 'react-icons'
import { GiAmericanFootballHelmet } from "react-icons/gi";
import { ImBook } from "react-icons/im";
import { GiPerspectiveDiceSixFacesRandom } from "react-icons/gi";
import { MdComputer } from "react-icons/md";
import { GiMaterialsScience } from "react-icons/gi";
import { AiFillCar } from "react-icons/ai";










export const Categories: React.FC<Category> = ({Catname,logo}) => {

    return (
        <div>
            <div>
                <IconContext.Provider value={{ color: '#e68330', size: '50px' }}>
                    {logo==="GiAmericanFootballHelmet" ? <GiAmericanFootballHelmet/> :null}
                    {logo==="ImBook"? <ImBook/>:null}
                    {logo==="GiPerspectiveDiceSixFacesRandom" ? <GiPerspectiveDiceSixFacesRandom/> :null}
                    {logo==="MdComputer" ? <MdComputer/> :null}
                    {logo==="GiMaterialsScience" ? <GiMaterialsScience/> :null}
                    {logo==="AiFillCar" ? <AiFillCar/> :null}


                </IconContext.Provider>
            </div>
    <div>{Catname}</div>

                    

        </div>
    )
}
