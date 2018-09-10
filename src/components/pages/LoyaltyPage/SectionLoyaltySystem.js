import React from 'react'
import styled from 'styled-components'

import Section from '@components/atoms/Section'
import Row from '@components/atoms/Row'
import SectionTitle from '@components/atoms/SectionTitle'
import Card from '@components/atoms/Card'

import BREAKS from '@constants/breakpoints'

const Wrapper = styled(Section)`
    background: #ffffff;

    ${SectionTitle} {
        color: #949494;
    }

    ${Row} {
        margin: 0;
    }

    ${Card}, ${Card.Link} {
        flex: 0 0 100%;
        margin-bottom: 1rem;
        color:#000;
        text-decoration: none;
        img {
            margin-left: 0;
            padding-left: 1rem;
        }
    }

    @media (min-width: ${BREAKS.SM}px) {
        ${Row} {
            margin: 30px -20px 0;
        }

        ${Card}, ${Card.Link} {
            flex: 0 0 calc(50% - 40px);
            margin: 0 20px 40px;
        }
    }

    @media (min-width: ${BREAKS.MD}px) {
        ${Row} {
            margin: 110px -30px 0;
        }

        ${Card}, ${Card.Link} {
            flex: 0 0 calc(33.334% - 60px);
            margin: 0 30px 60px;
        }
    }
`

function SectionLoyaltySystem(p) {
    return (
        <Wrapper>
            <SectionTitle number="2">Системы лояльности</SectionTitle>
            <Row>
                <Card.Link to="/giftcard">
                    <img src={require('./images/icon-file.svg')} />
                    <Card.Column>
                        <Card.Title>ПОДАРОЧНАЯ КАРТА</Card.Title>
                        <p>
                            Эффективный инструмент привлечения новых клиентов
                            в магазины или сервисные предприятия Вашей сети
                        </p>
                    </Card.Column>
                </Card.Link>
                <Card.Link to="/virtualcard">
                    <img src={require('./images/icon-smartphone.svg')} />
                    <Card.Column>
                        <Card.Title>ВИРТУАЛЬНЫЙ ПОДАРОЧНЫЙ СЕРТИФИКАТ</Card.Title>
                        <p>
                            Ваши клиенты — пользователи
                            социальных сетей, владельцы
                            кошельков?
                        </p>
                    </Card.Column>
                </Card.Link>
                <Card.Link to="/loyaltycard">
                    <img src={require('./images/icon-offer.svg')} />
                    <Card.Column>
                        <Card.Title>КАРТА ЛОЯЛЬНОСТИ</Card.Title>
                        <p>
                            Накопление покупок,
                            накопление бонусных баллов,
                            станет серьезным аргументом
                            для повторного посещения
                        </p>
                    </Card.Column>
                </Card.Link>
                <Card.Link to="/coalition">
                    <img src={require('./images/icon-bag.svg')} />
                    <Card.Column>
                        <Card.Title>КОАЛИЦИОННЫЕ ПРОГРАММЫ</Card.Title>
                        <p>
                            Объедините Вашу программу лояльности и
                            программу лояльности партнеров на единой
                            технологической платформе
                        </p>
                    </Card.Column>
                </Card.Link>
            </Row>
        </Wrapper>
    )
}

export default SectionLoyaltySystem
