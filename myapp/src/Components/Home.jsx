import React,{useState} from 'react'
// import axios from 'axios'
import loginuser from "./loginuser"
const Home = () => {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [isloading,setLoading]=useState(false);
    const [isError, setError]=useState(false)
    const [token,setToken] =useState('');
    const [auth,setAuth]=useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)

        loginuser({
            email,
            password
        }).then((res)=>{
            setLoading(false)
            setToken(res.data.token)
            setAuth(true)
            console.log(res)
        }
        
        )
        .catch((err)=>{
            setError(true)
            console.log(err)
        }
        )
        .finally(()=>{

        })
    }

    if(auth)
    {
        <div>
            <h1>welcome to dashboard</h1>
            <h1>Token : {token}</h1>
        </div>
    }
    if(isloading)
    {
        <h1>Loading....</h1>
    }
  return (
    <div>
        <h1>WelCome to Home Page</h1>
        <form onSubmit={handleSubmit}>
            Email: <input type='email'  placeholder='email' onChange={(e)=>setEmail(e.target.value)}/>
            Password: <input type='password'  placeholder='password' onChange={(e)=>setPassword(e.target.value)}/>
            <input type='submit'/>
            
        </form>
        <h1>{isError? 'Something went wrong' : (<h1>Token: {token}</h1>) }
            </h1>
    </div>
    
  )
}

export default Home