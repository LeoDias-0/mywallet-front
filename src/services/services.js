import axios from 'axios'

const BASIC_URL = 'http://localhost:4000'

const postLogin = (email, password) => {
    const body = {
        email,
        password
    }
    return axios.post(`${BASIC_URL}/login-in`, body)
}

const postSignIn = (name, email, password) => {
    const body = {
        name,
        email,
        password
    }
    return axios.post(`${BASIC_URL}/sign-in`, body)
}

export {
    postLogin,
    postSignIn
}