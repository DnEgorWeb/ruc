import React from 'react'
import styled from 'styled-components'

import BREAKS from '@constants/breakpoints'

import Container from '@components/atoms/Container'
import Phone from './Phone'
import Mail from './Mail'
import Address from './Address'

const Copy = styled.p`
    border-top: 1px solid rgba(0, 0, 0, .1);
    color: #949494;
    margin: 0 -1rem;
    padding: 1rem;

    font-size: 13px;
    line-height: 1.54;

    order: 1;

    @media (min-width: ${BREAKS.SM}px) {
        font-size: 14px;
        line-height: 1.71;
        text-align: center;

        flex: 1 0 auto;
    }

    @media (min-width: ${BREAKS.MD}px) {
        border-top: 0;
        margin: 0;
        padding: 0;
        font-size: 16px;
        line-height: 1.88;
        text-align: left;

        order: unset;
    }
`

const Footer = styled.footer`
    background: #ffffff;
    display: block;
    box-shadow: 0 -8px 16px 0 rgba(0, 0, 0, .1);

    ${Container} {
        display: flex;
        flex-direction: column;
        align-items: stretch;

        > * {
            margin-top: 1rem;
        }
    }

    @media (min-width: ${BREAKS.SM}px) {
        ${Container} {
            flex-direction: row;
            flex-wrap: wrap;
        }
    }

    @media (min-width: ${BREAKS.MD}px) {
        ${Container} {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
    
            height: 228px;

            > * {
                margin-top: 0;
            }
        }
    }
`

export default () => (
    <Footer>
        <Container>
            <Copy>&copy; 2002–2018<br /> Процессинговая компания &laquo;Рукард&raquo;</Copy>

            <Phone>
                <p><a href="tel:+74957370680">+7 495 737-06-80</a></p>
                <p><span>пн-пт с 9:00 до 18:00</span></p>
            </Phone>

            <Mail>
                <a href="mailto:info@rucard.net">info@rucard.net</a>
            </Mail>

            <Address>
                <p>г. Москва, 123557,</p>
                <p>Электрический переулок,  д. 3/10, стр. 1</p>
            </Address>
        </Container>
    </Footer>
)
