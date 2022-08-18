import React, { useState } from 'react'
import SignInLayout from '../../../components/Layout/SignInLayout'
import BgSignIn from "../../../assets/BgSignIn.png"
import GoogleLogin from 'react-google-login'
import { FcGoogle } from 'react-icons/fc'
import { Link, useNavigate } from 'react-router-dom'
import { AuthRegister } from '../../../services/AuthApi'
import { useCookies } from 'react-cookie'
import { t } from 'i18next'
import { gapi } from "gapi-script";
const checkIsValidField = (user) => {
    if(user.name == '') {
        return "Please fill in the blank fields."
    }
    if(user.email == '') {
        return "Please fill in the blank fields."
    }if(user.passsword == '') {
        return "Please fill in the blank fields."
    }
    return true
}
const checkIsValidPassword = (password) => {
    if(password.length < 6 || password.length > 20) {
        return "'Password' must be between 6 and 20 characters"
    }
    return true
}
const SignUp = () => {
    const [cookies, setCookie] = useCookies('token')
    const [ error, setError ] = useState()
	if (cookies.token) {
		window.location.href = '/'
	}
    
    const negative = useNavigate()

    // const authRegister = AuthRegister()

    const [ user, setUser ] = useState({
        name: '',
        email: '',
        password: '',
        imageUrl: ''
    })
    const handleChange = (e) => {
        setUser((prev) =>({...prev, [e.target.id] : e.target.value}))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(checkIsValidField(user) == true && checkIsValidPassword(user.password) == true ) {
            AuthRegister(user)
            negative("/login", { replace : true })
        } else if(checkIsValidField(user) !== true ) {
            setError(checkIsValidField(user))
        } else {
            setError(checkIsValidPassword(user.password))
        }
      };
      
      const responseGoogle = (response) => {
        gapi.load("client:auth2", () => {
          gapi.client.init({
            clientId:
              `${process.env.REACT_APP_GOOGLE_API_TOKEN}`,
            plugin_name: "chat",
          });
        });
        const { email, imageUrl, name } = response.profileObj
        
        const user = {
            name, email, imageUrl
        }

        AuthRegister(user)
        
        negative("/login", {replace : true})
    }
  return (
    <SignInLayout>
        <div className=' flex justify-between rounded-3xl overflow-hidden border-4 border-blue-100'>
            <div className='left flex-1 bg-slate-50 xl:py-32 xl:px-36 lg:py-24 lg:px-32 md:px-20 md:py-20'>
                <h1 className='font-bold text-5xl'>{t("signin.signup.title")}</h1>
                <p className='text-2xl text-slate-500'>{t("signin.signup.content")}</p>
                <form>
                    <div className='flex flex-col text-2xl my-4 font-medium'>
                        <label htmlFor="name">{t("signin.signup.username")}</label>
                        <input placeholder='What shall we call you?' id="name" onChange={handleChange} className='border-2 border-slate-800 shadow-primaryBoxShadow py-2 px-3 rounded-lg my-2' required/>
                    </div>
                    <div className='flex flex-col text-2xl my-4 font-medium'>
                        <label htmlFor="email">{t("signin.signup.email")}</label>
                        <input type="email" id="email" placeholder='you@domain.com' onChange={handleChange} className='border-2 border-slate-800 shadow-primaryBoxShadow py-2 px-3 rounded-lg my-2' required/>
                    </div>
                    <div className='flex flex-col text-2xl my-4 font-medium'>
                        <label htmlFor="password">{t("signin.signup.password")}</label>
                        <input type="password" id="password" placeholder='••••••••••' autoComplete='on' onChange={handleChange} className='border-2 border-slate-800 shadow-primaryBoxShadow py-2 px-3 rounded-lg my-2' required/>
                    </div>
                    <button type="submit" onClick={handleSubmit} className='bg-primary-button-color shadow-buttonBoxShadow w-full p-3 my-5 rounded-lg text-white'>{t("signin.signup.signup")}</button>
                    
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
                                <FcGoogle  className='mr-4' /> {t("signin.signup.signupGg")}
                            </button>
                        )}
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={'single_host_origin'}
                    />
                </div>
                <div className='flex justify-center my-4'>
                    {t("signin.signup.account")} 
                    <Link to="/login" className='ml-2 text-primary-text-color'> {t("signin.signup.login")} </Link> 
                </div>
            </div>
            <div className='right bg-primary-color lg:object-cover lg:block hidden'>
                <img src={BgSignIn} />
            </div>
        </div>
    </SignInLayout>
  )
}

export default SignUp