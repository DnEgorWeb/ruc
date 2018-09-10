import React from 'react'
import styled from 'styled-components'
import BREAKS from '@constants/breakpoints'

import SpecialSection from './SpecialSection'
import SectionTitle from '@components/atoms/SectionTitle'
import Description from '@components/atoms/Description'

const Wrapper = styled(SpecialSection)`
    ul {
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        font-size: 13px;
    }

    li {
        display: flex;
        position: relative;
        align-items: flex-start;
        line-height: 1.7;
        margin: 10px 0 20px 70px;

        :before {
            content: '';
            background: url(${require('../LoyaltyPage/images/znak.svg')}) no-repeat center;
            width: 36px;
            height: 36px;

            position: absolute;
            left: -70px;
            top: 0;
        }
    }
    
    @media (min-width: ${BREAKS.SM}px) {
        ul {
            flex-direction: row;
            font-size: 14px;
        }
        
        li {
            flex: 0 0 calc(50% - 100px);
            margin: 10px 30px 40px 70px;
        }
    }
    
    @media (min-width: ${BREAKS.MD}px) {
        li {
            max-width: calc(33.3334% - 100px);
            flex: 0 0 calc(33.3334% - 100px);
            margin: 30px 30px 50px 70px;
        }
    }
`

function SectionTransactions(p) {
    return (
        <Wrapper type="grey" data-type="grey" {...p}>
            <SectionTitle number="3" id="moneyTransfer">Денежные переводы</SectionTitle>
            <Description>
                <p>
                    Процессинговая компания Рукард предлагает услуги по подключению и техническому
                    сопровождению работы пунктов банков в системе денежных переводов MoneyGram
                </p>
            </Description>
            <ul>
                <li>
                    Организация работы с ответственным
                    сотрудником банка по подключению
                    подразделений банка к системам
                    денежных переводов
                </li>
                <li>
                    Предоставление услуг службы поддержки
                    в режиме реального времени, оказание
                    помощи и консультационных услуг при
                    устранении ошибок
                </li>
                <li>
                    Обеспечение непрерывного
                    функционирования программного
                    комплекса, обновление программного
                    комплекса в соответствии с версиями,
                    представляемыми системой
                </li>
                <li>
                    Проведение обучения сотрудников
                    подразделений банка по работе с
                    системами денежных переводов
                </li>
                <li>
                    Обработка транзакций и предоставление
                    реестров для системы в соответствии
                    с ее стандартами и процедурами
                </li>
                <li>
                    Осуществление сверки по итогам
                    операционного дня и предоставление
                    реестров для банка
                </li>
                <li>
                    Выбор оптимальной схемы
                    подключения
                </li>
                <li>
                    Предоставление услуг по обработке
                    данных
                </li>
                <li>
                    Настройка работы интерфейса
                    в соответствии с правилами системы
                </li>
                <li>
                    Удобство и простота в использовании
                    программного обеспечения
                    оператором пункта обслуживания
                </li>
            </ul>
        </Wrapper>
    )
}

export default SectionTransactions
