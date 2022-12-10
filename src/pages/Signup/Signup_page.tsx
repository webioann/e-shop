import React, { useState } from 'react'
import { useAppDispatch } from '../../redux/store'
import { openModal, closeModal } from '../../redux/modelSlice'
import { Link, useNavigate } from 'react-router-dom'
import ModalCloseButton from '../../components/ModalCloseButton/ModalCloseButton'
import ModalPortal from '../../layout/ModalPortal/ModalPortal'
import SigninWithGoogle from '../../auth/Signin/SigninWithGoogle'
import SignupWithEmail from '../../auth/SignupWithEmail/SignupWithEmail'
import FormRegistration from '../../auth/FormRegistration/FormRegistration'
import Popup from '../../components/Popup/Popup'
import './signup-page.scss'

const Signup_page = () => {

    const [email,setEmail] = useState<string>('')
    const [password,setPassword] = useState<string>('')
    const [warning,setWarning] = useState<boolean>(false)
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    
    const closePopup = () => setWarning(false)

    return (
        <ModalPortal>
            <div className={`signup-page`}>
                <h1 className='auth-header'>Sign Up</h1>
                <ModalCloseButton/>
                { warning && <Popup closePopup={closePopup}/>}
                <FormRegistration setEmail={setEmail} setPassword={setPassword}/>
                <SignupWithEmail email={email} password={password} setWarning={setWarning}/>
                <div className='or-line'>---- or other variant ----</div>
                <SigninWithGoogle/>
                <div className='question'>
                    <p className='question-text'>Already have an account ?</p>
                    <Link 
                        to='/login' 
                        className='question-link'
                        onClick={async() => {
                            await dispatch(closeModal())
                            dispatch(openModal())
                        }}>
                            Login
                        </Link>
                </div>
            </div>
        </ModalPortal>
    )
}
export default Signup_page;