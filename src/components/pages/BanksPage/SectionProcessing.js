import React from 'react'
import styled from 'styled-components'

import BREAKS from '@constants/breakpoints'

import SpecialSection from './SpecialSection'
import SectionTitle from '@components/atoms/SectionTitle'
import Description from '@components/atoms/Description'
import Row from '@components/atoms/Row'
import Card from '@components/atoms/Card'

import Statuses from '../MainPage/Statuses'

const StyledStatuses = styled(Statuses)``


const Wrapper = styled(SpecialSection)`
    ${Card} {
        background: transparent;
        box-shadow: none;
        padding: 0;

        img {
            margin-left: 0;
        }
    }

    ${Card.Column} {
        padding-right: 0;
    }

    ${StyledStatuses} {
        border-radius: 3px;
        background-color: #f7f7f7;
        padding: 1rem;

        li {
            display: flex;
            flex-direction: row;
            align-items: center;
            padding-left: 0;
            
            figure {
                margin-right: 1rem;
            }
        }
    }

    @media (min-width: ${BREAKS.SM}px) {
        ${Row} {
            margin: 0 -10px 0;
        }

        ${Card} {
            flex: 1 0 calc(33.3334% - 20px);
        }
    }

    @media (min-width: ${BREAKS.MD}px) {
        ${SectionTitle} {
            margin-bottom: 100px;
        }

        ${Card} {
            flex: 1 0 calc(33.3334% - 60px);
        }

        ${Description} {
            margin-top: 40px;
        }

        ${Row} {
            margin: 0 -30px 0;
        }

        ${StyledStatuses} {
            padding: 40px 80px;
            margin: 70px 0 0;

            li {
                flex-direction: column;
                padding-left: 1rem;

                figure {
                    margin-right: 0;
                }

                p {
                   text-align: center;
                }
            }
        }
    }
    
`

function SectionProcessing(p) {
    return (
        <Wrapper type="white" data-type="white" {...p}>
            <SectionTitle number="1" id="cardProcessing">Процессинг банковских карт</SectionTitle>
            <Description>
                <p>
                    Аутсорсинг процессинговых услуг в качестве сертифицированного Visanet Processor в Visa inc.
                    и MSP/TPP в Mastercard Worldwide для банков-принципиальных членов (principal member) МПС
                </p>
            </Description>
            <Row>
                <Card>
                    <img src={require('./images/server.svg')} />
                    <Card.Column>
                        <p>Ведение базы данных, авторизация и расчеты с МПС по собственным операциям банка Принципала</p>
                    </Card.Column>
                </Card>
                <Card>
                    <img src={require('./images/smartphone.svg')} />
                    <Card.Column>
                        <p>Комплексное обслуживание спонсорских программ, включая процессинг и технологический клиринг</p>
                    </Card.Column>
                </Card>
                <Card>
                    <img src={require('./images/settings.svg')} />
                    <Card.Column>
                        <p>Автоматизация расчетов между всеми участниками сети банка-спонсора</p>
                    </Card.Column>
                </Card>
            </Row>
            <Description>
                <p>
                    Процессинговый Центр РУКАРД одним из первых независимых процессинговых центров был сертифицирован
                    в России на соответствие требованиям по обеспечению безопасности PCI DSS (Payment Card Industry Data
                    Security Standard) в качестве Service Provider Level 1 и успешно подтверждает данный статус каждый год.
                </p>
            </Description>

            <StyledStatuses />
        </Wrapper>
    )
}

export default SectionProcessing
