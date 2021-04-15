import { Form } from './styles'

function NewTask() {
  return (
    <Form>
      <input
        type="text"
        //value={description}
        //onChange={handleDescription}
        id="description"
        name="description"
        placeholder="Digite uma Tarefa"
        autoFocus
      />
      <button type="submit">+</button>
    </Form>
  )
}

export default NewTask
