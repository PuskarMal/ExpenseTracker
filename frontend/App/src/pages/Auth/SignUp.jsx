import React from 'react'
import AuthLayout from '../../components/layouts/AuthLayout'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Input from '../../components/Inputs/Input'
import { validateEmail } from '../../utils/helper'
import ProfilePhotoSelector from '../../components/Inputs/ProfilePhotoSelector'

const SignUp = () => {
    const [profilePic, setProfilepic] = useState(null);
    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const[password, setPassword] = useState("")
    const [error, setError] = useState(null)

    const navigate = useNavigate();

    const handleSignUp = async(e) => {

    }
  return (
    <AuthLayout>
        <div className='lg:w-[100%] h-auto md:h-full mt-10 md:mt-0 flex flex-col justify-center'>
            <h3 className='text-xl font-semibold text-blck'>Create an Account</h3>
            <p className='text-xs text-slate-700 mt-[5px] mb-6'>
                Join us today by entering your details below.
            </p>
            <form onSubmit={handleSignUp}>
                <ProfilePhotoSelector image={profilePic} setImage={setProfilepic}/>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <Input value={fullName} label="Full Name" placeholder="John" type="text" 
                    onChange={(e) => setFullName(e.target.value)} />
                    <Input value={email} onChange={(e) => setEmail(e.target.value)} 
                    label="Email Address" placeholder="abc@example.com" type="text"/>
                    <div className='col-span-2'>
                        <Input value={password} 
                        onChange={(e) => setPassword(e.target.value)} placeholder="Min 8 Characters" type="password" />
                    </div>
                </div>
            </form>
        </div>
    </AuthLayout>
  )
}

export default SignUp