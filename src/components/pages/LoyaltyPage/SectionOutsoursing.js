import React from 'react'
import styled from 'styled-components'

import BREAKS from '@constants/breakpoints'

import Section from '@components/atoms/Section'
import Row from '@components/atoms/Row'
import SectionTitle from '@components/atoms/SectionTitle'

import Column from './Column'
import Title from './Title'
import Item from './Item'

const Wrapper = styled(Section)`
    background: #ffffff;

    ${SectionTitle} {
        color: #949494;
    }

    ${Row} {
        display: block;
        margin-top: 50px;
    }

    @media (min-width: ${BREAKS.MD}px) {
        ${Row} {
            display: flex;
            margin-top: 150px;
        }
    }
`

const LeftSide = styled(Column)`
    flex: 1;

    @media (min-width: ${BREAKS.MD}px) {
        padding-right: 140px;
    }
`

const RightSide = styled(Column)`
    flex: 2;
`

const Grid = styled.div`
    display: flex;
    flex-wrap: wrap;
    font-size: 14px;
    flex-direction: column;

    > div {
        margin-bottom: 20px;
    }

    @media (min-width: ${BREAKS.SM}px) {
        flex-direction: row;
        margin: 0 -18px;

        > div {
            flex: 0 0 calc(50% - 36px);
            margin: 0 18px 30px 18px;
        }
    }

    @media (min-width: ${BREAKS.MD}px) {
        margin: 0 -28px;

        > div {
            flex: 0 0 calc(33.3334% - 56px);
            margin: 0 28px 55px 28px;
        }
    }
`

function SectionOutsoursing(p) {
    return (
        <Wrapper id="scrollToView">
            <SectionTitle number="1">Аутсорсинг программ лояльности</SectionTitle>
            <Row>
                <LeftSide>
                    <strong>
                        Processing system of Loyalty позволяет создавать различные по сложности
                        и конфигурации Программы лояльности
                    </strong>
                    <p>
                        Использование аутсорсинговой технологии при реализации Вашей программы лояльности
                        позволяет избежать рисков, связанных со стартовыми вложениями и оптимизировать затраты
                        за счет партнерства с Процессинговой компанией Рукард.
                    </p>
                    <p>
                        Процессинговая компания Рукард предоставляет полный спектр ПО
                        и процессинговых услуг от единого поставщика,техническую поддержку
                        и обучение.
                    </p>
                </LeftSide>
                <RightSide>
                    <Title>Программа лояльности содержит следующие компоненты</Title>
                    <Grid>
                        <Item>Носитель информации (карта)</Item>
                        <Item>Авторизатор</Item>
                        <Item>Дополнительные сервисы (СМС, e-mail)</Item>
                        <Item>Концентратор терминального оборудования</Item>
                        <Item>Канал связи</Item>
                        <Item>Модуль обработки</Item>
                        <Item>Терминальное оборудование</Item>
                        <Item>Личный кабинет</Item>
                        <Item>Хранилище персональных данных</Item>
                    </Grid>
                </RightSide>
            </Row>
        </Wrapper>
    )
}

export default SectionOutsoursing
