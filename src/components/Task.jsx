import PropTypes from 'prop-types'
import '../styles//Task.css'
import { AiOutlineCloseCircle } from "react-icons/ai";

const Task = ({ text, completed }) => {
  
  return (
    <div className={`${ (completed ? 'AppContainer__task--completed': " ").trimEnd() } AppContainer__task`}>
      <div className='AppContainer__textTask'>
        {text}
      </div>
      <div className='AppContainer__iconContainer'>
        <AiOutlineCloseCircle className='AppContainer__iconTask'/>
      </div>
    </div>
  )
}

Task.propTypes = {
  text : PropTypes.string.isRequired,
  completed : PropTypes.bool.isRequired,
}

export default Task
