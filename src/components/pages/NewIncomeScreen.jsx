import styled from 'styled-components'
import InfoInput from '../utils/InfoInput'
import CenteredButton from '../utils/CenteredButton'
import { useState, useContext, useEffect  } from 'react'
import { getRegisters, postIncome } from '../../services/services'
import UserContext from '../contexts/UserContext'
import { useHistory } from 'react-router'
import dayjs from 'dayjs'
import validateNewEntry from '../../validations/validateNewEntry'
import Swal from 'sweetalert2'

const Container = styled.div`
    background-color: #8C11BE;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    padding: 25px;
`

const ContainerTitle = styled.div`
    font-family: 'Raleway';
    font-style: normal;
    font-weight: bold;
    font-size: 26px;
    color: #FFFFFF;
    width: 100%;
    margin-bottom: 40px;
`

export default () => {
    const [value, setValue] = useState('')
    const [description, setDescription] = useState('')
    const { user } = useContext(UserContext)
    const history = useHistory()

    const showErrorMessage = text => {
        Swal.fire({
            title: 'Erro!',
            text,
            icon: 'error',
            confirmButtonText: 'Ok'
        })
    }

    const addIncome = () => {
        
        let body = {
            value,
            description
        }

        const validationsErrorsDetails = validateNewEntry.validate(body).error?.details
        if (validationsErrorsDetails) return showErrorMessage('Informações incorretas.')

        body = {
            value,
            description,
            date: dayjs().format('DD/MM'),
            isIncome: true
        }
        postIncome(body, user.token).then(res => {
            history.push('/')
        }).catch(res => {
            console.log(res.status)
            showErrorMessage('Houve um erro interno, por favor atualize a página.')
        })
        
    }

    useEffect(() => {
        const { token } = user

        getRegisters(token).catch(res => {
            const status = res.response.status
            if (status === 405) return history.push('login-in')
        })

    }, [])

    return (
        <Container>
            <ContainerTitle>Nova entrada</ContainerTitle>
            <InfoInput value={value} onChange={e => setValue(e.target.value)} placeholder={'Valor'}/>
            <InfoInput value={description} onChange={e => setDescription(e.target.value)} placeholder={'Descrição'}/>
            <CenteredButton text={'Salvar entrada'} onClick={addIncome}/>
        </Container>
    )
}
