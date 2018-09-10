import React from 'react'
import styled from 'styled-components'

import BREAKS from '@constants/breakpoints'

const Address = styled(({children, ...p}) => (
    <a href="https://goo.gl/maps/Liutuyho5YB2" target="_blank" {...p}>
        <div>{children}</div>
    </a>
))`
    color: #707070;
    display: flex;
    align-items: flex-start;
    text-decoration: none;

    font-size: 13px;
    line-height: 1.54;

    &:hover{
        text-decoration: underline;
    }

    &::before {
        background: url('${require('./images/map.svg')}') center no-repeat;
        content: '';
        display: block;

        margin-right: 1rem;

        height: 33px;
        flex: 0 0 33px;
    }

    @media (min-width: ${BREAKS.SM}px) {
        flex: 0 0 33.3334%;

        align-items: center;
        font-size: 14px;
        line-height: 1.71;
    }

    @media (min-width: ${BREAKS.MD}px) {
        flex: 1 0 auto;

        font-size: 16px;
        line-height: 1.88;
    }
`

export default Address
