import PropTypes from 'prop-types'
import '../styles/FormTask.css'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

const FormTask = (props) => {

  const [input, setInput] = useState('')

  const handleChanges = event => {
    setInput(event.target.value)
  }

  const handleForm = event => {

    event.preventDefault();

    const newTask = {
      id: uuidv4(),
      text: input,
      completed: false,
    }

    setInput('')

    props.onSubmit(newTask);

  }

  return (
    <form
      className='AppContainer__formTask'
      onSubmit= { handleForm }
    >
      <input
        className='AppContainer__inputTask'
        type="text"
        placeholder='Write a new task ...'
        name='text'
        value={ input }
        onChange={ handleChanges }
      />
      <button className={`${(!input.trim() ? 'AppContainer__buttonFormTask--disabled' : '').trim()} AppContainer__buttonFormTask`} disabled = {!input.trim()}>
        Add task
      </button>
    </form>
  )
}

FormTask.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

export default FormTask
