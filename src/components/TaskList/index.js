import { List } from './styles'
import trash from '../../assets/trash.svg'
import { useSelector } from 'react-redux'

function TaskList({id, data, user, removeTask}) {

  const usuarioLogado = useSelector(state => state.usuarioEmail)

  return (
    <List>
      { usuarioLogado === user ?
        <li id={id}>
          <div>
            <span>{data}</span>
          </div>

          <button onClick={() => { removeTask(id) }}>
            <img src={trash} alt="Remover Item" />
          </button>
        </li>
        : ''
      }
    </List>
  )
}

export default TaskList
