import React from 'react'
import { Categories } from "./Categories";

export const CategiriesData: React.FC = () => {
    return (
        <div className="cat-main">
            <Categories logo="GiPerspectiveDiceSixFacesRandom" id="9"    Catname="General Knowledge" />
            <Categories logo="MdComputer" id="18"   Catname="Computer" />
            <Categories logo="GiMaterialsScience" id="17"   Catname="Science & Nature" />
            <Categories logo="ImBook" id="10"   Catname="Books" />
            <Categories logo="GiAmericanFootballHelmet" id="21"   Catname="Games" />
            <Categories logo="AiFillCar" id="28"   Catname="Vehicals" />
        </div>
    )
}
