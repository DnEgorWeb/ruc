import React from 'react'
import styled from 'styled-components'

import BREAKS from '@constants/breakpoints'

import {
    Section,
    Container,
    SectionTitle,
} from '@components'

const SectionRucardNumbers = styled(Section)`
    background: #ffffff;
    display: flex;

    ${Container} {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        flex: 1;
    }
    
    ${SectionTitle} {
        color: #949494;

        @media (min-width: ${BREAKS.XS}px) {
            margin-bottom: 1rem;
        }

        @media (min-width: ${BREAKS.SM}px) {
            margin-bottom: 80px;
        }
    }
`

const Numbers = styled.ul`
    margin: 0;
    padding: 0;

    > li {
        display: block;
        margin-bottom: 2rem;

        strong{
            color: #74be21;
            display: block;
            font-size: 40px;
            font-weight: 300;

            small{ font-size: 20px; }
        }

        p{
            color: #454444;
            font-size: 13px;
            line-height: 1.63;
        }
    }
    
    @media (min-width: ${BREAKS.SM}px) {
        display: flex;
        flex-wrap: wrap;
        margin: 0 -50px;

        > li {
            flex: 1 1 33.3334%;
            margin: 0 50px 80px;

            strong{
                font-size: 60px;
                margin-bottom: 1rem;

                small{ font-size: 33px; }
            }

            p{ font-size: 14px; }
        }
    }

    @media (min-width: ${BREAKS.MD}px) {
        margin: 0 -25px;
        flex-wrap: nowrap;

        > li {
            flex: 1 1 calc(25% - 50px);
            margin: 0 25px;

            strong{
                font-size: 88px;

                small{ font-size: 53px; }
            }

            p{ font-size: 16px; }
        }
    }
`

const Dates = styled.ul`
    margin: 0;
    padding: 0;

    > li {
        display: flex;
        align-items: flex-start;
        flex: 1 1 0;
        margin-bottom: 2rem;

        strong {
            background: #267cb6;
            border-radius: 60px;
            color: #ffffff;
            display: block;
            font-size: 13px;
            font-weight: 300;
            text-align: center;

            line-height: 60px;
            min-width: 60px;
            max-width: 60px;
        }

        p {
            color: #454444;
            font-size: 13px;
            line-height: 1.54;

            margin-left: 1rem;
        }
    }

    @media (min-width: ${BREAKS.SM}px) {
        > li {
            align-items: center;

            strong {
                border-radius: 130px;
                font-size: 31px;

                line-height: 130px;
                min-width: 130px;
                max-width: 130px;
            }

            p {
                font-size: 14px;
                margin-left: 40px;
                line-height: 1.71;
            }
        }
    }

    @media (min-width: ${BREAKS.MD}px) {
        display: flex;
        margin: 0 -50px;

        > li {
            margin: 0 50px 0;

            strong {
                border-radius: 160px;
                font-size: 40px;

                line-height: 160px;
                min-width: 160px;
                max-width: 160px;
            }

            p {
                font-size: 16px;
                line-height: 1.88;
            }
        }
    }
`

export default () => (
    <SectionRucardNumbers id="scrollToView">
        <SectionTitle number="1">&laquo;Рукард&raquo; в цифрах</SectionTitle>

        <Numbers>
            <li>
                <strong>200</strong>
                <p>&laquo;Рукард&raquo; — стратегический партнер более чем 200 банков</p>
            </li>
            <li>
                <strong>2 <small>млн.</small></strong>
                <p>Процессинговый центр &laquo;Рукард&raquo; обслуживает более 2 миллионов локальных и международных карт</p>
            </li>
            <li>
                <strong>4 500</strong>
                <p>Установлено и обслуживается более 4,5 тыс. банкоматов</p>
            </li>
            <li>
                <strong>15 500</strong>
                <p>Установлено и обслуживается свыше 15,5 тыс. POS–терминалов</p>
            </li>
        </Numbers>

        <Dates>
            <li>
                <strong>2004</strong>
                <p>С 2004 года «Рукард»  выступает в роли системного интегратора по внедрению автоматизированных банковских систем и систем банковского самообслуживания</p>
            </li>
            <li>
                <strong>2012</strong>
                <p>В 2012 году «Рукард» выигран государственный тендер и заключен контракт по проведению исследований и разработке материалов в проекте межгосударственной целевой программы в части, касающейся российского сегмента</p>
            </li>
        </Dates>
    </SectionRucardNumbers>
)
