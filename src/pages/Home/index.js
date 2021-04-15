import { ContainerGlobal } from './styles'
import { useState } from 'react'

import Header from '../../components/Header'
import NewTask from '../../components/NewTask'
import TaskList from '../../components/TaskList'

function Home() {
  const [arrayTaskList, setArrayTaskList] = useState([])

  const addTask = objTask => {
    setArrayTaskList([...arrayTaskList, objTask])
  }

  const removeTask = id => {
    const removedTask = arrayTaskList.filter(task => task.id !== id)
    setArrayTaskList(removedTask)
  }

  return (
    <ContainerGlobal>
      <Header />
      <NewTask addTask={addTask} />
      <TaskList arrayTaskList={arrayTaskList} removeTask={removeTask} />
    </ContainerGlobal>
  )
}

export default Home
