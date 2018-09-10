import React from 'react'
import styled from 'styled-components'

const MenuBtn = styled.button`
    background: url(${require('./images/menu.svg')}) center no-repeat;
    
    @supports(mask: url()) {
        background: currentColor;
        mask: url(${require('./images/menu.svg')}) center no-repeat;
        
        transition: color .15s ease;
        
        &:hover{
            color: #74be21;
        }
    }
    
    border: 0;
    cursor: pointer;
    display: inline-block;
    vertical-align: middle;
    
    height: 24px;
    width: 24px;
    
    &:active{
        transform: translateY(1px);
    }
`

export default MenuBtn
