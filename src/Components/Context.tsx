import React, { createContext, useState } from 'react'
import axios from 'axios';

interface IPost {
    category:string,
    correct_answer:string,
    difficulty:string,
    incorrect_answers:string[],
    question:string,
    type:string,
    
    

  }
  const defaultProps:IPost[] = [];

export interface ContextDatatype
{
    start: boolean,
    setStart: React.Dispatch<React.SetStateAction<boolean>>,
    category:string,
    setcategory:React.Dispatch<React.SetStateAction<string>>,
    posts:IPost[],
    num:number,
    setNum:React.Dispatch<React.SetStateAction<number>>,






}
let data:ContextDatatype=
{
    start:false,
    setStart:(Total: React.SetStateAction<boolean>) => null,
    category:"a",
    setcategory:(Total: React.SetStateAction<string>) => null,
    posts:[],
    num:0,
    setNum:(Total: React.SetStateAction<number>) => null,
}
export const Cotext= createContext<ContextDatatype>(data)

export const Context:React.FC = ({children}) => {
    const [posts, setPosts]: [IPost[], (posts: IPost[]) => void] = React.useState(defaultProps);
    const [Data,SetData]=useState<{response_code:number, results:[]}>()
    const [loading, setLoading]: [boolean, (loading: boolean) => void] = React.useState<boolean>(true);
    const [start,setStart]=useState<boolean>(false)
    const [category,setcategory]= useState<string>("a")
    const [num,setNum]=useState<number>(0)
    React.useEffect(() => {
        axios.get(`https://opentdb.com/api.php?amount=10&category=${category}&type=multiple`)
        .then(response => {setPosts(response.data.results) ; setLoading(false)});
      },[category]);
    return (
        <Cotext.Provider value={{start,setStart,setcategory,category,posts,setNum,num}}>
            {children}
        </Cotext.Provider>
    )
}

