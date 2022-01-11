import { Link } from 'react-router-dom'
import { logOut } from '../helpers/auth'

function Header() {
  return (
    <div className='header-wrapper'>
      <div className='header-container'>
        <h1>Hand-Me-Over</h1>
        <Link className='log-out' to='/' onClick={logOut}>
          Sign Out
        </Link>
      </div>
    </div>
  )
}

export default Header
