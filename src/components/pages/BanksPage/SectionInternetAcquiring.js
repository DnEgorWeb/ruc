import React from 'react'
import styled from 'styled-components'
import BREAKS from '@constants/breakpoints'

import SpecialSection from './SpecialSection'
import SectionTitle from '@components/atoms/SectionTitle'
import Description from '@components/atoms/Description'
import Row from '@components/atoms/Row'
import Card from '@components/atoms/Card'

const Wrapper = styled(SpecialSection)`
    color: #ffffff;

    ${Row} {
        flex-wrap: nowrap;
        
        @media (min-width: ${BREAKS.SM}px) {
        }
    
        @media (min-width: ${BREAKS.MD}px) {
            margin: 50px -30px 0;
        }

    }

    ${Card} {
        flex: 1;
        background: transparent;
        box-shadow: none;
        padding: 0;

        img {
            margin-left: 0;
        }
    }

    ${Card.Column} {
        color: #ffffff;
    }

    h4 {
        text-transform: uppercase;
        font-size: 16px;
        font-weight: 500;
        margin: 30px 0 0;
        
        @media (min-width: ${BREAKS.SM}px) {
            margin: 70px 0 40px;
        }
    
        @media (min-width: ${BREAKS.MD}px) {
            font-size: 18px;
            margin: 100px 0 50px;
        }
    }

    ul {
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        
        @media (min-width: ${BREAKS.SM}px) {
            flex-direction: row;
        }
    }

    li {
        display: flex;
        position: relative;
        margin: 15px 10px 15px 56px;
        align-items: center;
        font-size: 13px;
        line-height: 1.7;
        
        @media (min-width: ${BREAKS.SM}px) {
            font-size: 14px;
            margin-bottom: 40px;
        }
    
        @media (min-width: ${BREAKS.MD}px) {
            margin: 30px 30px 50px 70px;
            flex: 0 0 calc(33% - 100px);
            max-width: 33%;
            min-width: 33%;
        }

        :before {
            content: '';
            background: url(${require('../CompaniesPage/images/icon-li.svg')}) no-repeat center;
            width: 36px;
            height: 36px;

            position: absolute;
            left: -56px;
            top: 0;
            
            @media (min-width: ${BREAKS.MD}px) {
               left: -70px;
            }
        }
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

function SectionInternetAcquiring(p) {
    return (
        <Wrapper type="blue" data-type="blue" {...p}>
            <SectionTitle number="6" id="internetAcquiring">Интернет эквайринг</SectionTitle>
            <Description>
                <p>
                    Интернет Эквайринг — услуга, позволяющая торгово-сервисным предприятиям
                    принимать платежи с использованием банковских карт в сети Интернет
                </p>
            </Description>
            <Row>
                <Card>
                    <img src={require('../CompaniesPage/images/icon-list.svg')} />
                    <Card.Column>
                        <p>Минимальный комплект документов, требуемых для подключения</p>
                    </Card.Column>
                </Card>
                <Card>
                    <img src={require('../CompaniesPage/images/icon-clock.svg')} />
                    <Card.Column>
                        <p>Быстрое подключение</p>
                    </Card.Column>
                </Card>
                <Card>
                    <img src={require('../CompaniesPage/images/icon-lock.svg')} />
                    <Card.Column>
                        <p>Безопасность</p>
                    </Card.Column>
                </Card>
            </Row>
            <h4>Предлагаемые услуги</h4>
            <Row>
                <ul>
                    <li>2 вида API: REST и SOAP</li>
                    <li>24/7 клиентская поддержка</li>
                    <li className="md_visible">Предоставление отчетности по операциям ежемесячно или ежедневно (на выбор клиента)</li>
                    <li>Быстрое зачисление денежных средств</li>
                    <li className="md_visible">Личный Кабинет</li>
                </ul>
                <ul className="md_hide">
                    <li>Личный Кабинет</li>
                    <li>Предоставление отчетности по операциям ежемесячно или ежедневно (на выбор клиента)</li>
                </ul>
            </Row>
        </Wrapper>
    )
}

export default SectionInternetAcquiring
