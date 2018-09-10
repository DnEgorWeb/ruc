import React from 'react'
import styled, {css} from 'styled-components'
import {Link} from 'react-router-dom'

import BREAKS from '@constants/breakpoints'

const Button = styled(({children, filled, ...p}) => <button {...p}>{children}</button>)`
    background: transparent;
    border-radius: 40px;
    border: 0;
    cursor: pointer;
    display: inline-block;

    font-family: Roboto, sans-serif;
    font-size: 12px;
    font-weight: bold;
    font-variant: small-caps;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    line-height: 40px;

    padding: 0 30px;

    vertical-align: middle;

    transition: all .3s ease;

    ${p => p.filled ? css`
        background-color: #74be21;
        box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.15);
        color: #ffffff;
    ` : css`
        box-shadow: inset 0 0 0 2px currentColor;
        color: #7ad513;

        &:hover {
            box-shadow: inset 0 0 0 1px currentColor;
        }
    `}

    &:active {
        transform: translateY(2px);
    }

    @media (min-width: ${BREAKS.SM}px) {
        font-size: 14px;
    }

    @media (min-width: ${BREAKS.MD}px) {
        line-height: 60px;
    }
`

Button.Link = Button.withComponent(({children, filled, ...p}) => <Link {...p}>{children}</Link>)
Button.A = Button.withComponent(({children, filled, ...p}) => <a {...p}>{children}</a>)

export default Button
