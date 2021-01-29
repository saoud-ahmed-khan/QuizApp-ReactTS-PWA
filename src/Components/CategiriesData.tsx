import React from 'react'
import { Categories } from "./Categories";

export const CategiriesData: React.FC = () => {
    return (
        <div className="cat-main">
            <Categories logo="GiPerspectiveDiceSixFacesRandom" Catname="General Knowledge" />
            <Categories logo="MdComputer" Catname="Computer" />
            <Categories logo="GiMaterialsScience" Catname="Science & Nature" />
            <Categories logo="ImBook" Catname="Books" />
            <Categories logo="GiAmericanFootballHelmet" Catname="Games" />
            <Categories logo="AiFillCar" Catname="Vehicals" />
        </div>
    )
}
