import { NavLink } from "react-router-dom"

function Home() {
  return (
     <>
         <section className="w-full min-h-[calc(100vh-80px)] flex">
            <div className="container py-4 my-auto">
               <div className="w-1/2 flex flex-col space-y-4 items-center mx-auto bg-white px-4 py-8 rounded-sm">
                     <h1 className="text-2xl text-center font-bold text-gray-700 tracking-wide">
                        Login page design using ReactJs and TwailwindCSS Styled Components
                     </h1>

                     <NavLink className="inline-block text-primary-500 font-medium capitalize" to="/login">
                        Go to login page
                     </NavLink>
               </div>
            </div>
         </section>
         
     </>
  )
}

export default Home