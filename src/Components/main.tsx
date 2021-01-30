import React from 'react'
import { Total } from "./Total";
import { CategiriesData } from "./CategiriesData";
import { Cotext } from "./Context";
import { Questions } from "./Questions";

export const Main: React.FC = () => {
    const context = React.useContext(Cotext)
    const { start } = context
    return (
        <div>
            {start ? null :
                <div>
                    <Total />
                    <CategiriesData />
                </div>}
                {start?
                <div>
                    <Questions/>
                </div>:null}

        </div>
    )
}
