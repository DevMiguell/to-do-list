import { ContainerGlobal } from './styles'
import { useState } from 'react'

import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';

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

  const dispatch = useDispatch()

  return (
    <>
    {
    useSelector(state => state.usuarioLogado) > 0 ?
      <ContainerGlobal>
        <Header />
        <NewTask addTask={addTask} />
        <TaskList arrayTaskList={arrayTaskList} removeTask={removeTask} />
        <li className=""><Link to="/" className="" onClick={() => dispatch({ type: 'LOG_OUT' })}>Sair</Link></li>
      </ContainerGlobal>
      :
      window.location.href = "/"
    }
    </>
  )
}

export default Home
