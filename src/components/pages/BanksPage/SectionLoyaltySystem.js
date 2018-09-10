import React from 'react'
import styled from 'styled-components'

import BREAKS from '@constants/breakpoints'

import SpecialSection from './SpecialSection'
import SectionTitle from '@components/atoms/SectionTitle'
import Description from '@components/atoms/Description'
import Row from '@components/atoms/Row'
import Card from '@components/atoms/Card'
import Button from '@components/atoms/Button'

const Wrapper = styled(SpecialSection)`
    background: #ffffff;

    ${SectionTitle} {
        color: #949494;
    }

    ${Description} {
        display: block;
    }

    ${Card.Link} {
        margin-top: 1rem;
        text-decoration:none;
        color:#000
        img{
            margin-left: 1rem;
        }
    }

    @media (min-width: ${BREAKS.SM}px) {

        ${Row} {
            margin: 0 -1rem;
        }

        ${Card.Link} {
            flex-direction: row;
            align-items: center;
            flex: 0 0 calc(50% - 2rem);
            margin: 2rem 1rem 0;

            img{
                margin-left: 1.5rem;
            }
        }
    }

    @media (min-width: ${BREAKS.MD}px) {
        ${Description} {
            display: flex;
        }

        ${Row} {
            margin: 90px -30px 0;
        }
    }
`

function SectionLoyalitySystem(p) {
    return (
        <Wrapper {...p}>
            <SectionTitle number="5" id="loyaltyPrograms">Программы лояльности</SectionTitle>
            <Description>
                <p>
                    Использование аутсорсинговой технологии при реализации Вашей программы лояльности
                    позволяет избежать рисков, связанных со стартовыми вложениями и оптимизировать
                    затраты за счет партнерства с Процессинговой компанией Рукард
                </p>
            </Description>
            <Row>
                <Card.Link to="/giftcard">
                    <img src={require('../LoyaltyPage/images/icon-file.svg')} />
                    <Card.Column>
                        <Card.Title>ПОДАРОЧНАЯ КАРТА</Card.Title>
                        <p>
                            Эффективный инструмент привлечения новых клиентов
                            в магазины или сервисные предприятия Вашей сети
                        </p>
                    </Card.Column>
                </Card.Link>
                <Card.Link to="/virtualcard">
                    <img src={require('../LoyaltyPage/images/icon-smartphone.svg')} />
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
                    <img src={require('../LoyaltyPage/images/icon-offer.svg')} />
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
                    <img src={require('../LoyaltyPage/images/icon-bag.svg')} />
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

export default SectionLoyalitySystem
