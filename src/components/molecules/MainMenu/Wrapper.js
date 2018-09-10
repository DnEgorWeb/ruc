import React from 'react'
import styled, {css} from 'styled-components'

import BREAKS from '@constants/breakpoints'

import Container from '@components/atoms/Container'
import Nav from './Nav'

const Wrapper = styled.div`
    overflow: hidden; // TODO

    height: 100vh;
    width: 100%;

    position: absolute;
    left: 0;
    top: 0;
    z-index: 9;

    transition: transform .3s ease,
                opacity .1s ease;

    transform: translate3d(0, -100%, 0);
    opacity: .5;
    pointer-events: none;

    ${p => p.active && css`
        transform: translate3d(0, 0, 0);
        opacity: 1;
        pointer-events: auto;
    `}

    ${Container} {
        &:first-child {
            background: #ffffff;
            padding-top: 18px;
            padding-bottom: 18px;
        }
        
        &:last-child {
            background: #ffffff;
            border-radius: 3px;
            display: block;
            padding-top: 1rem;
            padding-bottom: 1rem;
            margin: .5rem;
            width: auto;
        }
    }


    @media (min-width: ${BREAKS.SM}px) {
        ${Container} {
            &:first-child {
                padding-top: 28px;
                padding-bottom: 28px;
            }
        }
    }

    @media (min-width: ${BREAKS.MD}px) {
        background: #ffffff;
        padding: 45px 0;
        overflow-y: auto;

        ${Container} {
            &:first-child {
                padding-top: 0;
                padding-bottom: 0;  
                margin-bottom: 100px;
            }

            &:last-child {
                border-radius: 0;
                background: transparent;
                display: flex;
                padding-top: 0;
                padding-bottom: 0;
                margin: 0 auto;
                width: 100%;
            }
        }

        ${Nav} {
            margin-left: 135px;
        }
    }
    
`

export default Wrapper
