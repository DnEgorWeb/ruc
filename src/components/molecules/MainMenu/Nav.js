import React from 'react'
import styled from 'styled-components'

import BREAKS from '@constants/breakpoints'

const Nav = styled.ul`
    padding: 0;
    margin: 0;

    li {
        color: #65b444;
        display: block;

        font-size: 14px;
        font-weight: 500;
        line-height: 1.14;

        margin-bottom: 1em;

        a {
            color: currentColor;
            text-decoration: none;
            display: inline-block;

            &::after {
                background: currentColor;
                content: '';
                display: block;

                margin: 0 auto;

                height: 2px;
                width: 0;

                transition: width .15s ease;
            }

            &:hover, &.active {
                &::after {
                    width: 100%;
                }
            }

            &:active{
                transform: translateY(1px);
            }
        }
    }
    @media (min-width: ${BREAKS.LG}px) {
        li {
            font-size: 40px;
        }
    }
    @media (min-width: ${BREAKS.MD}px) {
        li {
            font-size: 36px;
            line-height: 1.75
        }
    }
    @media (min-width: ${BREAKS.SM}px) {
        li {
            font-size: 28px;
            line-height: 1.18;
        }
    }
`

export default Nav
