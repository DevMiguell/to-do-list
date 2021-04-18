import { useState } from 'react'

import firebase from '../../config/firebase'
import { useSelector } from 'react-redux'

import { Form } from './styles'

function NewTask() {
  const [newTask, setNewTask] = useState('')
  const usuarioEmail = useSelector(state => state.usuarioEmail)

  const db = firebase.firestore()

  function cadastrar() {
    db.collection('todolist').add({
      data: newTask,
      user: usuarioEmail,
      create: new Date(),
    }).catch(erro => {
      alert(erro)
    })
  }

  const handleTask = (event) => setNewTask(event.target.value)

  const handleTaskSubmit = (event) => {
    event.preventDefault()
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

      <button onClick={cadastrar} type="submit">+</button>
    </Form>
  )
}

export default NewTask
