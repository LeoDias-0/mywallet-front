import styled from 'styled-components'
import { RiLogoutBoxRLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'

const ContainerTopBar = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    color: #FFFFFF;
`

const ContainerUserName = styled.div`
    font-family: 'Raleway';
    font-style: normal;
    font-weight: bold;
    font-size: 26px;
    color: #FFFFFF;
`


export default ({ userName }) => {
    return (
        <ContainerTopBar>
            <ContainerUserName>
                Olá, {userName}
            </ContainerUserName>
            <Link to='/login-in' style={{color: '#FFFFFF'}}>
                <RiLogoutBoxRLine size={24}/>
            </Link>
        </ContainerTopBar>
    )
}