import { AppContainer, AppBody } from '../styles/AppLayout.style';
import AppHeader from '../AppHeader';
import AppFooter from '../AppFooter';

function AppLayout({ children }) {

  return (
    <>
          <AppContainer>
               <AppHeader />

               <AppBody>
                    { children }
               </AppBody>

               <AppFooter />
          </AppContainer>
    </>
  )

}

export default AppLayout