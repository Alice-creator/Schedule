import axios from "axios"

export const AuthRegister = async (user) => {
    const config = {
        method: "POST",
        url: 'auth/register',
        data: user ,
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
        }
    }
    const { data } = await axios(config)
    // axios(config)
    // .then(data => console.log(data))
    // .catch(err => console.log(err))
}

export const AuthLogin = async (user) => {
    const config = {
        method: "POST",
        url: 'auth/login',
        data: user ,
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
        }
    }
    const { data } = await axios(config)
    return data
    
}