import React,{ useState } from 'react'
import { Link } from 'react-router-dom'
import { HiOutlineMail } from 'react-icons/hi'
import { GoEye,GoEyeClosed } from 'react-icons/go'
import { IRegisterFunctionParams } from '../types/auth.types'
import '../CSS/signin-signup.scss'

const RegisterForm = ( submitFunc: (params: IRegisterFunctionParams) => void ) => {
    
    const [email,setEmail] = useState<string>('')
    const [password,setPassword] = useState<string>('')
    const [inputType,setInputType] = useState<string>('password')

    const showPassword = () => {
        inputType === 'password' ? setInputType('text') : setInputType('password')
    }

    return (
        <form onSubmit={submitFunc(email,password,event)}>
            <div className='email-box'>
                <label>Email</label>
                <div className='email-input-box'>
                    <input 
                        type='email' 
                        placeholder='email'
                        value={email}
                        onChange={event => setEmail(event.target.value)}/>
                    <HiOutlineMail className='input-icon'/>
                </div>
            </div>
            <div className='password-box'>
                <label>Password</label>
                <div className='password-input-box'>
                    <input 
                        type={inputType} 
                        placeholder='password'
                        value={password}
                        onChange={event => setPassword(event.target.value)}/>
                    {inputType === 'text' 
                        ? <GoEye className='input-icon' onClick={showPassword}/> 
                        : <GoEyeClosed className='input-icon' onClick={showPassword}/>
                    }
                </div>
            </div>

            <button className='btn'>Login</button>


        </form>
                // <div className='question'>

                //     <p className='q-text'>Don't have an account ?</p>

                //     <Link to='/signup' className='q-link'>Sing Up</Link>
                    
                // </div>
    )
}

export default RegisterForm;