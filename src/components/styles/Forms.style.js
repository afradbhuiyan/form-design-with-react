import tw from "tailwind-styled-components";

export const InputRow = tw.div`
     w-full  
     bg-white 
     rounded-sm
     overflow-hidden
     border-2
     ${({ $focused }) => $focused ? 'border-primary-500' : 'border-gray-200' }
     mb-4
     last:mb-0 
`;

export const InputText = tw.input`
     w-full
     px-4 py-3
     text-base
     font-medium
     text-gray-500
     bg-transparent
     border-0
     focus:ring-0
     placeholder:text-gray-500
`;

export const InputCheckbox = tw.input`
     border 
     border-gray-300 
     text-primary-500 
     rounded-sm 
     focus:ring-2 
     focus:ring-primary-500 
     cursor-pointer
`;

export const InputGroup = tw.div`
     w-full
     bg-white 
     rounded-sm
     flex
     items-center
`;

export const InputTypeToggleBtn = tw.button`
     p-3
     text-gray-500
     focus:text-primary-500
     focus:outline-none
`;