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

function LoyalityCardsPage({openModal}) {
    
    return (
        <Fragment>
            <Hero src={require('./images/card.png')} />

            <SectionQuotes>
                <SectionTitle number="1">Карты лояльности</SectionTitle>
                <Quotes>
                    <strong>
                        Создайте ценность для Вашего клиента — реализуйте программы Дисконтных карт или Бонусных карт на базе технологии, предлагаемой компанией РУКАРД
                    </strong>
                    <p>
                        Предложите Вашим постоянным покупателям нечто большее, чем просто хорошее отношение — карта лояльности создаст дополнительную связанную с Вашим магазином ценность для покупателя. Накопление покупок, накопление бонусных баллов, станет серьезным аргументом для повторного посещения.
                        <br/>
                        <br/>
                        ПРОГРАММЫ ДИСКОНТНЫХ И БОНУСНЫХ КАРТ — ОТЛИЧНАЯ ВОЗМОЖНОСТЬ УВЕЛИЧИТЬ ЛОЯЛЬНОСТЬ КЛИЕНТОВ. ИСПОЛЬЗУЙТЕ КАРТЫ ЛОЯЛЬНОСТИ СОВМЕСТНО С ПОДАРОЧНЫМИ КАРТАМИ ДЛЯ ЗАКРЕПЛЕНИЯ ИНТЕРЕСА ПОКУПАТЕЛЕЙ К ВАШЕМУ МАГАЗИНУ.
                    </p>
                </Quotes>
            </SectionQuotes>
            <SectionSteps>
                <Row>
                    <Column>
                        <strong>
                            Воздействие на покупателя
                        </strong>
                        <p>
                            Выбор метода воздействия на покупателя, основанный на опыте обслуживания, на знании клиента. Для дисконта характерным является предпочтение получения скидки «здесь и сейчас», для бонуса характерным является вовлечение покупателя в игру накопления бонусных баллов с целью использования их в последствии в Вашем предприятии для оплаты покупок, услуг
                        </p>
                    </Column>
                    <Column>
                        <strong>
                            Возможность ограничить
                        </strong>
                        <p>
                            Ограничения по марже, которые могут существовать в различных областях деятельности
                        </p>
                    </Column>
                    <Column>
                        <strong>
                            Обратная связь
                        </strong>
                        <p>
                            Выводы о предпочтениях, полученные на основе опросов, исследований
                        </p>
                    </Column>
                </Row>
            </SectionSteps>
            <SectionCharacteristic>
                <SectionTitle number="2">Характеристика проекта</SectionTitle>
                <Row>
                    <Feature>
                        <h6>Параметры карты</h6>
                        <p>
                            Сочетание набора используемых в системе параметров карты позволяет задать разнообразные алгоритмы обслуживания карт в магазинах.
                        </p>
                    </Feature>
                    <Feature>
                        <h6>Карточный тип</h6>
                        <p>
                            Для программы «Карта лояльности» Вашего клиента в комплексе по способу обслуживания может быть функционально выполнена в следующих сочетаниях параметров:
                        </p>
                    </Feature>
                </Row>

                <TableWrapper>
                    <Table>
                        <thead>
                            <tr>
                                <th>КАРТОЧНЫЙ ТИП</th>
                                <th>Накопительный счет</th>
                                <th>Расчет бонуса / скидки</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Тип 2.1 «Бонусная»</td>
                                <td>Не учитывается</td>
                                <td>От суммы покупки</td>
                            </tr>
                            <tr>
                                <td>Тип 2.2 «Бонусная накопительная»</td>
                                <td>Учитывается</td>
                                <td>От суммы накоплений</td>
                            </tr>
                            <tr>
                                <td>Тип 2.3 «Дисконтная»</td>
                                <td>Не учитывается</td>
                                <td>От суммы покупки</td>
                            </tr>
                            <tr>
                                <td>Тип 2.4 «Дисконтная накопительная»</td>
                                <td>Учитывается</td>
                                <td>От суммы накоплений</td>
                            </tr>
                        </tbody>
                    </Table>
                </TableWrapper>

                <Row>
                    <Feature>
                        <h6>Примечание</h6>
                        <p>
                            В рамках одной программы лояльности можно использовать только одинаковые, по признаку учета накопительного счета типы карт.
                        </p>
                        <p>
                            Алгоритмы обслуживания карт могут учитывать дополнительные параметры, такие как: уровень карты, точка обслуживания, период зачисления бонусов, период «сгорания» бонусов.
                        </p>
                    </Feature>

                    <Feature>
                        <h6>Номинал</h6>
                        <p>
                            Карты не имеют заранее назначенного номинала.
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

export default LoyalityCardsPage
