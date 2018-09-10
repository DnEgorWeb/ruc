import React from 'react'
import styled from 'styled-components'
import BREAKS from '@constants/breakpoints'

import Section from '@components/atoms/Section'
import Row from '@components/atoms/Row'
import SectionTitle from '@components/atoms/SectionTitle'
import Button from '@components/atoms/Button'

import Column from './Column'

const Wrapper = styled(Section)`
    background: #ffffff;
    
    ${SectionTitle} {
        color: #949494;
    }

    ${Row} {
        position: relative;
        counter-reset: step;
    }
    
    @media (min-width: ${BREAKS.SM}px) {
        ${Row} {
            margin-top: 40px;
            flex-direction: column;
        }
        
        ${Button} {
            display: inline-block;
            margin: auto;
            max-width: 450px;
        }
    }
    
    @media (min-width: ${BREAKS.MD}px) {
        ${Row} {
            flex-direction: row;
            margin-top: 110px;
        }
        
        ${Button} {
            position: absolute;
            right: 0;
            bottom: 0;    
        }
    }
`

const Step = styled(Column)`
    justify-content: center;
    
    position: relative;
    height: 88px;
    line-height: 1.2;
    margin: 0 0 0 50px;
    
    ::before {
        counter-increment: step; 
        content: counter(step);
        position: absolute;
        left: -50px;
        
        font-size: 50px;
        font-weight: 300;
        color: #74be21;
    }
    
        
    @media (min-width: ${BREAKS.SM}px) {
        margin: 0 0 0 90px;

        ::before {
            left: -70px;
            font-size: 70px;
        }
    }
    
    @media (min-width: ${BREAKS.MD}px) {
        flex: 0 0 220px;
        margin: 0 70px 120px;
        
        ::before {
            left: -70px;
            font-size: 88px;
        }
    }
`

function SectionSixStepsToStart(p) {
    return (
        <Wrapper>
            <SectionTitle number="4">6 шагов для запуска</SectionTitle>
            <Row>
                <Step>Оформление заявки</Step>
                <Step>Обсуждение параметров программы лояльности</Step>
                <Step>Согласование и подписание договора</Step>
                <Step>Регистрация в комплексе и тестирование</Step>
                <Step>Подготовка рекламных материалов</Step>
                <Step>Заказ и изготовление карт</Step>
                <Button filled>Подключить</Button>
            </Row>
        </Wrapper>
    )
}

export default SectionSixStepsToStart
