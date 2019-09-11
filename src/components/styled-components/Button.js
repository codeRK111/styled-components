import styled from "styled-components"
export default styled.button`
    min-width: ${props => props.mw ? props.mw : '100%'};
    padding: ${props => props.padding? props.padding: 0};
    color: white;
    border: none;
    background-color: ${props => props.type === "primary" ? "green" : props.type === "secondary" && "red"};
`