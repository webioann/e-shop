import React, { useState } from 'react'
import { useAppDispatch } from '../../redux/store'
import { openModal, closeModal } from '../../redux/modelSlice';
import { Link } from 'react-router-dom'
import Popup from '../../components/Popup/Popup'
import SigninWithGoogle from '../../auth/Signin/SigninWithGoogle'
import FormRegistration from '../../auth/FormRegistration/FormRegistration'
import LoginWithEmail from '../../auth/LoginWithEmail/LoginWithEmail';
import ModalCloseButton from '../../components/ModalCloseButton/ModalCloseButton'
import ModalPortal from '../../layout/ModalPortal/ModalPortal';
import './login-page.scss'

const Login_page = () => {

    const [email,setEmail] = useState<string>('')
    const [password,setPassword] = useState<string>('')
    const [warning,setWarning] = useState<boolean>(false)
    const dispatch = useAppDispatch()
    
    const closePopup = () => setWarning(false)
    
    return (
        <ModalPortal>
            <div className={`login-page`}>
                <h1 className='auth-header'>Login</h1>
                <ModalCloseButton/>
                { warning && <Popup closePopup={closePopup}/>}
                <FormRegistration setEmail={setEmail} setPassword={setPassword}/>
                <LoginWithEmail email={email} password={password} setWarning={setWarning}/>
                <div className='or-line'>---- or other variant ----</div>
                <SigninWithGoogle/>
                <div className='question'>
                    <p className='question-text'>Don't have an account ?</p>
                    <Link 
                        to='/signup' 
                        className='question-link'
                        onClick={async() => {
                            await dispatch(closeModal())
                            dispatch(openModal())
                        }}>
                            Sign Up
                    </Link>
                </div>        
            </div>
        </ModalPortal>
    )
}
export default Login_page;