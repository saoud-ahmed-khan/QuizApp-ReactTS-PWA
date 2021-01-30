import { log } from 'console';
import React, { useContext } from 'react'
import { Cotext, IPost } from "./Context";

export const Questions = () => {
    const context = useContext(Cotext)
    const { posts, num, setNum } = context
    return (
        <div>
            {
                posts.map((post: IPost, index: number) =>{num==index ? <div>{post.question}</div> : null })
            }
            <button onClick={() => { setNum((prev) => prev + 1) }}>click</button>
        </div>
    )
}

