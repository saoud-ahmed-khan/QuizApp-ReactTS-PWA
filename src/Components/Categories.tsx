import React from 'react'
import { Category } from "./Types";
import { IconContext } from 'react-icons'
import { GiAmericanFootballHelmet } from "react-icons/gi";
import { ImBook } from "react-icons/im";
import { GiPerspectiveDiceSixFacesRandom } from "react-icons/gi";
import { MdComputer } from "react-icons/md";
import { GiMaterialsScience } from "react-icons/gi";
import { AiFillCar } from "react-icons/ai";
import { Cotext } from "./Context";
export const Categories: React.FC<Category> = ({ Catname, logo, id }) => {
    const context = React.useContext(Cotext)
    const { setStart, setcategory, setHeader } = context
    return (
        <div className="cat-sub" onClick={() => { setStart(true); setcategory(id); setHeader(Catname) }}>
            <div className="div1" >
                <IconContext.Provider value={{ color: '#e68330', size: '50px' }}>
                    {logo === "GiAmericanFootballHelmet" ? <GiAmericanFootballHelmet /> : null}
                    {logo === "ImBook" ? <ImBook /> : null}
                    {logo === "GiPerspectiveDiceSixFacesRandom" ? <GiPerspectiveDiceSixFacesRandom /> : null}
                    {logo === "MdComputer" ? <MdComputer /> : null}
                    {logo === "GiMaterialsScience" ? <GiMaterialsScience /> : null}
                    {logo === "AiFillCar" ? <AiFillCar /> : null}
                </IconContext.Provider>
            </div>
            <div className="div2">{Catname}</div>
        </div>
    )
}
