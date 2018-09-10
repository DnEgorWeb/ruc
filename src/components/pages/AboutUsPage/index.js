import React, {Fragment} from 'react'
import styled from 'styled-components'
import BREAKS from '@constants/breakpoints'

import {
    Container,
    Section,
    SectionTitle,
    Hero,
} from '@components'

import SectionSafety from './SectionSafety'
import Timeline from './Timeline'

const About = styled.div`
    ${SectionTitle} {
        color: #949494;
    }
    
    .md_visible {
        display: none;
        
        @media (min-width: ${BREAKS.MD}px) {
            display: inherit;
        }
    }
    .md_hide {
        @media (min-width: ${BREAKS.MD}px) {
            display: none;
        }
    }
`

const QuoteAbout = styled.div`
    margin-top: 21px;
    color: #454444;

    font-size: 13px;
    line-height: 1.88;

    width: 85%;
    
    @media (min-width: ${BREAKS.SM}px) {
        margin-top: 32px;
        margin-bottom: 21px;
        font-size: 14px;    
    }

    @media (min-width: ${BREAKS.MD}px) {
        margin-top: 100px;
        margin-bottom: 240px;
        font-size: 16px;        
    }

    strong {
        display: block; 
        color: #65b444;

        font-size: 16px;
        font-weight: 300;
        line-height: 1.33;
        margin-bottom: 20px;    

        
        @media (min-width: ${BREAKS.SM}px) {
            font-size: 18px;
        }
    
        @media (min-width: ${BREAKS.MD}px) {
            display: inline;
            font-size: 30px;
        }
    }

    p {
        font-size: 13px;
        
        @media (min-width: ${BREAKS.SM}px) {
            font-size: 14px;
        }
    
        @media (min-width: ${BREAKS.MD}px) {
            font-size: 16px;
            padding-left: 380px;
        }
    }
`

const Quotes = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: 26px;
    margin-bottom: 20px;
    
    @media (min-width: ${BREAKS.SM}px) {
        
    }

    @media (min-width: ${BREAKS.MD}px) {
        flex-direction: row;
        font-size: 16px;
        line-height: 1.88;
        margin-bottom: 170px;
    }

    > p {
        flex: 1;
        padding: 10px;
        
        @media (min-width: ${BREAKS.SM}px) {
            
        }
    
        @media (min-width: ${BREAKS.MD}px) {
            padding: 80px;
        }
    }

    > p:first-child {
        background-color: #f7f7f7;
        border-radius: 3px;
        color: #454444;

        font-size: 13px;
        line-height: 1.53;
        
        @media (min-width: ${BREAKS.SM}px) {
            padding: 30px;
            font-size: 14px;
        }
    
        @media (min-width: ${BREAKS.MD}px) {
            padding: 80px;
            font-size: 16px;
            line-height: 1.88;
        }
    }
    
    > p:last-child {
        color: #74be21;
        font-size: 16px;
        font-weight: 300;
        line-height: 1.5;
        
        @media (min-width: ${BREAKS.SM}px) {
            padding: 30px 0 0;
            font-size: 18px;
        }
    
        @media (min-width: ${BREAKS.MD}px) {
            font-size: 30px;
            line-height: 1.33;
            padding-left: 100px;
        }
    }
`

const Statuses = styled.ul`
    display: flex;
    flex-direction: column;
        
    @media (min-width: ${BREAKS.SM}px) {
        margin-top: 36px;
        display: inline-flex;
        width: 50%;
    }

    @media (min-width: ${BREAKS.MD}px) {
        flex-direction: row;
        align-items: center;
        padding: 0;
        margin: 120px -50px;
        width: 100%;
    }

    li {
        display: flex;
        align-items: center;
        flex: 1;

        color: #454444;
        font-size: 14px;
        line-height: 1.71;
        
        margin: 20px 0 0;
        
        @media (min-width: ${BREAKS.SM}px) {
        
        }
    
        @media (min-width: ${BREAKS.MD}px) {
            margin: 0 50px;
        }

        &::before{
            background: url('${require('./images/check.svg')}') center no-repeat;
            content: '';
            display: block;

            height: 36px;
            width: 36px;
            min-width: 36px;
            max-width: 36px;

            margin-right: 2rem;
        }
    }
`

const SectionHistory = styled.div`
    background: transparent;
    padding: 45px 0;

    @media (min-width: ${BREAKS.MD}px) {
        padding: 140px 0;
    }
`

function AboutUsPage() {
    return (
        <About>
            <Hero src={require('./images/hero.png')} />

            <Container>
                <SectionTitle number={1}>О нас</SectionTitle>

                <QuoteAbout>
                    <strong>Компания Рукард — современная, независимая<br />процессинговая компания,</strong> специализирующаяся на оказании широкого спектра процессинговых услуг и дополнительных сервисов,
                    <p>связанных с обслуживанием операций, совершаемых с использованием платежных и банковских карт и их реквизитов в платежных системах «Мир», VISA Incorporated, MasterCard WorldWide, American Express, UnionPay International (UPI), а также процессинга локальных банковских карт и карт лояльности</p>
                </QuoteAbout>

                <SectionTitle number={2}>Компания имеет соответствующие полномочия в платежных системах</SectionTitle>

                <Statuses>
                    <li>Статус VisaNet Processor в VISA Inc.</li>
                    <li>Статус MSP в MasterCard WorldWide</li>
                    <li>Статус TPSP в UnionPay International</li>
                    <li className="md_visible">Статус TPP в МИР</li>
                    <li className="md_visible">Соответствующее соглашение с AmEx</li>
                </Statuses>
                <Statuses className="md_hide">
                    <li>Статус TPP в МИР</li>
                    <li>Соответствующее соглашение с AmEx</li>
                </Statuses>

                <Quotes>
                    <p>В компании-партнере ООО «Русофт» разработаны интегрированные с Процессинговой компанией Рукард программные продукты RUSOFT™, включающие решения для закрытия банковского операционного дня, банковского розничного бизнеса, банковского процессингового центра (in-house), системы управления банкоматами и терминалами, установленными в торговых и сервисных предприятиях, а также программного обеспечения для банкоматов и POS-терминалов</p>
                    <p>За годы работы Процессинговой компании Рукард было удостоено множеством дипломов и наград от известных компаний и общественных организаций в области финансов и телекоммуникаций</p>
                </Quotes>
            </Container>

            <SectionSafety>
                <SectionTitle number={3}>Безопасность и стабильность</SectionTitle>
                <img
                    src={require('./images/safety.png')}
                    srcSet={`${require('./images/safety@2x.png')} 2x, ${require('./images/safety@3x.png')} 3x`}
                />
                <div>
                    <h4>Процессинговая компания Рукард</h4>

                    <p>была первой сертифицирована в России на соответствие требованиям по обеспечению безопасности в области платежных и банковских карт PCI DSS (Payment Card Industry Data Security Standard) в качестве Service Provider Level 1 и, согласно правилам платежных систем, подтверждает данный статус каждый год</p>

                    <a href="#">Политика обработки и защиты персональных данных.pdf</a>
                </div>
            </SectionSafety>

            <SectionHistory>
                <Container>
                    <SectionTitle number={4}>История компании</SectionTitle>
                </Container>

                <Timeline />
            </SectionHistory>
        </About>
    )
}

export default AboutUsPage
