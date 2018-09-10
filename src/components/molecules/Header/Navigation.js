import React from 'react'
import styled from 'styled-components'

import BREAKS from '@constants/breakpoints'

const Navigation = styled.ul`
    li {
        display: inline-block;
        vertical-align: middle;

        font-size: 14px;
        font-weight: 500;
        line-height: 1.17;

        & + li{ margin-left: 20px; }

        a{
            color: #454444;
            text-decoration: none;

            &:hover{
                text-decoration: underline;
            }

            &.active {
                color: #74be21;
            }
        }
    }

    @media (min-width: ${BREAKS.MD}px) {
        li {
            font-size: 18px;

            & + li{ margin-left: 3rem; }
        }
    }
`

export default Navigation
