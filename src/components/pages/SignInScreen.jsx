import LogoMyWallet from '../utils/LogoMyWallet'
import InfoInput from '../utils/InfoInput'
import CenteredButton from '../utils/CenteredButton'
import NoShapeButton from '../utils/NoShapeButton'
import Background from '../utils/Background'
import { useState, useContext } from 'react'
import { postSignIn } from '../../services/services'
import UserContext from '../contexts/UserContext'
import { useHistory } from 'react-router'
import validateSign from '../../validations/validateSign'
import Swal from 'sweetalert2'

export default () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const { setUser } = useContext(UserContext)
    const history = useHistory()

    const signIn = () => {

        const body = {
            name,
            email,
            password
        }

        const showErrorMessage = text => {
            Swal.fire({
                title: 'Erro!',
                text,
                icon: 'error',
                confirmButtonText: 'Ok'
            })
        }

        if (password !== confirmPassword) {
            return showErrorMessage('Digite a mesma senha nos campos abaixo!')
        }

        const validationsErrorsDetails = validateSign.validate(body).error?.details
        if (validationsErrorsDetails) return showErrorMessage('Dados inválidos!')

        postSignIn(name, email, password).then(() => {
            history.push('/login-in')
        }).catch(res => {
            
            const messages = {
                500: 'Houve um erro interno, tente novamente mais tarde.',
                409: 'E-mail já cadastrado!',
                422: 'Dados inválidos'
            }
            return showErrorMessage(messages[res.response.status])
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