import { NavLink } from 'react-router-dom';
import tw from 'tailwind-styled-components';

export const Form = tw.form`
     w-full
     bg-white
     px-6
     py-8
     shadow-md
     rounded-sm
     flex
     flex-col
     space-y-4
`;

export const FormHeader = tw.div`
     w-full
     flex
     flex-col
     space-y-2
`;

export const FormTitle = tw.h4`
     text-center 
     text-2xl 
     font-semibold 
     uppercase 
     text-gray-800
`
export const FormSubTitle = tw.p`
     text-center  
     font-medium 
     text-gray-500
`

export const FormSubLink = tw(NavLink)`
     inline-block 
     text-primary-500 
     focus:outline-none 
     focus:text-primary-700 
     hover:text-primary-700
`;

export const FormForgetPassLink = tw(NavLink)`
     inline-block
     text-gray-500 
     font-medium 
     text-sm 
     capitalize 
     focus:outline-none 
     focus:text-primary-500 
     hover:text-primary-500
`;

export const FormBody = tw.div`w-full`;

export const FormFooter = tw.div`w-full`;
