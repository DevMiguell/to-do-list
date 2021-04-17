import { List } from './styles'
import trash from '../../assets/trash.svg'

function TaskList({key, data}) {
  return (
    <List>
        <li id = {key}>
          <div>
            <span>{data}</span>
          </div>

          {/* <button onClick={() => removeTask(task.id)}>
            <img src={trash} alt="Remover Item" />
          </button> */}
        </li>
    </List>
  )
}

export default TaskList
