import { Link } from 'react-router-dom'
import OffcanvasMenu from 'react-offcanvas-menu-component'

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
        { text: 'Bags', link: '/' },
        { text: 'About', link: '/' }
      ]}
      header={<h1>HandMeOver</h1>}
      footer={<h2>Footer</h2>}
    />
  )
}

export default Menu
