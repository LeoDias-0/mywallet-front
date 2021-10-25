import LogoMyWallet from '../utils/LogoMyWallet'
import InfoInput from '../utils/InfoInput'
import CenteredButton from '../utils/CenteredButton'
import NoShapeButton from '../utils/NoShapeButton'
import Background from '../utils/Background'
import { useEffect, useState, useContext } from 'react'
import { postLogin } from '../../services/services'
import UserContext from '../contexts/UserContext'
import { useHistory } from 'react-router'

export default () => {
    const [email, setEmail] = useState(localStorage.getItem('email') || '')
    const [password, setPassword] = useState(localStorage.getItem('password') || '')
    const { setUser } = useContext(UserContext)
    const history = useHistory()

    const login = () => {

        postLogin(email, password).then(res => {
            // TODO: testar
            console.log(res)
            const { name, token, email } = res.data

            setUser({
                name: name,
                token: token,
                email: email
            })

            localStorage.setItem('name', name)
            localStorage.setItem('token', token)
            localStorage.setItem('email', email)
            localStorage.setItem('password', password)

            console.log('Logou com sucesso')
            history.push('/')
        }).catch(res => {
            console.log(res)
            alert('Não foi possível efetuar o login, atualize a página e tente novamente!')
            return
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
                type="email" />
            <InfoInput
                placeholder={'Senha'}
                value={password}
                onChange={e => setPassword(e.target.value)}
                type="password" />
            <CenteredButton
                onClick={login}
                text={'Entrar'} />
            <NoShapeButton text={'Primeira vez? Cadastre-se!'} to={'/sign-in'}/>
        </Background>
    )
}