import tw from "tailwind-styled-components";

export const Button = tw.button`
     inline-block
     text-base
     font-medium
     tracking-wide
     rounded-sm
     focus:outline-none
     transition-colors
     duration-150

     ${({ $color, $size, $block }) => {

          let output = '';

          if($block) {

               output += 'w-full ';
          }

          if($color === 'primary') {

               output +='bg-primary-500 text-white hover:bg-primary-700 focus:bg-primary-700 ';
          }

          if($size === 'sm') {

               output += 'p-2 ';
          }

          if($size === 'md') {

               output += 'px-4 py-3 ';
          }

          if($size === 'lg') {

               output += 'px-6 py-3 ';
          }

          return output;
     }}
     

`;



