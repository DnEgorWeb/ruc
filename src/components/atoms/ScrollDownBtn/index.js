import React from 'react'
import styled from 'styled-components'

import BREAKS from '@constants/breakpoints'

const ScrollDown = styled.button`
    background: url('${require('./images/arrow.svg')}') center no-repeat;
    border: 0;
    cursor: pointer;
    display: none;

    margin-top: 130px;

    height: 40px;
    width: 23px;

    transition: transform .15s cubic-bezier(0, .2, .8, 1);

    &:hover{ transform: translateY(5px); }
    &:active{ transform: translateY(7px); }
    
    @media (min-width: ${BREAKS.SM}px) {
        display: block;
    }
`

export default ScrollDown
