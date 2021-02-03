import React, { useContext} from 'react'
import { Cotext, IPost } from "./Context";
import ProgressBar from "@ramonak/react-progress-bar";
export const Questions = () => {
    const context = useContext(Cotext)
    const { posts, num, setNum, marks, setMarks ,setStart,setcategory} = context
    const arrayShuffle = (array: any[]) => [...array].sort(() => Math.random() - 0.5)
    let add: number = 0
    let answer: any;
    let correct: boolean;




    return (

    <div>
    {num < 10 ?
        <div className="ques-ques">

            <div className="ques-top">
                <div>Ques: {num + 1}/10</div>
                <div className="ques-progress"><ProgressBar bgcolor="#e68330" width="100%" isLabelVisible={false} baseBgColor="rgb(45, 65, 89)" completed={(num + 1) * 10} /></div>
                <div>Marks: {marks} </div>
            </div>

            {posts.length===0?<h2>Loading ...</h2>:
            <div>
            {
                posts.map((post: IPost, index: number) => ((num === index) ? (
                    <div className="ques-main"  key={num}>

                        
                            <p>{post.question}</p>
                        {

                            arrayShuffle([...post.incorrect_answers, post.correct_answer]).map((a) => (
                                <div key={a}>
                                    <div>

                                        <button value={a} onClick={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
                                            answer = event.currentTarget.value;
                                            correct = post.correct_answer === answer;
                                            setNum(prev => prev + 1)
                                            if (correct) {
                                                setMarks(prev => prev + 1)
                                            }
                                        }

                                        } className="qbdiv1"><span className="qdiv1">{++add}</span><span className="qdiv2">{a}</span></button>
                                    </div>
                                    
                                </div>

                            ))
                        }



                    </div>) : (null)))

            }
            </div>}

        </div > :

        <div className="ending">
            <div>
        <h2 style={{fontFamily:"sans-serif"}}>Your marks are : 0{marks}</h2>
        </div>
        <div>
        <button onClick={()=>{setStart(false) 
             setcategory("a")}} className="ques-btn">Start Again</button>
        </div>

        </div>}

        </div>
    )
}

