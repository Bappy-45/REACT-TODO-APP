import React, { useState } from 'react'

// style import
import style from './newtodo.module.css'

function NewTodo(props) {
    const[todo ,setTodo]=useState({title:"",des:""}) ;
    const{title,des}=todo ;
    const handelChange=(e)=>{
        const name=e.target.name
        setTodo((oldTodo)=>{
            return {...oldTodo,[name] : e.target.value}
        })
    }
    const handelSubmit=(e)=>{
        e.preventDefault()
        props.Ontodos(todo)
        setTodo({title:'',des:""})
    }
  return (
    <div>
      <form className={style.form} onSubmit={handelSubmit}>
        <div className={style["form-field"]}>
            <label> Title :</label>
            <input type="text"
            id='title'
            name='title'
            value={title}
            onChange={handelChange}
             />
        </div>
        <div className={style["form-field"]}>
            <label>  Desription:</label>
            <textarea type="text"
            id='des'
            name='des'
            value={des}
            onChange={handelChange}
             />
        </div>
        <button type="submit"> Add Todo</button>
      </form>
    </div>
  )
}

export default NewTodo
