import styled from 'styled-components'
import InfoInput from '../utils/InfoInput'
import CenteredButton from '../utils/CenteredButton'

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
    return (
        <Container>
            <ContainerTitle>Nova saída</ContainerTitle>
            <InfoInput placeholder={'Valor'}/>
            <InfoInput placeholder={'Descrição'}/>
            <CenteredButton text={'Salvar saída'} to={'/'}/>
        </Container>
    )
}