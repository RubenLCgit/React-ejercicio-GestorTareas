import FormTask from './FormTask'
import Task from './Task'
import '../styles/TaskList.css'
import { useState } from 'react'

const TaskList = () => {


  const [tasks, setTasks] = useState([])
  

  const addTask = (task) => {
    
    if (tasks.some(taskArray => taskArray.text === task.text)) {
      alert('You have already created a task with this name.')
    } 
    else setTasks([task, ...tasks])
    
  }

  const completeTask = (id) => {
    const tasksModified = tasks.map((task) => {
      if (task.id === id) {
        task.completed = !task.completed
        return task
      }
      return task
    })
    setTasks(tasksModified)
  }

  const deleteTask = (id) => {
    setTasks((tasks)=>(tasks.filter((task) => task.id !== id)))
  }

  return (
    <>
      <FormTask onSubmit={addTask} />
      <div className='AppContainer__TaskList'>
        {
          tasks.map((task) => 
            <Task key={task.id} id={task.id} text={task.text} completed={task.completed} completeTask={ completeTask } deleteTask={ deleteTask } />
          )
        }
      </div>
    </>
  )
}

export default TaskList
