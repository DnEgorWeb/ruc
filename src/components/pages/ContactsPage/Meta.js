import React from 'react'
import styled from 'styled-components'

import BREAKS from '@constants/breakpoints'

const Meta = styled.div`
    > h4 {
        font-size: 18px;
        font-weight: 500;
        color: #454444;
        margin-bottom: 12px;
    }

    > span {
        color: #74be21;
        display: block;
        font-size: 13px;
        margin-bottom: 30px;
    }

    > div {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        font-size: 14px;
        color: #454444;

        p {
            margin: .5rem 0;
        }

        a {
            color: currentColor;
            text-align: right;
            text-decoration: none;

            &:first-child {
                text-align: left;
            }

            &:hover{
                text-decoration: underline;
            }
        }
    }

    @media (min-width: ${BREAKS.SM}px) {
        > span {
            font-size: 14px;
        }
    }

    @media (min-width: ${BREAKS.MD}px) {
        > h4 {
            font-size: 26px;
        }

        > div {
            flex-direction: row;
            justify-content: space-between;
            margin-top: 55px;

            p {
                flex: 1;
                margin: 0;
                text-align: right;

                :first-child {
                    text-align: left;
                }
            }
        }
    }
`

export default Meta
