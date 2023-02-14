// Get request is made here

import React,{useEffect, useState} from 'react'
import axios from 'axios'

const getTodos = ({page,limit,sort,order})=>{
    return (axios.get('http://localhost:8080/cities',{
        params:{
            _page:page,
            _limit:limit,
            // _sort:sort,
            // _order:order,
        }
    }))
}

const GetTodos = () => {
    const[todo,setTodo] = useState([]);
    const[page,setPage] = useState(1);
    const[totalPages,setTotalPages] = useState(0)

    useEffect(() => {
        getTodos({page,limit:5,sort:'name',order:'asc'})
        .then((res)=>{
            console.log("res-data:",res.data);
            setTodo(res.data)
            setTotalPages(Number(res.headers[`x-total-count`]))
        })
        .catch((err)=>console.log(err))
    },[page])

    const handlePagination =({val})=>{
        setPage(page+val)
        console.log("currentPage:",(page+val))
        console.log(totalPages/5)
    }

    // console.log("todo:",todo)
  return (
    <div>
        <div>{todo.map((el)=>(
            <p key={el.id}>
                {el.id}
                {'----->'}
                {el.name} 
                {'----------->'}
                {el.country}
                {'----------->'}
                {el.population}
            </p>))}
        </div>
        <div>
            <button disabled={page===1} onClick={()=>handlePagination(setPage(page-1))}>Previous</button> 
            <button>{page}</button>
            <button>{page+1}</button>
            <button>{page+2}</button>
            <button>{page+3}</button>
            <button>{page+4}</button>
            <button>{page+5}</button>
            <button disabled={page===Math.ceil(totalPages/5)} onClick={()=>handlePagination(setPage(page+1))}>Next</button>
        </div>
        <h1>Total Pages: {Math.ceil(totalPages/5)}</h1>
    </div>
    
  )
}

export default GetTodos