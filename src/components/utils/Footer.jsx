import styled from 'styled-components'
import ButtonNewEntry from './ButtonNewEntry'

const Container = styled.div`
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
`

export default () => {
    return (
        <Container>
            <ButtonNewEntry isIncome />
            <ButtonNewEntry />
        </Container>
    )
}