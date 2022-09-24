import tw from 'tailwind-styled-components';
import { NavLink } from 'react-router-dom';

export const Header = tw.header`
     w-full
     h-20
     bg-white
     flex
     border-b
     border-gray-200
`;

export const HeaderContainer = tw.div`
     container
     flex
     justify-between
     my-auto
`;

export const HeaderBlock = tw.div`
     my-auto
`;

export const HeaderInnerBlock = tw.div`
     mr-6
     last:mr-0
     my-auto
`;

export const HeaderLogo = tw(NavLink)`
     text-primary-600 
     tracking-wide 
     font-semibold 
     text-2xl 
     uppercase
`;

export const HeaderLoginButton = tw(NavLink)`
     bg-primary-500 
     text-gray-100 
     font-medium 
     px-4 py-2 
     space-x-2 
     capitalize 
     tracking-wide 
     rounded 
     hover:bg-primary-700 
     transition-colors 
     duration-150
`