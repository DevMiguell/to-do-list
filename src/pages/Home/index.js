import { ContainerGlobal } from './styles'
import { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';

import firebase from '../../config/firebase'

import Header from '../../components/Header'
import NewTask from '../../components/NewTask'
import TaskList from '../../components/TaskList'

function Home() {
  const [arrayTaskList, setArrayTaskList] = useState([])
  let listTodo = []

  // const addTask = objTask => {
  //   setArrayTaskList([...arrayTaskList, objTask])
  // }

  // const removeTask = id => {
  //   const removedTask = arrayTaskList.filter(task => task.id !== id)
  //   setArrayTaskList(removedTask)
  // }

  const dispatch = useDispatch()

  useEffect(() => {
    firebase.firestore().collection('todolist').get().then(async (result) => {
      await result.docs.forEach(doc => {
        listTodo.push({
          id: doc.id,
          ...doc.data()
        })
      })

      setArrayTaskList(listTodo)
    })
  })

  return (
    <>
      {
        useSelector(state => state.usuarioLogado) > 0 ?
          <ContainerGlobal>
            <Header />
            <NewTask />
            {arrayTaskList.map(item => <TaskList
              key={item.id}
              data={item.data} 
            />)}
            <li className=""><Link to="/" className="" onClick={() => dispatch({ type: 'LOG_OUT' })}>Sair</Link></li>
          </ContainerGlobal>
          :
          window.location.href = "/"
      }
    </>
  )
}

export default Home
