import LogoMyWallet from '../utils/LogoMyWallet'
import InfoInput from '../utils/InfoInput'
import CenteredButton from '../utils/CenteredButton'
import NoShapeButton from '../utils/NoShapeButton'
import Background from '../utils/Background'
import { useEffect, useState, useContext } from 'react'
import { postLogin } from '../../services/services'
import UserContext from '../contexts/UserContext'
import { useHistory } from 'react-router'
import Swal from 'sweetalert2'

const LoginInScreen = () => {
    const [email, setEmail] = useState(localStorage.getItem('email') || '')
    const [password, setPassword] = useState(localStorage.getItem('password') || '')
    const { setUser } = useContext(UserContext)
    const history = useHistory()

    const showErrorMessage = text => {
            Swal.fire({
                title: 'Erro!',
                text,
                icon: 'error',
                confirmButtonText: 'Ok'
            })
        }


    const login = () => {

        postLogin(email, password).then(res => {

            const { name, token, email } = res.data

            localStorage.setItem('name', name)
            localStorage.setItem('token', token)
            localStorage.setItem('email', email)
            localStorage.setItem('password', password)

            setUser({
                name: name,
                token: token,
                email: email
            })

            // history.push('/')
            window.location = '/'
        }).catch(res => {
            const messages = {
                500: 'Houve um erro interno, tente novamente mais tarde.',
                409: 'E-mail não cadastrado!',
                422: 'Dados inválidos'
            }
            return showErrorMessage(messages[res.response.status])
        })
        
    }

    useEffect(() => {
        if (!email || !password) return
        login()
    }, [])

    return (
        <Background>
            <LogoMyWallet />
            <InfoInput
                placeholder={'E-mail'}
                value={email}
                onChange={e => setEmail(e.target.value)}
                type={"email"} />
            <InfoInput
                placeholder={'Senha'}
                value={password}
                onChange={e => setPassword(e.target.value)}
                type={"password"} />
            <CenteredButton
                onClick={login}
                text={'Entrar'} />
            <NoShapeButton text={'Primeira vez? Cadastre-se!'} to={'/sign-in'}/>
        </Background>
    )
}

export default LoginInScreen