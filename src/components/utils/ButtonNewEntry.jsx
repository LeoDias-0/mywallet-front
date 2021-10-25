import styled from 'styled-components'
import { FiMinusCircle } from 'react-icons/fi'
import { IoIosAddCircleOutline } from 'react-icons/io'
import { Link } from 'react-router-dom'

const Container = styled(Link)`
    width: 135px;
    height: 114px;
    background: #A328D6;
    border-radius: 5px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px;
    color: #FFFFFF;
    text-decoration: none;
`

const IconContainer = styled.div`
    color: #FFFFFF;
`

const TextContainer = styled.div`
    width: 50%;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: bold;
    font-size: 17px;
    color: #FFFFFF;
`

export default ({ isIncome }) => {
    return (
        <Container to={isIncome ? '/new-income' : '/new-outcome'}>
            <IconContainer>
                {isIncome ?
                    <IoIosAddCircleOutline size={22} /> : <FiMinusCircle size={22} />}
            </IconContainer>
            <TextContainer>
                {isIncome ? 'Nova entrada' : 'Nova saída'}
            </TextContainer>
        </Container>
    )
}