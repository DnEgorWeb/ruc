import React from 'react'
import styled, {css} from 'styled-components'

import BREAKS from '@constants/breakpoints'

import {
    Button,
    Section,
    Container,
    SectionTitle,
} from '@components'

const Solutions = styled.ul`
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    margin: 0;

    > li {
        display: flex;
        align-items: center;
        flex: 0 0 100%;
        margin: 15px 0;

        p{
            color: #454444;
            font-size: 13px;
            line-height: 1.15;
        }
    }

    @media (min-width: ${BREAKS.SM}px) {
        > li {
            flex: 0 0 50%;
            margin: 30px 0;

            p {
                font-size: 16px;
                line-height: 1.19;
            }
        }
    }

    @media (min-width: ${BREAKS.MD}px) {
        > li {
            flex: 0 0 33.3334%;
            margin: 50px 0;

            p {
                font-size: 18px;
                line-height: 1.17;
            }
        }
    }
`

Solutions.Icon = styled.div`
    ${p => p.icon && css`
        background: url('${p => p.icon}') center no-repeat;
        display: block;

        margin-right: 30px;
        height: 40px;
        min-width: 40px;
        max-width: 40px;

        @media (min-width: ${BREAKS.SM}px) {
            margin-right: 34px;
            height: 54px;
            min-width: 54px;
            max-width: 54px;
        }

        @media (min-width: ${BREAKS.MD}px) {
            margin-right: 64px;
            height: 64px;
            min-width: 64px;
            max-width: 64px;
        }
    `};
`

const SectionSolutions = styled(Section)`
    background: #ffffff;

    ${SectionTitle} {
        color: #949494;

        @media (min-width: ${BREAKS.SM}px) {
            margin-bottom: 70px;
        }

        @media (min-width: ${BREAKS.MD}px) {
            margin-bottom: 160px;
        }
    }
`


export default () => (
    <SectionSolutions>
        <SectionTitle number="4">Возможности решения</SectionTitle>

        <Solutions>
            <li>
                <Solutions.Icon icon={require('./images/solutions/cards.svg')} />
                <p>Процессинг банковских карт</p>
            </li>
            <li>
                <Solutions.Icon icon={require('./images/solutions/cash.svg')} />
                <p>Денежные переводы</p>
            </li>
            <li>
                <Solutions.Icon icon={require('./images/solutions/storage.svg')} />
                <p>Программное обеспечение</p>
            </li>

            <li>
                <Solutions.Icon icon={require('./images/solutions/cart.svg')} />
                <p>Программы лояльности</p>
            </li>
            <li>
                <Solutions.Icon icon={require('./images/solutions/smartphone.svg')} />
                <p>Мобильные платежи</p>
            </li>
            <li>
                <Solutions.Icon icon={require('./images/solutions/shop.svg')} />
                <p>Эквайринг</p>
            </li>

            <li>
                <Solutions.Icon icon={require('./images/solutions/laptop.svg')} />
                <p>Интернет-эквайринг</p>
            </li>
            <li>
                <Solutions.Icon icon={require('./images/solutions/cashbox.svg')} />
                <p>Приёмы платежей</p>
            </li>
            <li>
                <Solutions.Icon icon={require('./images/solutions/terminal.svg')} />
                <p>Устройства самообслуживания</p>
            </li>

            <li>
                <Solutions.Icon icon={require('./images/solutions/box.svg')} />
                <p>Сервисы Рукард</p>
            </li>
        </Solutions>
    </SectionSolutions>
)
