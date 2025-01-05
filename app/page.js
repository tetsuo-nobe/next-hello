"use client"
import {useState} from "react"

const MainPage = () => {  
  const [name, setName] = useState("")   
  
  const handleSubmit = async (e) => {    
    e.preventDefault()
    try {      
      const response = await fetch("/hello", {        
        method: "POST",        
        headers: {          
          "Accept": "application/json",          
          "Content-Type": "application/json"        
        },        
        body: JSON.stringify({          
          yourname : name        
        })       
      })    
      const jsonData = await response.json()
      alert(jsonData.message)
    } catch {          
      alert("handleSubmit Error")
    }  
    
  }    
  return (    
    <div>      
      <h1>Next.js サンプル</h1>      
      <form onSubmit={handleSubmit}>        
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} name="yourname" placeholder="お名前を入力" required />        
        <button>Greeting</button>      
      </form>    
    </div>
  )
}

export default MainPage
