import React from 'react'
import styled from 'styled-components'

const CloseBtn = styled.div`
    display: inline-block;
    vertical-align: middle;
    position: relative;
    cursor: pointer;

    height: 20px;
    width: 20px;

    &::before, &::after{
        background: #1b426c;
        content: '';
        display: block;

        height: 2px;
        width: 20px;

        position: absolute;
        left: 50%;
        top: 50%;

        transform-origin: center center;
        transition: transform .15s ease;
    }

    &::before{
        transform: translate3d(-50%, -50%, 0) rotateZ(-45deg);
    }

    &::after{
        transform: translate3d(-50%, -50%, 0) rotateZ(45deg);
    }

    &:hover{
        &::before{ transform: translate3d(-50%, -50%, 0) rotateZ(-40deg); }
        &::after{ transform: translate3d(-50%, -50%, 0) rotateZ(40deg); }
    }

    &:active{
        transform: translateY(1px);

        &::before{ transform: translate3d(-50%, -50%, 0) rotateZ(-35deg); }
        &::after{ transform: translate3d(-50%, -50%, 0) rotateZ(35deg); }
    }
`

export default CloseBtn
