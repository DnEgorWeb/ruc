import React from 'react'
import styled from 'styled-components'

import BREAKS from '@constants/breakpoints'

const Mail = styled.div`
    display: flex;
    align-items: center;

    &::before {
        background: url('${require('./images/envelope.svg')}') center no-repeat;
        content: '';
        display: block;

        margin-right: 1rem;

        height: 33px;
        flex: 0 0 33px;
    }

    a{
        color: #74be21;
        text-decoration: underline;
        font-size: 13px;

        &:hover{
            text-decoration: none;
        }
    }

    @media (min-width: ${BREAKS.SM}px) {
        flex: 0 0 33.3334%;

        a { font-size: 14px; }
    }

    @media (min-width: ${BREAKS.MD}px) {
        flex: 1 0 auto;

        a { font-size: 16px; }
    }
`

export default Mail
