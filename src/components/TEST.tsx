import React, { useState, useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '../redux/store'
import { GoEye,GoEyeClosed } from 'react-icons/go'
import '../style/form-registration.scss'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase.config'

const FormRegistration = () => {

    const [value_1, setValue1] = useState<string>('')
    const [value_2, setValue2] = useState<string>('')
    const DB_users = collection(db, 'users')

    useEffect(() => {
        const getUsers = async () => {
            const resp = await getDocs(DB_users)
            console.log(resp)
        }
        getUsers()
    }, [])

    return (
        <div>
            <form style={{width: '300px'}} onSubmit={event => event.preventDefault() }>
                <div className='email-box'>
                    <div className='email-input-box'>
                        <input 
                            type='email' 
                            placeholder='email'
                            onChange={event => setValue1(event.target.value)}
                        />
                    </div>
                </div>
                <div className='password-box'>
                    <div className='password-input-box'>
                        <input 
                            type='text' 
                            onChange={event => setValue2(event.target.value)}
                        />
                    </div>
                </div>
            </form>
            <div className="password-input-box">

            </div>
        </div>
    )
}

export default FormRegistration;