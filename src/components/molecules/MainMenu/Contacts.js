import React from 'react'
import styled from 'styled-components'

import BREAKS from '@constants/breakpoints'

const Contacts = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    font-size: 13px;
    line-height: 1.85;

    @media (min-width: ${BREAKS.SM}px) {
        font-size: 14px;
        line-height: 1.71;
    }
`

Contacts.Address = styled.div`
    position: relative;
    display: none;

    span{
        color: #74be21;

        position: absolute;
        top: 5px;
        left: -150px;
    }

    strong{
        display: block;
        color: #454444;

        font-size: 26px;
        font-weight: 500;
        line-height: 0.92;
    }

    a{
        color: currentColor;
        text-decoration: none;

        &:hover{
            text-decoration: underline;
        }
    }

    @media (min-width: ${BREAKS.SM}px) {
        display: block;
        margin-top: 30px;

        strong{ margin-bottom: 30px; }
    }

    @media (min-width: ${BREAKS.MD}px) {
        margin-top: 0;

        strong{ margin-bottom: 60px; }
    }
`

Contacts.List = styled.div`
    margin-top: 20px;

    span{
        display: none;
        color: #74be21;
        margin-bottom: 5px;
    }

    ul{
        padding: 0;
        margin: 0;

        li{
            display: inline-block;
            vertical-align: middle;
            margin-right: 20px;

            a{
                color: #3bacf0;
                text-decoration: none;

                &:hover{
                    text-decoration: underline;
                }
            }
        }
    }

    @media (min-width: ${BREAKS.SM}px) {
        span{
            display: block;
        }

        li {
            margin-right: 40px;
        }
    }

    @media (min-width: ${BREAKS.MD}px) {
        span{
            margin-bottom: 20px;
        }
    }
`

export default Contacts
