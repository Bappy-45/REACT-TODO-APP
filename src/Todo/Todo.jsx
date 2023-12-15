import React from 'react'

// style import
import style from './todo.module.css'

function Todo(props) {
    const{ title,des}=props.todo 
    const{id}=props
    const handelClick=(id)=>{
      props.onRemovr(id)
    }
  return (
    <div>
      <article className={style.todo}>
        <div>
            <h3>{title}</h3>
            <p>{des}</p>
        </div>
        <div>
            <button className={style.btn} onClick={()=>{handelClick(id)}}>
                <i className='fa fa-trash fa-2x'></i>
            </button>
        </div>
      </article>
    </div>
  )
}

export default Todo
