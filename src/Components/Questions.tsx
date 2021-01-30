import { log } from 'console';
import React, { useContext } from 'react'
import { Cotext } from "./Context";

export const Questions = () => {
    const context= useContext(Cotext)
    const {posts,num,setNum}= context
    return (
        <div>
       {
           posts.map((post,index)=>{
            if(num===index)
            {
                console.log('====================================');
                console.log(post);
                console.log('====================================');
            }

           })
       }
            <button onClick={()=>{setNum((prev) => prev + 1)}}>click</button>
      </div>
    )
}

