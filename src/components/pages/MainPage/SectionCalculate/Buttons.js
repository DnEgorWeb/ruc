import React from 'react'
import styled, {css} from 'styled-components'

import BREAKS from '@constants/breakpoints'

import Button from '@components/atoms/Button'

const Buttons = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-top: 20px;

    @media (min-width: ${BREAKS.SM}px) {
        margin-top: 0;

        ${Button} {
            padding: 0 50px;
        }
    }
`

Buttons.Prev = styled(({children, arrowed, ...p}) => <Button {...p}>{children}</Button>)`
    color: #3bacf0;

    @media (max-width: ${BREAKS.SM - 1}px) {
        ${p => p.arrowed && css`
            background: url('${require('../images/button-arrow.svg')}') center no-repeat;
            background-size: 16px;
            text-indent: -900px;
            overflow: hidden;
            padding: 0;
            min-width: 40px;
            max-width: 40px;
    
            transform: rotateZ(180deg);
        `}
    }
`

Buttons.Next = styled(({children, arrowed, ...p}) => <Button {...p}>{children}</Button>)`
    @media (max-width: ${BREAKS.SM - 1}px) {
        padding: 0 20px;

        ${p => p.arrowed && css`
            background: url('${require('../images/button-arrow.svg')}') center no-repeat;
            background-size: 16px;
            text-indent: -900px;
            overflow: hidden;
            padding: 0;
            min-width: 40px;
            max-width: 40px;
        `}
    }
`
export default Buttons
