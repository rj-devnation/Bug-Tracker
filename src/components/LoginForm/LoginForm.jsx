import React, { useState } from "react"
import { GiAlienBug } from "react-icons/gi"

function LoginForm(){
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleFormDataChange = (e) => {
        setFormData({
            email: e.target.value,
            password: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        onLogin({email, password})
    }
    return(
        <>
            <div className='flex w-full justify-center flex-col px-8'>
                <div className='flex justify-center mt-6 mb-1 items-center'>
                    <GiAlienBug size={45} className='text-blue-700 size-16 sm:size-20' />
                    <div className='text-blue-700 flex items-center pl-2 font-bold sm:text-6xl text-4xl tracking-wider pb-2 '>
                        Bug <span className='pl-3 text-orange-700'>Tracker</span>
                    </div>
                </div>

                <div className='text-gray-100 flex justify-center pl-2 font-bold text-md tracking-wider pb-8'>
                    <p>Don't have an account? Sign up!</p>
                </div>


                <div className="w-full h-[16rem] mx-auto bg-gray-50 shadow-xl rounded-lg max-w-md min-w-[256px]">
                    <div className="flex items-center justify-center h-16 pt-5 font-medium text-xl text-gray-400/70">
                        Login
                    </div>
                    <div className="flex justify-around pt-5 px-2 w-full md:px-8">
                        <form onSubmit={handleSubmit}>
                            <div className="flex justify-center flex-col items-center">
                                <input type="email" name='email' placeholder='Email Address' className="w-11/12 min-w-[174.16px] placeholder-gray-400 rounded-md border-none mb-2 shadow-md"/>
                                <input type="password" name="password" placeholder='Password' className="w-11/12 min-w-[174.16px] rounded-md border-none mb-3 shadow-md placeholder-gray-400"/>
                            </div>
                            <div className="flex flex-wrap justify-between px-1 items-center">
                                <label className="text-gray-400/70 font-medium inline w-44 text-nowrap">
                                    <input type='checkbox' name='remember' className="mx-2 mb-3 w-5 h-5 border-gray-50 shadow-gray-300 shadow-md rounded focus:ring-0 focus:ring-offset-0"/>
                                    Remember Me
                                </label>
                                <button type="submit" name="login" className="rounded-lg text-white shadow-md bg-blue-500 w-16 ">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginForm