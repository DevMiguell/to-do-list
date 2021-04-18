import { ContainerGlobal } from './styles'
import { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import firebase from '../../config/firebase'

import Logout from '../../assets/logout.svg'

import Header from '../../components/Header'
import NewTask from '../../components/NewTask'
import TaskList from '../../components/TaskList'

function Home() {
  const [arrayTaskList, setArrayTaskList] = useState([])
  let listTodo = []

  const removeTask = id => {
    firebase.firestore().collection('todolist').doc(id).delete().then(
      console.log('Deu certo')
    ).catch(erro => {
      alert(erro)
    })
  }

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
              id={item.id}
              data={item.data}
              user={item.user}
              removeTask={removeTask}
            />)}
              <Link to="/" className="logout" onClick={() => dispatch({ type: 'LOG_OUT' })}>
                <img src={Logout} title="Sair do APP" alt="Lougout Image" />
              </Link>
          </ContainerGlobal>
          :
          window.location.href = "/"
      }
    </>
  )
}

export default Home
