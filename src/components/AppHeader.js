import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

import { 
     Header, 
     HeaderLogo, 
     HeaderBlock, 
     HeaderContainer, 
     HeaderInnerBlock,
     HeaderLoginButton
} from './styles/AppHeader.style';

import AppNavbar from './AppNavbar';


function AppHeader() {
     return (
          <>
               <Header>
                    <HeaderContainer>
                         <HeaderBlock>
                              <HeaderLogo to='/'>
                                   Logo
                              </HeaderLogo>
                         </HeaderBlock>

                         <HeaderBlock className="flex">
                              <HeaderInnerBlock>
                                  <AppNavbar />
                              </HeaderInnerBlock>

                              <HeaderInnerBlock>
                                   <HeaderLoginButton to="/login">
                                        <FontAwesomeIcon icon={solid('user')} />
                                        <span>Login</span>
                                   </HeaderLoginButton>
                              </HeaderInnerBlock>
                         </HeaderBlock>
                    </HeaderContainer>
               </Header>
          </>
     )
}

export default AppHeader