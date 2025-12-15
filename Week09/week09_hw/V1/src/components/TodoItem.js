import { useState } from 'react'
import useTodosContext from '../hooks/use-todos-context'
import TodoEdit from './TodoEdit'

const TodoItem = ({ todo }) => {
  const [showEdit, setShowEdit] = useState(false)
  const { deleteTodoById } = useTodosContext()

  const handleDeleteClick = () => {
    deleteTodoById(todo.id)
  }

  const handleEditClick = () => {
    setShowEdit(!showEdit)
  }

  const handleSubmit = () => {
    setShowEdit(false)
  }

  let content = <h3>{todo.title}</h3>

  if (showEdit) {
    content = <TodoEdit todo={todo} onSubmit={handleSubmit} />
  }

  return (
    <div className="todo-item">
      <div className="todo-item-content">{content}</div>
      {!showEdit && (
        <div className="todo-item-actions">
          <button onClick={handleEditClick}>Edit</button>
          <button onClick={handleDeleteClick}>Delete</button>
        </div>
      )}
    </div>
  )
}

export default TodoItem
