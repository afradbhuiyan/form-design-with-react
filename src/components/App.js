import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import './../assets/css/App.css';

function App() {

     return (
          <>
               <div className="container">
                    <h1 className='text-center'>
                         Hello World (<FontAwesomeIcon icon={solid('user')} />)
                    </h1>
               </div>
          </>
     )
     
}

export default App