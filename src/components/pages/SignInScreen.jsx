import LogoMyWallet from '../utils/LogoMyWallet'
import InfoInput from '../utils/InfoInput'
import CenteredButton from '../utils/CenteredButton'
import NoShapeButton from '../utils/NoShapeButton'
import Background from '../utils/Background'
import { useState, useContext } from 'react'
import { postSignIn } from '../../services/services'
import UserContext from '../contexts/UserContext'
import { useHistory } from 'react-router'

export default () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const { setUser } = useContext(UserContext)
    const history = useHistory()

    const signIn = () => {
        if (password !== confirmPassword) {
            alert('Digite a mesma senha nos campos abaixo!')
            return
        }

        postSignIn(name, email, password).then(res => {

            history.push('/login-in')
        }).catch(res => {
            console.log(res)
            alert('Não foi possível efetuar o cadastro, atualize a página e tente novamente!')
            return
        })
    }

    return (
        <Background>
            <LogoMyWallet />
            <InfoInput
                placeholder={'Nome'}
                value={name}
                onChange={e => setName(e.target.value)} />
            <InfoInput
                placeholder={'E-mail'}
                value={email}
                type={'email'}
                onChange={e => setEmail(e.target.value)} />
            <InfoInput
                placeholder={'Senha'}
                value={password}
                type={'password'}
                onChange={e => setPassword(e.target.value)} />
            <InfoInput
                placeholder={'Confirme a senha'}
                value={confirmPassword}
                type={'password'}
                onChange={e => setConfirmPassword(e.target.value)} />
            <CenteredButton onClick={signIn} text={'Cadastrar'} />
            <NoShapeButton text={'Já tem uma conta? Entre agora!'} to={'/login-in'}/>
        </Background>
    )
}