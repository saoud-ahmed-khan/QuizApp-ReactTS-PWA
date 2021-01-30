import React, { createContext, useState } from 'react'
import axios from 'axios';

interface IPost {
    incorrect_answers:string[],
    question:string,
    correct_answer:string,

  }
  const defaultProps:IPost[] = [];

export interface ContextDatatype
{
    start: boolean,
    setStart: React.Dispatch<React.SetStateAction<boolean>>,

}
let data:ContextDatatype=
{
    start:false,
    setStart:(Total: React.SetStateAction<boolean>) => null,
}
export const Cotext= createContext<ContextDatatype>(data)

export const Context:React.FC = ({children}) => {
    const [posts, setPosts]: [IPost[], (posts: IPost[]) => void] = React.useState(defaultProps);
    const [start,setStart]=useState<boolean>(false)
    React.useEffect(() => {
        axios
          .get<IPost[]>('https://opentdb.com/api.php?amount=10&type=multiple')
          .then(response => {setPosts(response.data)});
          console.log('====================================');
          console.log(posts);
          console.log('====================================');
      },[]);
    return (
        <Cotext.Provider value={{start,setStart}}>
            {children}
        </Cotext.Provider>
    )
}

