import { useState } from 'react'
import useTodosContext from '../hooks/use-todos-context'

const TodoEdit = ({ todo, onSubmit }) => {
  const [title, setTitle] = useState(todo.title)
  const { editTodoById } = useTodosContext()

  const handleChange = (event) => {
    setTitle(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    editTodoById(todo.id, title)
    onSubmit()
  }

  return (
    <form className="todo-edit" onSubmit={handleSubmit}>
      <input value={title} onChange={handleChange} />
      <button type="submit">Save</button>
    </form>
  )
}

export default TodoEdit
