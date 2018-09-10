import React, {Fragment} from 'react'
import styled from 'styled-components'
import BREAKS from '@constants/breakpoints'

import {
    Hero,
    SectionTitle,
    Section,
    Button,
} from '@components'

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
    
    @media (min-width: ${BREAKS.SM}px) {
        flex-direction: column;
    }

    @media (min-width: ${BREAKS.MD}px) {
        flex-direction: row;
    }
`

const Column = styled.div`
    position: relative;
    margin: 0 0 30px 60px;
    
    @media (min-width: ${BREAKS.SM}px) {
        margin: 0 0 30px 80px;
    }

    @media (min-width: ${BREAKS.MD}px) {
        flex: 1 0 320px;
        margin: 0 60px 60px 90px;
    }

    > strong {
        display: block;
        color: #454444;
        font-size: 18px;
        font-weight: 500;
        line-height: 1.67;
        margin-bottom: 10px;
        
        @media (min-width: ${BREAKS.MD}px) {
            margin-bottom: 40px;
        }
    }
    
    > p {
        color: #454444;
        font-size: 14px;
        line-height: 1.71;
    }
    
    ::before {
        counter-increment: column; 
        content: counter(column);
        position: absolute;
        left: -70px;
        line-height: 1;
        
        font-size: 50px;    
        font-weight: 300;
        color: #74be21;
        
        @media (min-width: ${BREAKS.SM}px) {
            left: -90px;
            font-size: 70px; 
        }
    
        @media (min-width: ${BREAKS.MD}px) {
            left: -100px;
            font-size: 88px;
        }
    }
`

const Feature = styled.div`
    position: relative;
    
    @media (min-width: ${BREAKS.MD}px) {
        flex: 0 0 560px;
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

const TableWrapper = styled.div`
    overflow: auto;
`

const Table = styled.table`
    border-collapse: collapse;
    width: 100%;
    
    @media (min-width: ${BREAKS.MD}px) {
        margin-bottom: 60px;
    }


    th, td {
        border: solid 1px #acacac;
        padding: 1rem;
        
        @media (min-width: ${BREAKS.MD}px) {
            padding: 38px 50px;
        }

    }

    th {
        color: #ffffff;
        background-color: #d5d5d5;
        font-size: 16px;
        font-weight: 500;
        line-height: 1.27;
        text-align: left;
        
        @media (min-width: ${BREAKS.SM}px) {
            font-size: 18px;
        }
    
        @media (min-width: ${BREAKS.MD}px) {
            font-size: 26px;
        }

    }
    
    td {
        font-size: 13px;
        line-height: 1.67;
        text-align: left;
        color: #454444;
        
        @media (min-width: ${BREAKS.SM}px) {
            font-size: 14px;
        }
    
        @media (min-width: ${BREAKS.MD}px) {
            font-size: 18px;
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

const SectionSteps = styled(Section)`
    background: #f7f7f7;
    min-height: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 20px 10px;
    
    @media (min-width: ${BREAKS.MD}px) {
        padding: 150px 200px;
    }
`

const SectionCharacteristic = styled(Section)`
    background: #ffffff;
    
    ${SectionTitle} {
        color: #949494;
    }
    
    ${Row} {
        @media (min-width: ${BREAKS.MD}px) {
            margin: 0 0 0 -85px;
        }
    }
`

function VirtualGiftsCardsPage() {
    return (
        <Fragment>
            <Hero src={require('./images/card.png')} />

            <SectionQuotes>
                <SectionTitle number="1">Подарочная карта</SectionTitle>
                <Quotes>
                    <strong>
                        Ваши клиенты — пользователи социальных сетей (одноклассники, вконтакте, facebook и т.п.), владельцы кошельков (webmoney) и, вообще, продвинутые пользователи интернет?
                    </strong>
                    <p>
                        Совместно с нашими технологическими партнерами мы готовы предложить уникальный продукт
                        Рукард — виртуальный подарочный сертификат.
                    </p>
                </Quotes>
            </SectionQuotes>

            <SectionSteps>
                <Row>
                    <Column>
                        <p>
                            ТСП регистрирует виртуальный Подарочный сертификат в комплексе РУКАРД. (Отдельный карточный тип).
                        </p>
                    </Column>
                    <Column>
                        <p>
                            ТСП оформляет заявку в РУКАРД на подготовку данных для стока карт (сертификатов).
                        </p>
                    </Column>
                    <Column>
                        <p>
                            РУКАРД хранит номера неактивированных сертификатов ТСП в своей информационной базе.
                        </p>
                    </Column>
                    <Column>
                        <p>
                            ТСП регистрирует виртуальный POS-терминал от своего имени и «размещает» его в информационной системе Интернет-магазина.
                        </p>
                    </Column>
                    <Column>
                        <p>
                            Клиент Интернет-магазина приобретает виртуальный Подарочный сертификат и пополняет его лицевой счет доступными средствами (электронный кошелек, банковская карта, наличные).
                        </p>
                    </Column>
                    <Column>
                        <p>
                            После оплаты (пополнения лицевого счета) Интернет-магазин активирует сертификат на виртуальном POS-терминале.
                        </p>
                    </Column>
                    <Column>
                        <p>
                            Клиент Интернет-магазина получает номер карты, указывает e-mail-адрес и номер мобильного телефона получателя Подарочного сертификата и по указанному адресу высылается письмо (оформленный сертификат) — содержащее номер виртуального Подарочного сертификата, срок его действия и номер мобильного телефона получателя виртуальной Подарочной карты
                        </p>
                    </Column>
                    <Column>
                        <p>
                            Получатель виртуальной Подарочной карты распечатывает полученное письмо с номером карты и другими необходимыми параметрами. Для получения недостающих для совершение операции оплаты на кассе кодов получатель виртуального подарочного сертификата отправляет со своего телефона (номер которого был указан при приобретении сертификата) СМС с запросом на указанный в письме короткий номер.
                        </p>
                    </Column>
                    <Column>
                        <p>
                            Получив в ответном СМС недостающие коды, получатель сертификата направляется в ТСП и предъявляет на кассе распечатанный сертификат, и называет кассиру полученные в ответном СМС коды.
                        </p>
                    </Column>
                    <Column>
                        <p>
                            Кассир вводит полный номер сертификата и дополнительные коды и осуществляет операцию «Оплата» в пределах текущего лимита карты.
                        </p>
                    </Column>
                    <Column>
                        <p>
                            После совершения операции «Оплата» карта блокируется.
                        </p>
                    </Column>
                </Row>
            </SectionSteps>

           

        </Fragment>
    )
}

export default VirtualGiftsCardsPage
