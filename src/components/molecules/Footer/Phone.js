import React from 'react'
import styled from 'styled-components'

import BREAKS from '@constants/breakpoints'

const Phone = styled(({children, ...p}) => (
    <div {...p}>
        <div>{children}</div>
    </div>
))`
    display: flex;
    align-items: flex-start;
    line-height: 1.15;

    &::before {
        background: url('${require('./images/phone.svg')}') center no-repeat;
        content: '';
        display: block;

        margin-right: 1rem;

        height: 33px;
        flex: 0 0 33px;
    }

    a{
        color: #74be21;
        text-decoration: none;

        font-size: 13px;
        font-weight: 500;

        &:hover{
            text-decoration: underline;
        }
    }

    span{
        color: #949494;
        font-size: 13px;
    }

    @media (min-width: ${BREAKS.SM}px) {
        align-items: center;
        line-height: 1.14;

        flex: 0 0 33.3334%;

        a, span {
            font-size: 14px;
        }
    }

    @media (min-width: ${BREAKS.MD}px) {
        flex: 1 0 auto;
        line-height: 1.19;

        a, span {
            font-size: 18px;
        }
    }
`

export default Phone
