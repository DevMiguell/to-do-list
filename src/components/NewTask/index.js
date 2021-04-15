import { useState } from 'react'
import { Form } from './styles'

function NewTask({ addTask }) {
  const [newTask, setNewTask] = useState('')

  const handleTask = (event) => setNewTask(event.target.value)

  const handleTaskSubmit = (event) => {
    console.log(event)

    event.preventDefault()

    const objTask = {
      id: Date.now(),
      title: newTask,
    }

    addTask(objTask)
  }

  return (
    <Form onSubmit={handleTaskSubmit}>
      <input
        type="text"
        value={newTask}
        onChange={handleTask}
        id="newTask"
        name="newTask"
        placeholder="Digite uma Tarefa"
      />

      <button type="submit">+</button>
    </Form>
  )
}

export default NewTask
