import LoginForm from "../LoginForm";


function Login () {
     return (
        <>
            <section className="w-full min-h-[calc(100vh-80px)] flex">
               <div className="container py-4 my-auto">
                    <div className="w-full sm:w-2/3 md:w-2/4 lg:w-2/5 xl:w-2/6 mx-auto">
                         <LoginForm />
                    </div>
               </div>
            </section>
        </>
     )
}

export default Login