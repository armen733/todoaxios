import { useEffect, useState } from 'react'
import './App.css'
import todourl from './api/api'

function App() {
  const [text, setText] = useState("")
  const [todos, setTodos] = useState([])

  useEffect(() => {
    todourl.get("/todos")
      .then((res) => setTodos(res.data))
  }, [])

  const add = () => {
    todourl.post("/todos", { title: text })
      .then((res) => setTodos([res.data, ...todos]))
  }

  const del = (id) => {
    todourl.delete(`/todos/${id}`)
      .then((res)=> setTodos([...todos]))
  }
  return (
    <div className='maindiv'>
      <form action="" onSubmit={(e) => e.preventDefault()}>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
        <button onClick={add}>add</button>
      </form>
      <div className="todosdiv">
        {
          todos.map((todo) => <li key={todo.id}> <input type="checkbox" /> {todo.title} <button onClick={()=>del(todo.id)}>X</button></li>)
        }
      </div>
    </div>
  )
}

export default App
