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

  return (
    <ContainerGlobal>
      <Header />
      <NewTask addTask={addTask} />
      <TaskList arrayTaskList={arrayTaskList} />
    </ContainerGlobal>
  )
}

export default Home
