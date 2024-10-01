import PropTypes from 'prop-types'
import '../styles//Task.css'
import { AiOutlineCloseCircle } from "react-icons/ai";

const Task = ({ id, text, completed, completeTask, deleteTask }) => {
  
  return (
    <div className={`${ (completed ? 'AppContainer__task--completed': " ").trimEnd() } AppContainer__task`}>
      <div
        className='AppContainer__textTask'
        onClick={ completeTask(id) }
      >
        {text}
      </div>
      <div className='AppContainer__iconContainer'>
        <AiOutlineCloseCircle
          className='AppContainer__iconTask'
          onClick={ deleteTask(id) }
        />
      </div>
    </div>
  )
}

Task.propTypes = {
  id: PropTypes.string.isRequired,
  text : PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  completeTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
}

export default Task
