import style from "../App.module.css"
import React from 'react'

function DisplayScreen({pic}) {
  return (
    pic?
    <div className={style.container}>
      <img src={`https://picsum.photos/id/${pic.id}/800/500`}/>
      <p className={style.AuhorName}>{pic.author}</p>
    </div>
    :""
  )
}

export default DisplayScreen