import React, { useState } from 'react'
import axios from 'axios'

const postData = (formdata)=>{
    return(axios.post('https://localhost:8080/todos',{
        id:formdata.id,
        title:formdata.title,
        level:formdata.level,
    })
    .then((res)=>console.log(res.data))
    .catch((err)=>console.log(err))
    )
}

const PostTodos = () => {
    const [formdata,setFormdata] = useState({
        id:Date.now(),
        title:'',
        level:'',
        status:false
    })

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(formdata)
        postData(formdata)
    }

    const handleChange = (e) =>{
        setFormdata({
            ...formdata,
            [e.target.name] : e.target.value
        })
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input 
                type='text' 
                name='title'
                placeholder='Enter Task Title' 
                value={formdata.title} 
                onChange={handleChange}
            />
            <input 
                type='text' 
                name='level'
                placeholder='Enter Level' 
                value={formdata.level} 
                onChange={handleChange}/>
            <input type='submit'/>
        </form>
    </div>
  )
}

export default PostTodos