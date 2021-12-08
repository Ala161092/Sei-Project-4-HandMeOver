import { Link } from 'react-router-dom'
import OffcanvasMenu from 'react-offcanvas-menu-component'
import { IoLogoFacebook, IoLogoTwitter, IoLogoInstagram } from 'react-icons/io'

function Menu({ location }) {
  return (
    <OffcanvasMenu className='offcanvasNav'
      Link={Link}
      location={location}
      config={{
        push: true,
      }}
      menu={[
        { text: 'Register', link: '/register' },
        { text: 'Sign In', link: '/login' },
        { text: 'Home', link: '/' },
        { text: 'Bags', link: '/bags' },
        { text: 'About', link: '/' },
        { text: 'Sell A Bag', link: '/sellbag' },
        { text: 'My Profile', link: '/profile' },
        { text: 'Cart', link: '/mycart' }
      ]}
      header={<h1>HandMeOver</h1>}
      footer={
        <div className='social-links'>
          <Link to='/'><IoLogoFacebook className='facebook black'/></Link>
          <Link to='/'><IoLogoTwitter className='twitter black'/></Link>
          <Link to='/'><IoLogoInstagram className='instagram black'/></Link>
        </div>
      }
    />
  )
}

export default Menu
