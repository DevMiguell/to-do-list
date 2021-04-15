import { List } from './styles'
import trash from '../../assets/trash.svg'

function TaskList({ arrayTaskList, removeTask }) {
  return (
    <List>
      {arrayTaskList.map(task => (
        <li key={task.id}>
          <div>
            <span>{task.title}</span>
          </div>

          <button onClick={() => removeTask(task.id)}>
            <img src={trash} alt="Remover Item" />
          </button>
        </li>
      ))}
    </List>
  )
}

export default TaskList
