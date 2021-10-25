import styled from 'styled-components'
import { Link } from 'react-router-dom'

const ContainerButton = styled(Link)`
    font-family: 'Raleway';
    font-style: normal;
    font-weight: bold;
    font-size: 15px;
    color: #FFFFFF;
    background-color: #8C11BE;
    outline: none;
    border-width: 0;
    margin-top: 34px;
    text-decoration: none;
`

export default ({ text, to }) => {
    return (
        <ContainerButton to={to}>
            {text}
        </ContainerButton>
    )
}