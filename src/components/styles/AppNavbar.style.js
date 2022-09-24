import tw from 'tailwind-styled-components';
import { NavLink, useMatch, useResolvedPath } from 'react-router-dom';

export const Navbar = tw.nav`w-full hidden md:block`;


export const NavbarLink = ({to, children, ...props}) => {

     const resolved = useResolvedPath(to);
     const match = useMatch({
          path: resolved.pathname,
          end: true
     });
     
     return (
          <NavLink {...props} to={to}  className={`inline-flex items-center space-x-2 px-3 py-1 mr-4 last:mr-0 font-medium tracking-wide hover:text-gray-700 ${ match ? 'bg-gray-700 text-gray-100 hover:text-gray-100 rounded' : 'text-gray-500' }`}>
               {children}
          </NavLink>
     );

};