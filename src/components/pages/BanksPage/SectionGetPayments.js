import React from 'react'
import styled from 'styled-components'

import BREAKS from '@constants/breakpoints'

import SpecialSection from './SpecialSection'
import SectionTitle from '@components/atoms/SectionTitle'
import Description from '@components/atoms/Description'
import Row from '@components/atoms/Row'
import Card from '@components/atoms/Card'

const Wrapper = styled(SpecialSection)`
    background: #ffffff;

    ${SectionTitle} {
        color: #949494;
        margin-bottom: 20px;
    }

    ${Description} {
        flex-direction: column;
    }

    ${Row} {
        margin: 20px 0 0;
    }

    ${Card} {
        background: transparent;
        box-shadow: none;
        padding: 0;

        img {
            margin-left: 0;
            flex: 0 0 40px;
            width: 60px;
        }
    }

    ${Card.Column} {
        padding-right: 0;
    }

    @media (min-width: ${BREAKS.SM}px) {
        ${SectionTitle} {
            margin-bottom: 60px;
        }

        ${Row} {
            margin: 50px -30px 0;
        }
        
        ${Card} {
            flex: 0 0 calc(33.3334% - 60px);
            margin: 0 30px 30px;
        }
    }
`

function SectionGetPayments(p) {
    return (
        <Wrapper type="white" data-type="white" {...p}>
            <SectionTitle number="4" id="payments">Прием платежей</SectionTitle>
            <Description>
                <p>
                    «Центральная Биллинговая Система» предоставляет возможность партнерам организовать прием платежей за
                    услуги сотовой связи, спутникового и кабельного телевидения, интернет, коммунальных платежей, погашения
                    кредитов и пополнения счета банковской карты и т.д.
                </p>
                <p>
                    Прием платежей может осуществляться в банкоматах банка, в платежных терминалах, в ДБО MPAY, ДБО банка
                    (требуется интеграция). Также прием платежей может осуществляться в тонких рабочих местах MEX (Mobile EXpress)
                </p>
            </Description>
            <Row>
                <Card>
                    <img src={require('../CompaniesPage/images/icon-person.svg')} />
                    <Card.Column>
                        <p>Прямые договора с основными поставщиками услуг</p>
                    </Card.Column>
                </Card>
                <Card>
                    <img src={require('../CompaniesPage/images/icon-server.svg')} />
                    <Card.Column>
                        <p>Наличие универсального шлюза (подключение АБС, ДБО и др.)</p>
                    </Card.Column>
                </Card>
                <Card>
                    <img src={require('../CompaniesPage/images/icon-lists.svg')} />
                    <Card.Column>
                        <p>Наличие тонкого рабочего места для приема платежей и формирования отчетов</p>
                    </Card.Column>
                </Card>
                <Card>
                    <img src={require('../CompaniesPage/images/icon-price.svg')} />
                    <Card.Column>
                        <p>Большой опыт работы в области приема платежей</p>
                    </Card.Column>
                </Card>
                <Card>
                    <img src={require('../CompaniesPage/images/icon-associate.svg')} />
                    <Card.Column>
                        <p>Собственная команда разработчиков — быстрота внедрения нового функционала</p>
                    </Card.Column>
                </Card>
                <Card>
                    <img src={require('../CompaniesPage/images/icon-link.svg')} />
                    <Card.Column>
                        <p>Резервирование сервиса — наличие запасных каналов приема платежей</p>
                    </Card.Column>
                </Card>
                <Card>
                    <img src={require('../CompaniesPage/images/icon-zoom.svg')} />
                    <Card.Column>
                        <p>Масштабируемость</p>
                    </Card.Column>
                </Card>
            </Row>
        </Wrapper>
    )
}

export default SectionGetPayments
