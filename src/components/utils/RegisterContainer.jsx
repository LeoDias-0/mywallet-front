import { useEffect, useState, useContext, useCallback } from 'react'
import styled from 'styled-components'
import Register from './Register'
import { getRegisters } from '../../services/services'
import UserContext from '../contexts/UserContext'
import { useHistory, useLocation } from 'react-router'

const Container = styled.div`
    width: 100%;
    height: calc(100% - 242px);
    background-color: #ffffff;
    border-radius: 5px;
    margin-top: 22px;
    margin-bottom: 13px;
    display: flex;
    flex-direction: column;
    justify-content: ${({registers}) => registers ? 'end' : 'center'};
    align-items: center;
    padding-bottom: 40px;
    overflow-y: auto;
    box-sizing: border-box;
    position: relative;
`

const NoRegisters = styled.div`
    font-family: 'Raleway';
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    text-align: center;
    color: #868686;
    margin: 60px;
`

const BalanceContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: calc(100%-24px);
    position: absolute;
    left: 12px;
    right: 12px;
    bottom: 10px;
    box-sizing: border-box;
`

const BalanceTitle = styled.div`
    font-family: 'Raleway';
    font-style: normal;
    font-weight: bold;
    font-size: 17px;
    color: #000000;
`

const BalanceValue = styled.div`
    font-family: 'Raleway';
    font-style: normal;
    font-weight: normal;
    font-size: 17px;
    color: ${({isPositive})=> isPositive ? '#03AC00': '#C70000'};
`

const RegisterContainer = () => {
    const { user, prevRegister } = useContext(UserContext)
    const [balance, setBalance] = useState(0)
    const [registers, setRegisters] = useState([...prevRegister])
    const history = useHistory()
    
    
    useEffect(() => {

        getRegisters(user.token).then(res => {
            const list = res.data.rows.map(a => {
                a.value = Number(a.value)
                return a
            })
            
            setRegisters(list)
            
        }).catch(res => {
            const status = res.response.status
            if (status === 405) return history.push('/login-in')
        })
    }, [])

    useEffect(() => {
        let sum = 0
        registers.map(a => {
            sum += a.isIncome ? Number(a.value) : -Number(a.value)
        })
        
        setBalance(sum)

        return () => setBalance(0)
    }, [registers])


    const formatBalance = balance => {
        if (Number(balance) < 0) return (-balance).toFixed(2)
        return balance.toFixed(2)
    }

    return (
        <Container registers={registers}>
            {registers.length > 0 ?
                registers.map((item, index) => <Register
                    key={index}
                    date={item.date}
                    description={item.description}
                    value={item.value}
                    isIncome={item.isIncome}
                    />) :
                <NoRegisters>Não há registros de
                entrada ou saída</NoRegisters>}
            <BalanceContainer>
                <BalanceTitle>SALDO</BalanceTitle>
                <BalanceValue isPositive={balance >= 0}>{formatBalance(balance)}</BalanceValue>
            </BalanceContainer>
        </Container>
    )
}

export default RegisterContainer