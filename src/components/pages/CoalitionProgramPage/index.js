import React, {Fragment} from 'react'
import styled from 'styled-components'
import BREAKS from '@constants/breakpoints'

import {
    Hero,
    SectionTitle,
    Section,
    Button,
} from '@components'

import {
    MODAL_ORDER_CONSULT,
} from 'constants/Modal'

const Quotes  = styled.div`
    display: flex;
    align-items: center;
    
    flex-direction: column;
    font-size: 13px;
    
    @media (min-width: ${BREAKS.SM}px) {
        width: 85%;
    }

    @media (min-width: ${BREAKS.MD}px) {
        width: 100%;
        flex-direction: row;
        margin-bottom: 170px;
    }

    > p {
        border-radius: 3px;
        color: #454444;

        font-size: 13px;
        line-height: 1.88;
         
        @media (min-width: ${BREAKS.SM}px) {
            font-size: 14px;
        }
    
        @media (min-width: ${BREAKS.MD}px) {
            font-size: 16px;
            padding: 80px;
        }
    }
    
    > strong {
        display: block;
        color: #74be21;
        
        font-size: 16px;
        font-weight: 300;
        line-height: 1.4;
        
        margin: 20px 0;
        
        @media (min-width: ${BREAKS.SM}px) {
            padding-right: 100px;
            font-size: 18px;
        }
    
        @media (min-width: ${BREAKS.MD}px) {
            font-size: 30px;
            padding-left: 100px;
        }
    }
`

const Row = styled.div`
    counter-reset: column;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    
    @media (min-width: ${BREAKS.SM}px) and (max-width:1023px){
        flex-direction: column;
    }

    @media (min-width: ${BREAKS.MD}px) {
        flex-direction: row;
    }
`

const Feature = styled.div`
    position: relative;
    
    @media (min-width: ${BREAKS.MD}px) {
        flex: 0 0 calc(50% - 175px);
        margin: 50px 85px;
    }

    h6 {
        margin-top: 20px;
        font-size: 18px;
        font-weight: 300;
        line-height: 1.53;
        text-align: left;
        color: #74be21;
        
        @media (min-width: ${BREAKS.SM}px) {
            font-size: 24px;
        }
    
        @media (min-width: ${BREAKS.MD}px) {
            font-size: 30px;
            margin-bottom: 30px;
        }
    }
    
    p {
        font-size: 13px;
        line-height: 1.88;
        text-align: left;
        color: #454444;
        margin-bottom: 1rem;
        
        @media (min-width: ${BREAKS.SM}px) {
            font-size: 14px;
        }
    
        @media (min-width: ${BREAKS.MD}px) {
            font-size: 16px;
        }
    }
    
    ${Button} {
        position: relative;
        width: 100%;
        max-width: 360px;
        margin-bottom: 10px;
    
        @media (min-width: ${BREAKS.MD}px) {
            position: absolute;
            bottom: -60px;
            right: 0;
        }
    }
`

const SectionQuotes = styled(Section)`
    background: #ffffff;
    padding: 0 0 10px 0;
    min-height: 0;
    
    ${SectionTitle} {
        color: #949494;
    }
`

const SectionCharacteristic = styled(Section)`
    background: #ffffff;
    
    ${SectionTitle} {
        color: #949494;
    }
    
    ${Row} {
        @media (min-width: ${BREAKS.LG}px) {
            margin: 0 0 0 -85px;
        }
    }
`

function CoalitionProgramPage({openModal}) {
    return (
        <Fragment>
            <Hero src={require('./images/card.png')} />

            <SectionQuotes>
                <SectionTitle number="1">Коалиционные программы</SectionTitle>
                <Quotes>
                    <strong>
                        «РУКАРД — Коалиционные программы» — это возможность объединить на единой технологической платформе Вашу программу лояльности и программы лояльности Ваших партнеров.
                    </strong>
                    <p>
                        Технологический комплекс РУКАРД позволяет создать конфигурацию программы лояльности, объединяющую в рамках одной платежной системы различные торговые и сервисные предприятия. При настройке алгоритмов обслуживания в каждом предприятии могут использоваться различные алгоритмы, учитывающие как отраслевую специфику, так специфику работы конкретного предприятия.                        
                    <br/>
                    <br/>
                        Схема обслуживания карт в рамках коалиционной программы строится на принципах, подобных обслуживанию карт международных платежных систем (МПС). В пределах коалиции торговых и сервисных предприятий осуществляется прием и обслуживание пластиковых (небанковских) карт зарегистрированной в комплексе платежной системы. В системе регистрируются: Эмитент, Эквайер, Фирма, точка обслуживания и терминал. К точке обслуживания привязывается алгоритм обслуживания карты.
                    <br/>
                    <br/>
                        Важную роль в коалиционной программе играет Организатор — юридическое лицо, осуществляющее координацию всех вопросов, связанных с реализацией маркетинговой и рекламной стратегий. На организатора ложатся затраты по выпуску карт (Эмитент), созданию и техническому обеспечению терминальной сети.
                    <br/>
                    <br/>
                        Использование решения РУКАРД для Коалиционных программ позволяет запускать проекты Социальных карт. Вариантов здесь достаточно, например, расчетная Социальная карта позволит осуществлять контроль за использованием и расходованием выделяемых на социальные нужды целевых денежных средств, дисконтная Социальная карта позволяет предоставлять целевые скидки различным категориям граждан (школьникам, пенсионерам, инвалидам …)
                    </p>
                </Quotes>
            </SectionQuotes>

            
            <SectionCharacteristic>
                <Row>
                    <Feature>
                        <h6>Карточный тип</h6>
                        <p>
                            Для коалиционных программ используются типы карт, описанные в разделах «Подарочная карта» и «Карта лояльности».
                        </p>
                    </Feature>

                    <Feature>
                        <h6>Номинал</h6>
                        <p>
                            Зависит от карточного типа.
                        </p>
                    </Feature>
                    <Feature>
                        <h6>Срок действия карты</h6>
                        <p>
                            В системе предусмотрена установка для каждого карточного типа отдельного срока действия карт с момента активации, кратного 1 месяцу, максимальный срок действия карты составляет 99 мес.
                        </p>
                    </Feature>
                    <Feature>
                        <Button filled onClick={() => openModal(MODAL_ORDER_CONSULT)}>Подключить</Button>
                    </Feature>
                </Row>
            </SectionCharacteristic>

        </Fragment>
    )
}

export default CoalitionProgramPage
