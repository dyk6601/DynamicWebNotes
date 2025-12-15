import { useState } from 'react'
import useTodosContext from '../hooks/use-todos-context'

const TodoCreate = () => {
  const [title, setTitle] = useState('')
  const { createTodo } = useTodosContext()

  const handleChange = (event) => {
    setTitle(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    createTodo(title)
    setTitle('')
  }

  return (
    <form className="todo-create" onSubmit={handleSubmit}>
      <input value={title} onChange={handleChange} placeholder="Enter a todo..." />
      <button type="submit">Add</button>
    </form>
  )
}

export default TodoCreate
