import React, { useState, useContext } from 'react'
import SignInLayout from '../../../components/Layout/SignInLayout'
import BgSignIn from "../../../assets/BgSignIn.png"
import GoogleLogin from 'react-google-login'
import axios from "axios"
import { FcGoogle } from 'react-icons/fc'
import { Link, useNavigate } from 'react-router-dom'
import { AuthLogin } from '../../../services/AuthApi'
import { useCookies } from 'react-cookie'
import { ExtensionsContext } from '../../../components/GlobalStates/ExtensionsContext'
import { t } from 'i18next'
import { UserContext } from '../../../components/GlobalStates/UserContext'
const checkIsValidField = (user) => {
    if(user.email == '') {
        console.log('chua nhâp ten');
        return "Please fill in the blank fields."
    }if(user.passsword == '') {
        console.log('chua nhâp ten');
        return "Please fill in the blank fields."
    }
    return true
}
const checkIsValidPassword = (password) => {
    if(password.length < 6 || password.length > 20) {
        console.log('chua nhâp ten');
        return "'Password' must be between 6 and 20 characters"
    }
    return true
}
const LogIn = () => {
    const negative = useNavigate()
    // const token = data.data
    const [ cookies ,setCookie ] = useCookies('access_token')
    const [ error, setError ] = useState()

    const { setLoading } = useContext(ExtensionsContext)
    const { setUser } = useContext(UserContext)

    // setCookie('access_token', token, { path: '/' })
    // console.log(cookies);
    const [ users, setUsers ] = useState({
        email: undefined,
        password: undefined,
    })
    
    const handleChange = (e) => {
        setUsers((prev) =>({...prev, [e.target.id] : e.target.value}))
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        if(checkIsValidField(users) === true && checkIsValidPassword(users.password) === true ) {
            setLoading(true)
            const data = await AuthLogin(users)
            setCookie('access_token', data, { path: '/editor'})
            window.location.href = '/editor'
            setLoading(false)
        } else if(checkIsValidField(users) !== true ) {
            setError(checkIsValidField(users))
        } else {
            setError(checkIsValidPassword(users.password))
        }  
    };
    // if (cookies.access_token) {
	// 	window.location.href = '/editor'
	// }
    const responseGoogle = async (response) => {
        const { email, imageUrl, name } = response.profileObj
        const userGg = {
            name: name,
            email: email,
            imageUrl: imageUrl,
            password: "qdwapqjfowlcnsjqpwEqsdefsfs",
            isAdmin: false
        }
        
        // const userGg = { email,name,imageUrl }
        // console.log(response)
        const token = response.id_token
        console.log(userGg);
        const data = await AuthLogin(userGg)
        console.log(data);
        setCookie('access_token', data, { path: '/editor'})
        
        // negative("/editor", {replace : true})
        // setLoading(true)
        // setUser(userGg)
        window.location.href = '/editor'
        // setCookie('access_token', data, { path: '/editor'})
        // negative("/editor", {replace : true})
        // setLoading(false)
    }
    
  return (
    <SignInLayout>
        <div className=' flex justify-between rounded-3xl overflow-hidden border-4 border-blue-100'>
            <div className='left flex-1 bg-slate-50 xl:py-32 xl:px-36 lg:py-24 lg:px-32 md:px-20 md:py-20'>
                <h1 className='font-bold text-5xl'>{t("signin.login.title")}</h1>
                <p className='text-2xl text-slate-500'>{t("signin.login.content")}</p>
                <form>
                    <div className='flex flex-col text-2xl my-3 font-medium'>
                        <label htmlFor="email">{t("signin.login.email")}</label>
                        <input type="email" id="email" placeholder='you@domain.com' onChange={handleChange} className='border-2 border-slate-800 shadow-primaryBoxShadow py-2 px-3 rounded-lg my-2' required/>
                    </div>
                    <div className='flex flex-col text-2xl my-3 font-medium'>
                        <label htmlFor="password">{t("signin.login.password")}</label>
                        <input type="password" id="password" placeholder='••••••••••' autoComplete='on' onChange={handleChange} className='border-2 border-slate-800 shadow-primaryBoxShadow py-2 px-3 rounded-lg my-2' required/>
                    </div>
                    <button type="submit" onClick={handleSubmit} className='bg-primary-button-color shadow-buttonBoxShadow w-full p-3 my-5 rounded-lg text-white'>{t("signin.login.login")}</button>
                </form>
                {error &&
                    <p className='-bottom-5 text-2xl text-center text-red-500'>{error}</p>
                }
                <div>
                    <GoogleLogin 
                        clientId={process.env.REACT_APP_GOOGLE_API_TOKEN}
                        render={(renderProps) => (
                            <button type="button" 
                                className='shadow-buttonBoxShadow w-full flex justify-center items-center p-3 mt-6 rounded-lg text-black border-2 border-slate-800'
                                onClick={renderProps.onClick}   
                                disabled={renderProps.disabled} 
                            >
                                <FcGoogle  className='mr-4' /> {t("signin.login.loginGg")}
                            </button>
                        )}
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={'single_host_origin'}
                    />
                </div>
                <div className='flex justify-center my-4'>
                    {t("signin.login.account")} 
                    <Link to="/signup" className='ml-2 text-primary-text-color'> {t("signin.login.signup")} </Link> 
                </div>
            </div>
            <div className='right bg-primary-color lg:object-cover lg:block hidden'>
                <img src={BgSignIn} />
            </div>
        </div>
    </SignInLayout>
  )
}
export default LogIn