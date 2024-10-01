import imgLogo from '../img/logo.png'
import '../styles/Logo.css'

const Logo = () => (

  <div className='AppContainer__logoContainer'>
      <img className='AppContainer__logoImg' src={imgLogo} alt="Task manager logo." />
  </div>

)

export default Logo