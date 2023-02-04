import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

function SignIn() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const { user, logIn } = UserAuth()
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        try {
            await logIn(email, password)
            navigate('/')
        }
        catch (error) {
            console.log(error)
            setError(error.message)
        }
    }

    return (
        <div className='w-full h-screen flex flex-col justify-center items-center'>
            <div className='fixed w-[450px] h-[600px] bg-[#2C3948] rounded-lg shadow-black shadow-2xl'>
                <div className='w-[320px] mx-auto py-16'>
                    <div className='flex justify-between text-[20px] pb-10'>
                        <Link to='/signup'><div className='text-gray-500'>Sign Up</div></Link>
                        <Link to='/signin'><div>Sign In</div></Link>
                    </div>
                    <div>
                        {error ? <p className='py-3 text-red-600'>{error}</p> : null}
                        <form onSubmit={handleSubmit} className='flex flex-col'>
                            <input
                                onChange={(e) => setEmail(e.target.value)}
                                className='p-3 my-2 bg-[#49607B] rounded'
                                type="email"
                                placeholder='Email'
                                autoComplete='email' />
                            <input
                                onChange={(e) => setPassword(e.target.value)}
                                className='p-3 my-2 bg-[#49607B] rounded'
                                type="password"
                                placeholder='Password'
                                autoComplete='current-password' />
                            <button className='bg-[#30B3E7] py-3 my-6 rounded-[30px] font-bold'>Sign In</button>
                            <div className='flex justify-between items-center text-sm'>
                                <p><input className='mr-2' type="checkbox" />Remember me</p>
                                <p className='text-[#2EA0CD]'>Forgot password?</p>
                            </div>
                        </form>
                    </div>
                    <div className='text-xs flex flex-col justify-center items-center pt-[150px]'>Privacy &nbsp;&nbsp;&nbsp; Terms &nbsp;&nbsp;&nbsp; About</div>
                </div>
            </div>
        </div>
    )
}

export default SignIn