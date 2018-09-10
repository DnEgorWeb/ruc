import React from 'react'
import styled, {css} from 'styled-components'

import BREAKS from '@constants/breakpoints'

/**
 * Заголовок секции
 * number - номер секции
 */
const SectionTitle = styled(({children, number, ...p}) => <h3 {...p}><span>{children}</span></h3>)`
    color: #ffffff;

    font-family: Roboto, sans-serif;
    font-size: 19px;
    font-weight: 500;
    font-style: normal;
    line-height: 1.18;

    width: 100%;

    @media (min-width: ${BREAKS.SM}px) {
        font-size: 24px;
    }

    @media (min-width: ${BREAKS.MD}px) {
        font-size: 40px;
    }

    
    ${p => p.number && css`
        @media (min-width: ${BREAKS.SM}px) {
            position: relative;
            padding-right: 70px;

            span {
                display: block;
                max-width: 67%;
            }

            &::before, &::after {
                display: block;

                position: absolute;
                right: 0;
            }

            &::before {
                background: currentColor;
                border-radius: 3px;
                content: '';

                width: 70px;
                height: 3px;

                top: 50%;
                margin-top: -.25em;
            }

            &::after {
                content: '${p => (p.number + '').padStart(2, '0')}';
                color: currentColor;
                font-size: 14px;
                text-align: right;

                top: 50%;
                margin-top: .25em;
            }
        }
    `}
`

export default SectionTitle
