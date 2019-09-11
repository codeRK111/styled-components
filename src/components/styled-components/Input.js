import styled from "styled-components"
export default styled.input.attrs(props => ({
    type: props.type ? props.type : 'text',
    placeholder: props.placeholder
}))`
    padding: 1rem;
    border-radius: 10px;
    border: 1px solid #ccc;
`