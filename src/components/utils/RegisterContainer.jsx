import { useEffect, useState, useContext, useCallback } from 'react'
import styled from 'styled-components'
import Register from './Register'
import { getRegisters } from '../../services/services'
import UserContext from '../contexts/UserContext'
import { useHistory } from 'react-router'

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
    color: #03AC00;
`

export default () => {
    const [balance, setBalance] = useState(0)
    const [registers, setRegisters] = useState([])
    const history = useHistory()

    const { user } = useContext(UserContext)

    useEffect(() => {
        getRegisters(user.token).then(res => {

            let sum = 0
            res.data.rows.map(a => sum += Number(a))
            setBalance(sum.toFixed(2))
            setRegisters(res.data.rows.map(a => Number(a).toFixed(2)))
        }).catch(res => {
            console.log(res)
        })
    }, [registers])


    return (
        <Container registers={registers} >
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
                <BalanceValue>{balance}</BalanceValue>
            </BalanceContainer>
        </Container>
    )
}