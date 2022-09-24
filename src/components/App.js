import { Routes, Route } from 'react-router-dom';
//pages
import Login from './pages/Login';
import Home from './pages/Home';

//layouts
import AppLayout from './layouts/AppLayout';

//styles
import './../assets/css/App.css';

function App() {

     return (
          <>
               <AppLayout>
                    <Routes>
                         <Route path='/' element={ <Home />} />
                         <Route path='/about' element={ <Home />} />
                         <Route path='/contact' element={ <Home />} />
                         <Route path='/login' element={ <Login />} />
                    </Routes>
               </AppLayout>
          </>
     )
     
}

export default App