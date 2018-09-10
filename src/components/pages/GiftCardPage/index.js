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
    
    @media (min-width: ${BREAKS.SM}px) {
        flex-direction: column;
    }

    @media (min-width: ${BREAKS.MD}px) {
        flex-direction: row;
    }
`

const Column = styled.div`
    position: relative;
    margin: 0 0 30px 30px;
    
    @media (min-width: ${BREAKS.SM}px) {
        margin: 0 0 30px 50px;
    }

    @media (min-width: ${BREAKS.MD}px) {
        flex: 1 0 320px;
        margin: 0 60px 60px 60px;
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
        left: -40px;
        line-height: 1;
        
        font-size: 50px;    
        font-weight: 300;
        color: #74be21;
        
        @media (min-width: ${BREAKS.SM}px) {
            left: -60px;
            font-size: 70px; 
        }
    
        @media (min-width: ${BREAKS.MD}px) {
            left: -70px;
            font-size: 88px;
        }
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

function GiftCardPage({openModal}) {
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
                        <strong>
                            Подарочная карта — эффективный
                            инструмент привлечения новых
                            клиентов в магазины или
                            сервисные предприятия Ваши сети.
                        </strong>
                        <p>
                            Лимит карты — живые деньги — получивший
                            карту в подарок не захочет их терять и
                            придет к Вам за покупкой. Принимайте
                            клиента! Производите впечатление!
                            Предложите клиенту участвовать в Вашей
                            Бонусной или Дисконтной программе,
                            реализованной на технологии Рукард
                        </p>
                    </Column>
                    <Column>
                        <strong>
                            Подарочная карта — эффективный
                            инструмент привлечения денег.
                        </strong>
                        <p>
                            Покупатель карты вносит аванс, которым Вы
                            можете распоряжаться до момента оплаты
                            покупки
                        </p>
                    </Column>
                    <Column>
                        <strong>
                            Подарочная карта — это важный элемент
                            Вашей рекламы,
                        </strong>
                        <p>
                            который после использования остается
                            у покупателя
                        </p>
                    </Column>
                </Row>
            </SectionSteps>

            <SectionCharacteristic>
                <SectionTitle number="2">Характеристика проекта</SectionTitle>
                <Row>
                    <Feature>
                        <h6>Карта</h6>
                        <p>
                            Применительно к проекту «Подарочная карта» поддерживаются как
                            карты, выполненные на физическом носителе (пластик), так
                            и виртуальные карты.
                        </p>
                        <p>
                            Карты на физическом носителе (пластиковые) по геометрическим
                            параметрам должны соответствовать международному стандарту ISO
                            7812 и иметь магнитную полосу стандарта HiCo.
                        </p>
                    </Feature>
                    <Feature>
                        <h6>Параметры карты</h6>
                        <p>
                            Сочетание набора используемых в системе параметров карты позволяет задать разнообразные алгоритмы обслуживания карт
                            в магазинах
                        </p>
                    </Feature>
                    <Feature>
                        <h6>Карточный тип</h6>
                        <p>
                            Для программы «Карта лояльности» Вашего клиента в комплексе по
                            способу обслуживания может быть функционально выполнена
                            в следующих сочетаниях параметров
                        </p>
                    </Feature>
                </Row>

                <TableWrapper>
                    <Table>
                        <thead>
                            <tr>
                                <th>КАРТОЧНЫЙ ТИП</th>
                                <th>ПОПОЛНЕНИЕ</th>
                                <th>СПИСАНИЕ</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>«Сертификат»</td>
                                <td>Однократное</td>
                                <td>Одноразовое</td>
                            </tr>
                            <tr>
                                <td>«Подарочная карта»</td>
                                <td>Однократное</td>
                                <td>Многоразовое</td>
                            </tr>
                            <tr>
                                <td>«Клубная/расчетная карта»</td>
                                <td>Многократное</td>
                                <td>Многоразовое</td>
                            </tr>
                        </tbody>
                    </Table>
                </TableWrapper>

                <Row>
                    <Feature>
                        <h6>Номинал</h6>
                        <p>
                            Номинал карты определяется начальным (на момент активации
                            карты) лимитом (остатком) на лицевом счете карты в системе.
                        </p>
                        <p>
                            Карты типов «Подарочная карта» и «Клубная/расчетная карта»
                            могут иметь заранее назначенный номинал или не иметь номинала.
                        </p>
                        <p>
                            Если номинал определен, то в момент активации карты происходит
                            проверка соответствия внесенной суммы и заданного в системе
                            значения номинала карты. Если номинал не определен, то
                            начальный лимит определяется в момент активации карты
                            и соответствует сумме внесенных покупателем карты средств.
                        </p>
                        <p>
                            Карты типа «Клубная/расчетная карта», как правило, не имеют
                            заранее назначенного номинала.
                        </p>
                    </Feature>

                    <Feature>
                        <h6>Срок действия карты</h6>
                        <p>
                            В системе предусмотрена установка для каждого карточного типа
                            отдельного срока действия карт с момента активации, кратного
                            1 месяцу. Максимальный срок действия карты составляет 99 мес.
                        </p>
                        <Button filled onClick={() => openModal(MODAL_ORDER_CONSULT)}>Подключить</Button>
                    </Feature>
                </Row>
            </SectionCharacteristic>

        </Fragment>
    )
}

export default GiftCardPage
