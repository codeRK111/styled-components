import styled from "styled-components"
export default styled.div`
    display : flex;
    justify-content: ${props => props.jc};
    align-items: ${props => props.at};
    min-width: ${props => props.mw ? props.mw : '100%'};
    margin: ${props => props.margin ? props.margin : 0};
    flex-direction:  ${props => props.direction ? props.direction : 'row'}
`