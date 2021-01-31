import { log } from 'console';
import React, { useContext } from 'react'
import { Cotext, IPost } from "./Context";
import ProgressBar from "@ramonak/react-progress-bar";
export const Questions = () => {
    const context = useContext(Cotext)
    const { posts, num, setNum, marks, setMarks } = context
    const arrayShuffle = (array: any[]) => [...array].sort(() => Math.random() - 0.5)
    let add: number = 0
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
                                <div className="ques-sub" onClick={() => { a == post.correct_answer ?:}}>
                                    <div className="qdiv1">{++add}</div>
                                    <div className="qdiv2">{a}</div>
                                </div>
                            ))
                        }

                    </div>) : (null)))
            }
            <button className="ques-btn" onClick={() => { setNum((prev) => prev + 1) }}>Submit</button>
        </div>
    )
}

