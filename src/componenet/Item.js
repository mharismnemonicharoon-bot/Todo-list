import React from "react";
import { FaTrash } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import style from './Item.module.css'
const Item = ({ task, onDone, onDelete }) => {
  return (
    <li className={style.item}>
      {task.Status === "Pending" ?
        <p>{task.name}</p>:<del>{task.name}</del>}
     
        <div>
            <button className={style.checkbtn}><FaCheck style={{ color: 'green' }} onClick={()=> onDone(task.id)}/></button>
             <button className={style.deletebtn}><FaTrash style={{ color: 'red' }} onClick={()=> onDelete(task.id)}/></button>
    </div>
    </li>
  )
}
;
export default Item 