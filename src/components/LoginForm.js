import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { InputText, InputCheckbox, InputRow, InputGroup, InputTypeToggleBtn } from './styles/Forms.style';
import { Form, FormHeader, FormTitle, FormSubTitle, FormBody, FormFooter, FormSubLink, FormForgetPassLink } from './styles/LoginForm.style';
import { Button } from './styles/Buttons.style';


function LoginForm() {

     const [phoneOrEmail, setPhoneOrEmail] = useState({
          type: 'text',
          name: 'phoneOrEmail',
          value: '',
          placeholder: 'Phone | E-mail address',
          focused: false
     });

     const [password, setPassword] = useState({
          type: 'password',
          name: 'password',
          value: '',
          placeholder: 'Password',
          focused: false
     });

     const [termsAndCondition, setTermsAndCondition] = useState({
          type: 'checkbox',
          name: 'termsAndCondition',
          checked: false
     });

     const setInputValue = (e, setState) => {

          if(e.target.type === 'checkbox') {

               return setState((prevState) => ({ 
                    ...prevState,
                    checked: e.target.checked
               }));

          }

          return setState((prevState) => ({ 
               ...prevState,
               value: e.target.value 
          }));
     }

     const togglePasswordType = () => {

          setPassword((prevState) => ({ 
               ...prevState, 
               type: prevState.type === 'password' ? 'text' : 'password'
          }))
     }

     const focusInput = (e, setState) => {
          
          if(e.type === 'focus') {

               setState((prevState) => ({ ...prevState, focused: true }));

          }else if(e.type === 'blur') {

               setState((prevState) => ({ ...prevState, focused: false }));
          }
     }

     const handleFormSubmit = (e) => {

          e.preventDefault();
          
          console.log(phoneOrEmail.value);
          console.log(password.value);
          console.log(termsAndCondition.checked);
     }

     return (
          <>
               <Form onSubmit={handleFormSubmit}>
                    <FormHeader>
                         <FormTitle>Login</FormTitle>

                         <FormSubTitle className="text-sm">
                              Don't have an account. Let's create one <FormSubLink to="/signup">Signup</FormSubLink>
                         </FormSubTitle>
                    </FormHeader>

                    <FormBody>
                         <InputRow $focused={phoneOrEmail.focused}>
                              <InputText 
                                   type={phoneOrEmail.type}
                                   name={phoneOrEmail.name}
                                   value={phoneOrEmail.value}
                                   placeholder={phoneOrEmail.placeholder}
                                   onChange={(e) => setInputValue(e, setPhoneOrEmail)}
                                   onFocus={(e) => focusInput(e, setPhoneOrEmail) }
                                   onBlur={(e) => focusInput(e, setPhoneOrEmail) }
                              />
                         </InputRow>

                         <InputRow $focused={password.focused}>
                              <InputGroup>
                                   <InputText 
                                        type={password.type}
                                        name={password.name}
                                        value={password.value}
                                        placeholder={password.placeholder}
                                        onChange={(e) => setInputValue(e, setPassword)}
                                        onFocus={(e) => focusInput(e, setPassword) }
                                        onBlur={(e) => focusInput(e, setPassword) }
                                   />

                                   <InputTypeToggleBtn
                                        onClick={togglePasswordType}
                                        type="button"
                                   >
                                        {password.type === 'password' ? 
                                             <FontAwesomeIcon icon={solid('eye-slash')} /> : 
                                             <FontAwesomeIcon icon={solid('eye')} />
                                        }
                                   </InputTypeToggleBtn>
                              </InputGroup>
                         </InputRow>

                         <div className="w-full text-right">
                              <FormForgetPassLink to="/foraget-password">
                                   Forget password?
                              </FormForgetPassLink>
                         </div>
                    </FormBody>

                    <FormFooter>
                         <Button 
                              type="submit"
                              $color="primary"
                              $size="md"
                              $block={true} 
                         >
                              Login
                        </Button>
                         
                        <div className='w-full flex items-center space-x-2 mt-2'>
                              <InputCheckbox
                                   type={termsAndCondition.type}
                                   name={termsAndCondition.name}
                                   checked={termsAndCondition.checked}
                                   onChange={(e) => setInputValue(e, setTermsAndCondition)}
                              />

                              <FormSubTitle className="text-xs">
                                   By using our website you agree to ou <FormSubLink to="/toc">terms of conditions</FormSubLink>
                              </FormSubTitle>
                        </div>
                    </FormFooter>
               </Form>
          </>     
     )
}

export default LoginForm