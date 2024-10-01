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

    props.onSubmit(newTask);

  }

  return (
    <form
      className='AppContainer__formTask'
      onSubmit={ handleForm }
    >
      <input
        className='AppContainer__inputTask'
        type="text"
        placeholder='Write a new task ...'
        name='text'
        onChange={ handleChanges }
      />
      <button className='AppContainer__buttonFormTask'>
        Add task
      </button>
    </form>
  )
}

FormTask.propTypes = {
  onSubmit : PropTypes.func.isRequired,
}

export default FormTask
