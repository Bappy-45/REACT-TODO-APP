import React, { useState } from 'react'
// style import
import style from './home.module.css'
// Component import
import { v4 as uuidv4 } from 'uuid';
import Todos from './Todos'
import NewTodo from './NewTodo'

// //DummyTodos
// const dummyTodos=[
//   {
//     id:1 ,
//     title: " Todo Title 1" ,
//     des:" Todo1 description 1 is hear.."

//   },
//   {
//     id:2 ,
//     title: " Todo Title 1" ,
//     des:" Todo1 description 2 is hear.."

//   }
// ]

function Home() {
  const[todos,setTodos]=useState([])
  const handelTodo=(e)=>{
      setTodos((x)=>{
        return[...x,{id:uuidv4(), e}]
      })
      
  }
  const handelRemove=(id)=>{
    const filterTodo= todos.filter((todo)=> todo.id !== id)
    setTodos(filterTodo)
  }

  return (
    <div className={style.container}>
      <h1 className={style.head1}>Todo App</h1>
      <NewTodo Ontodos={handelTodo}/>
      <Todos todos={todos} onRemove={handelRemove}/>
    </div>
  )
}

export default Home
