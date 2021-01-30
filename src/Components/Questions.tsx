import { log } from 'console';
import React, { useContext } from 'react'
import { Cotext } from "./Context";

export const Questions = () => {
    const context= useContext(Cotext)
    const {posts,num}= context
    return (
        <div>
        {posts[0]}
            
      </div>
    )
}

