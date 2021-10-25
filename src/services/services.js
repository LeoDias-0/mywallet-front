import axios from 'axios'

const BASIC_URL = 'http://localhost:4000'

const postLogin = async (email, password) => {
    const body = {
        email,
        password
    }
    
    return await axios.post(`${BASIC_URL}/login-in`, body)
}

const postSignIn = (name, email, password) => {
    const body = {
        name,
        email,
        password
    }
    return axios.post(`${BASIC_URL}/sign-in`, body)
}

const getRegisters = (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    
    return axios.get(`${BASIC_URL}/`, config)
}

const postIncome = (body, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    
    return axios.post(`${BASIC_URL}/new-income`, body, config)
}

const postOutcome = (body, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    
    return axios.post(`${BASIC_URL}/new-outcome`, body, config)
}

const logout = (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    
    return axios.delete(`${BASIC_URL}/`, config)
}


export {
    postLogin,
    postSignIn,
    getRegisters,
    postIncome,
    postOutcome,
    logout
}
