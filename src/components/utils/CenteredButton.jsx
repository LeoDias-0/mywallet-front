import styled from 'styled-components'
import { Link } from 'react-router-dom'

const ContainerButton = styled(Link)`
    height: 46px;
    background-color: #A328D6;
    border-radius: 5px;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    color: #FFFFFF;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    outline: none;
    border-width: 0;
    margin-top: calc(13px/2);
    text-decoration: none;
`

export default ({ text, to }) => {
    return (
        <ContainerButton to={to}>
            {text}
        </ContainerButton>
    )
}