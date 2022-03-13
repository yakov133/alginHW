
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import style from "./App.module.css"
import DisplayScreen from './components/DisplayScreen';

function App() {
  const [gallery, setgallery] = useState([]);
  const [show, setshow] = useState("")
  const [timer, setTimer] = useState(30000)
  let intervalId
  useEffect(()=>{
    getData()

  },[])

  function getData(){
    const URL="/fiveElements";
    intervalId = setInterval(()=>{
      axios.get(URL)
    .then((res)=>{
      setgallery(res.data);
      setshow(res.data[2])
    })
    .catch(err=>console.log(err)) 
    },timer)
  }
  
  //!bunos
  const handelTimer =(e)=>{
  clearInterval(intervalId);
  setTimer(e.target.value)
  getData()
  }

  return (
    gallery.length?<div className={style.main}>
        <DisplayScreen pic={show}/>

      <div className={style.dispaly_bar}>{gallery.map((pic,i)=><img  key={pic.id} onClick={()=>setshow(pic)} src={`https://picsum.photos/id/${pic.id}/200/200`}/>)}</div>
      
      <label for="timer">New Timer:</label>
      <input onChange={handelTimer} id="timer" type="number" placeholder='insert timer'/>
      
      </div>
    :<p className={style.alert}>Fetching data in less then 30 secondes...</p>
  )
}

export default App