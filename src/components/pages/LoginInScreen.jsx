import LogoMyWallet from '../utils/LogoMyWallet'
import InfoInput from '../utils/InfoInput'
import CenteredButton from '../utils/CenteredButton'
import NoShapeButton from '../utils/NoShapeButton'
import Background from '../utils/Background'
import { useEffect, useState, useContext } from 'react'
import { postLogin } from '../../services/services'
import { useHistory } from 'react-router'
import UserContext from '../contexts/UserContext'

export default () => {
    const [email, setEmail] = useState(localStorage.getItem('email') || '')
    const [password, setPassword] = useState(localStorage.getItem('password') || '')
    const history = useHistory()
    const { setUser } = useContext(UserContext)

    const login = async () => {

        const response = await postLogin(email, password)
        // TODO: testar

        if (response.status >= 300) {
            alert('Não foi possível efetuar o login, atualize a página e tente novamente!')
            return
        }
        const { name, token } = response.body

        setUser({
            name: name,
            token: token
        })

        localStorage.setItem('name', name)
        localStorage.setItem('token', token)
        localStorage.setItem('email', email)
        localStorage.setItem('password', password)

        history.push('/')
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
                type="email" />
            <InfoInput
                placeholder={'Senha'}
                value={password}
                onChange={e => setPassword(e.target.value)}
                type="password" />
            <CenteredButton
                onClick={login}
                text={'Entrar'}
                to={'/'} />
            <NoShapeButton text={'Primeira vez? Cadastre-se!'} to={'/sign-in'}/>
        </Background>
    )
}