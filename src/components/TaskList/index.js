import { TaskListTable } from './styles'
import trash from '../../assets/trash.svg'

function TaskList() {
  return (
    <TaskListTable>
          <tr /*key={transaction.id}*/>
            <td>Testando Task list</td>
            <button><img src={trash} alt="Remover Item" /></button>
          </tr>
    </TaskListTable>
  )
}

export default TaskList
