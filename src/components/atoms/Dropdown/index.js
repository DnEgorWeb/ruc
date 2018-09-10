import React from 'react'
import styled from 'styled-components'
import BREAKS from '@constants/breakpoints'

const Dropdown = styled(({children, ...props}) => (
    <label {...props}>
        <input type="text" placeholder={children} />
    </label>
))`
    position: relative;
    display: block;
    border-bottom: solid 2px #949494;
    margin-bottom: 3px;
    padding-right: 40px;
    width: 100%;
    cursor: pointer;
    
    :after {
        content: '';
        display: inline-block;
        background: url("${require('./images/icon-down.svg')}") center no-repeat;
        
        background-size: contain;
        width: 20px;
        height: 48px;
        
        position: absolute;
        top: 0;
        right: 0;
        
        transition: all .3s ease;
    }
    
    :hover {
        :after {
            transform: translateY(2px);
        }
    }
       
    input {
        outline: none;
        border: none;
        
        font-size: 14px;
        line-height: 48px;
        
        ::placeholder {
            color: #949494;
        }
    }
    
    @media (min-width: ${BREAKS.SM}px) {
        display: inline-block;
        width: 220px;
        
        & + & {
            margin-left: 30px;
        }
    }
    
    @media (min-width: ${BREAKS.MD}px) {
        width: 200px;
        & + & {
            margin-left: 60px;
        }
    }
`

export default Dropdown
