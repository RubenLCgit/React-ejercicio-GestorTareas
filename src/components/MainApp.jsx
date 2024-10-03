import '../styles/MainApp.css'
import TaskList from './TaskList'

const MainApp = () => (

  <div className='AppContainer__mainContainer'>
    <div className='AppContainer__mainTaskList'>
      <h1>My Tasks</h1>
      <TaskList />
    </div>
  </div>
  
)

export default MainApp