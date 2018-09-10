import React from 'react'
import styled from 'styled-components'

const Label = styled.span`
    color: #74be21;
    display: block;

    font-size: 14px;
    line-height: 1.93;
    min-height: 1.93em;
`

const Input = styled.input`
    background: transparent;
    border: 0;
    border-bottom: solid 1px #949494;
    color: #454444;

    font-size: 16px;

    height: 38px;
    width: 100%;

    transition: all .15s ease;

    ::placeholder{
        color: #949494;
    }

    &:focus{
        border-bottom-color: #74be21;
        border-bottom-width: 2px;
        outline: none;
    }
    
    &:disabled, &[disabled]{
        opacity: .65;
        pointer-events: none;
    }
`

const Wrapper = styled(({label = ' ', className, style, ...p}) => (
    <label {...{className, style}}>
        <Label>{label}</Label>
        <Input {...p} />
    </label>
))`
    //
`

export default Wrapper
