import styled from 'styled-components'
import Register from './Register'

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

    const balance = '523.47'

    const registers = [
        {date: '15/02', description: 'blabla alsad', value: '52.48', isIncome: true},
        {date: '30/02', description: 'outra descrição', value: '102.48', isIncome: false}
    ]

    return (
        <Container registers={registers} >
            {registers ?
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