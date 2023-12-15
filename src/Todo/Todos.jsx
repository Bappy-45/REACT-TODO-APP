import React from 'react'

import Todo from './Todo'
// style import
import style from './todos.module.css'

function Todos(props) {
  return (
    <div>
      <section className={style.todos}>
        {props.todos.map((todos)=>{
            return(
                <Todo todo={todos.e} key={todos.id} id={todos.id} onRemovr={props.onRemove}/>
            )
        })}
      </section>
    </div>
  )
}

export default Todos
