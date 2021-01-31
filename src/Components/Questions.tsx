import { log } from 'console';
import React, { useContext, useState } from 'react'
import { Cotext, IPost } from "./Context";
import ProgressBar from "@ramonak/react-progress-bar";
export const Questions = () => {
    const context = useContext(Cotext)
    const { posts, num, setNum, marks, setMarks } = context
    const arrayShuffle = (array: any[]) => [...array].sort(() => Math.random() - 0.5)
    let add: number = 0
    var ans: string = ""
    const [Aans, SetAans] = useState<boolean>(false)
    return (
        <div className="ques-ques">
            <div className="ques-top">
                <div>Ques: {num + 1}/10</div>
                <div className="ques-progress"><ProgressBar bgcolor="#e68330" width="100%" isLabelVisible={false} baseBgColor="rgb(45, 65, 89)" completed={(num + 1) * 10} /></div>
                <div>Marks: {marks}</div>
            </div>
            {
                posts.map((post: IPost, index: number) => ((num == index) ? (
                    <div className="ques-main">
                        <div key={post.question}>
                            <p>{post.question}</p>
                        </div>
                        {
                            arrayShuffle([...post.incorrect_answers, post.correct_answer]).map((a) => (
                                <div>
                                    <button onClick={() => ((ans = a), SetAans(true))} className="qbdiv1"><span className="qdiv1">{++add}</span><span className="qdiv2">{a}</span></button>
                                </div>

                            ))
                        }

                        {ans ? <button className="ques-btn" onClick={() => ((post.correct_answer == ans ? setMarks((prev) => prev + 1) : null), setNum((prev) => prev + 1), SetAans(false))}>Submit</button> : null}


                    </div>) : (null)))

            }
            { console.log(ans)}
        </div >
    )
}

