import { Navbar, NavbarLink } from './styles/AppNavbar.style';

function AppNavbar() {

     const menus = [
          {
               id: 1, 
               text: 'Home',
               href: '/'
          },
          {
               id: 2, 
               text: 'About',
               href: '/about'
          },
          {
               id: 3, 
               text: 'Contact',
               href: '/contact'
          },
     ]

     return (
          <>
               <Navbar>
                    {menus.map((menu) => (
                         <NavbarLink key={menu.id} to={menu.href}>
                              {menu.text}
                         </NavbarLink>
                    ))}
               </Navbar>
          </>
     )
}

export default AppNavbar