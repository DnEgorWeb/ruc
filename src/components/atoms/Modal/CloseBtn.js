import React from 'react'
import styled from 'styled-components'

const CloseBtn = styled.button`
    background: url(${require('./images/close.svg')}) center no-repeat;
    background-size: 20px;
    border-radius: 4px;
    border: 0;
    cursor: pointer;
    
    margin: -5px;

    height: 30px;
    width: 30px;

    transition: background-color .15s ease,
                box-shadow .15s ease;

    &:hover{
        background-color: rgba(0, 0, 0, .05);
        
    }

    @supports(mask: url()) {
        background: #949494;

        mask: url(${require('./images/close.svg')}) center no-repeat;
        mask-size: 20px;
        
        &:hover{
            background: #555555;
        }
    }

    &:focus{
        outline: 1px;
    }

    &:active{
        box-shadow: inset 0 0 0 1px rgba(0, 0, 0, .1);
        transform: scale(.95);
    }
`

export default CloseBtn
