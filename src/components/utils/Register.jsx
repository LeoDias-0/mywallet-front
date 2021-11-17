import styled from 'styled-components'

const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: left;
    width: 100%;
    padding-top: 23px;
    padding-left: 12px;
    padding-right: 12px;
    box-sizing: border-box;
`

const DateContainer = styled.div`
    font-family: 'Raleway';
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    color: #C6C6C6;
    margin-right: 10px;
`

const DescriptionContainer = styled.div`
    font-family: 'Raleway';
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    color: #000000;
`

const ValueContainer = styled.div`
    font-family: 'Raleway';
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    color: ${({isIncome}) => isIncome ? '#03AC00' : '#C70000'};
    position: absolute;
    right: 12px;
`

const Register = ({ date, description, value, isIncome }) => {
    return (
        <Container>
            <DateContainer>
                {date}
            </DateContainer>
            <DescriptionContainer>
                {description}
            </DescriptionContainer>
            <ValueContainer isIncome={isIncome}>
                {value.toFixed(2)}
            </ValueContainer>
        </Container>
    )
}

export default Register