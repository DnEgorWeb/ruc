import React from 'react'
import styled from 'styled-components'

import BREAKS from '@constants/breakpoints'

import Section from '@components/atoms/Section'
import Row from '@components/atoms/Row'
import SectionTitle from '@components/atoms/SectionTitle'

import Column from './Column'
import Title from './Title'
import Item from './Item'
import Block from './Block'

const Wrapper = styled(Section)`
    background: #f7f7f7;

    ${SectionTitle} {
        color: #949494;
    }

    ${Title} {
        font-size: 18px;
        font-weight: normal;
        line-height: 1.17;
        color: #74be21;
        margin-bottom: 30px;
    }

    ${Row} {
        margin-top: 30px;
    }

    ${Block} {
        margin-top: 20px;
    }

    ${Item} {
        margin-bottom: 24px;
    }

    ul {
        margin-left: 1rem;
        line-height: 2;
    }

    p {
        margin-bottom: 1rem;
    }

    @media (min-width: ${BREAKS.SM}px) {
        ${Row} {
            margin: 60px -30px 0;
        }
    
        ${Column} {
            margin: 0 30px;
            flex: 1 0 calc(50% - 60px);
        }

        ${Item} {
            margin-bottom: 44px;
        }
    }

    @media (min-width: ${BREAKS.MD}px) {
        ${Row} { margin: 110px -60px 0; }
    
        ${Column} {
            margin: 0 60px;
            flex: 5;

            &:first-child {
                flex: 3;
            }
        }
    }
`


function SectionCharacteristics(p) {
    return (
        <Wrapper>
            <SectionTitle number="3">Характеристика комплекса</SectionTitle>
            <Row>
                <Column>
                    <Block>
                        <Item>Быстродействие</Item>
                        <Item>Обслуживание транзакций в режиме On-line</Item>
                        <Item>Отказоустойчивость</Item>
                        <Item>Масштабируемость</Item>
                        <Item>Многофункциональность</Item>
                    </Block>
                    <Block>
                        <Title>Сертифицированное терминальное оборудование</Title>
                        <ul>
                            <li>кассовые решения</li>
                            <li>POS-терминалы</li>
                            <li>VPOS</li>
                        </ul>
                    </Block>
                </Column>
                <Column>
                    <Block>
                        <Title>Носитель информации</Title>
                        <p>
                            Центральным звеном технологической системы является «Носитель
                            информации» — пластиковая карта с магнитной полосой. Карта
                            выполняется в соответствии со стандартом ISO 7812, устанавливающем
                            геометрические параметры карты и требования к качеству магнитной
                            полосы — HiCo.
                        </p>
                    </Block>
                    <Block>
                        <Title>Безопасность</Title>
                        <p>
                            Технологический комплекс РУКАРД разработан на базе
                            сертифицированного Международными Платежными Системами
                            процессингового ПО, что обеспечивает высокий уровень безопасности
                            на всех этапах реализации программы.
                        </p>
                        <p>
                            Данные для персонализации карт генерируются в специализированном
                            Центре Персонализации РУКАРД по технологиям, соответствующим
                            технологии производства банковских карт.
                        </p>
                        <p>
                            Для обмена информацией между компанией РУКАРД и нашими
                            клиентами предусмотрен специализированный защищенный канал
                            обмена. На этапе производства карт РУКАРД дает рекомендации или
                            предлагает посредничество при выборе производителя карт. Процесс
                            хранения карт защищен механизмом отложенной активации.
                        </p>
                    </Block>
                </Column>
                <Column>
                    <Block>
                        <Title>Сервисы для клиентов</Title>
                        <p>
                            Поддержка и сопровождение на всех этапах реализации
                            программы лояльности. Предоставление удаленного рабочего
                            места RCS Retail для управления программой лояльности:
                        </p>
                        <ul>
                            <li>анкета клиента</li>
                            <li>управление картой</li>
                            <li>оформление заявок на карты</li>
                            <li>отчеты</li>
                            <li>алгоритмы обслуживания карт и расписания их применения</li>
                        </ul>
                    </Block>
                    <Block>
                        <Title>Коммуникация</Title>
                        <p>
                            Средство коммуникации с держателями карт, позволяющее на
                            основе анкетных данных, осуществлять адресную рассылку как
                            группам держателей, так и индивидуально, в назначенное время,
                            по следующим каналам:
                        </p>
                        <ul>
                            <li>лента новостей</li>
                            <li>СМС-информирование держателей карт</li>
                            <li>СМС-рассылки держателям карт</li>
                            <li>e-mail-рассылки держателям карт</li>
                        </ul>
                    </Block>
                </Column>
            </Row>
        </Wrapper>
    )
}

export default SectionCharacteristics
