import { Link } from 'react-router-dom'
import { IoLogoFacebook, IoLogoTwitter, IoLogoInstagram } from 'react-icons/io'

function Ala() {
  return (
    <div className='footer-wrapper'>
      <div className='footer-container'>
        <div className='logo-footer'>
          <h2>HandMeOver</h2>
          <p>Shop from over 30 of the world`s finest brands</p>
        </div>
        <div className='left-footer'>
          <h3>About HandMeOver</h3>
          <p>Some Text Here</p>
        </div>
        <div className='social-links'>
          <Link to='/'><IoLogoFacebook className='facebook black'/></Link>
          <Link to='/'><IoLogoTwitter className='twitter black'/></Link>
          <Link to='/'><IoLogoInstagram className='instagram black'/></Link>
        </div>
      </div>
    </div>
  )
}

export default Ala
