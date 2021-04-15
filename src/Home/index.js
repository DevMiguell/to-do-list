import Header from '../components/Header'
import NewTask from '../components/NewTask'
import TaskList from '../components/TaskList'
//import { ContainerGlobal } from './styles'

function Home() {
  return (
    <>
      <Header />
      <NewTask />
      <TaskList />
    </>
  )
}

export default Home