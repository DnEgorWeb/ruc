import React from 'react'
import styled from 'styled-components'

import BREAKS from '@constants/breakpoints'

import {
    Button,
    NewsItem,
    Section,
    Container,
    SectionTitle,
} from '@components'

const News = styled.div`
    @media (min-width: ${BREAKS.MD}px) {
        display: flex;
        margin: 0 -30px;

        ${NewsItem} {
            margin: 0 30px;
        }
    }
`

const SectionNews = styled(Section)`
    background: #ffffff;

    ${SectionTitle} {
        color: #949494;
        margin-bottom: 20px;

        @media (min-width: ${BREAKS.SM}px) {
            margin-bottom: 50px;
        }

        @media (min-width: ${BREAKS.MD}px) {
            margin-bottom: 140px;
        }
    }
`


export default () => (
    <SectionNews>
        <SectionTitle number="6">Новости</SectionTitle>

        <News>
            <NewsItem
                preview={require('./images/news/1.svg')}
                date={new Date('Jan 10 2017')}
                title="Безопасность ваших карт в надежных руках"
            >
                <p>Компания «РУКАРД» в очередной раз прошла процедуру аудита по требованиям PCI PIN Security Requirements 2.0 и успешно подтвердила выполнение всех применимых требований по безопасной обработке данных платежных карт.</p>
            </NewsItem>
            <NewsItem
                preview={require('./images/news/2.svg')}
                date={new Date('Jan 10 2017')}
                title="Миграция завершилась"
            >
                <p>Компания РУКАРД осуществила миграцию процессингового центра в новый высокотехнологичный центр хранения и обработки данных. Данная миграция позволит значительно увеличить комплексную отказоустойчивость системы.</p>
            </NewsItem>
            <NewsItem
                preview={require('./images/news/3.svg')}
                date={new Date('Jan 10 2017')}
                title="Запуск эмиссии и эквайринга НПС"
            >
                <p>ПРИ ПОДДЕРЖКЕ ПРОЦЕССИНГОВОЙ КОМПАНИИ РУКАРД,ООО КБЭР «БАНК КАЗАНИ» ЗАПУСТИЛ ЭМИССИЮ И ЭКВАЙРИНГ КАРТ НАЦИОНАЛЬНОЙ ПЛАТЕЖНОЙ СИСТЕМЫ</p>
            </NewsItem>
        </News>
    </SectionNews>
)
