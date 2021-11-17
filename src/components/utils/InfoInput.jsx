import styled from 'styled-components'

const ContainerInput = styled.input`
    background-color: #FFFFFF;
    border-radius: 5px;
    display: inline;
    width: 100%;
    height: 58px;
    margin: calc(13px/2) 0;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    color: #000000;
    padding-left: 15px;
    box-sizing: border-box;
    border-width: 0;

    &:focus {
        outline: none;
    }
`



export default ({ value, placeholder, onChange }) => {
    return (
        <ContainerInput
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            />
    )
}