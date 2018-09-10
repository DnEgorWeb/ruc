import React from 'react'
import styled, {css} from 'styled-components'
import BREAKS from '@constants/breakpoints'

import {
    Container,
    SectionTitle,
    NewsPreview,
    Dropdown,
} from '@components'

const Wrapper = styled(Container)`
    padding-top: 30px;
    padding-bottom: 10px;

    @media (min-width: ${BREAKS.SM}px) {
        padding-top: 40px;    
    }
    
    @media (min-width: ${BREAKS.MD}px) {
        padding-top: 140px;
        padding-bottom: 140px;
    }

    ${SectionTitle} {
        color: #949494;
    }
`

function NewsPage() {
    return (
        <Wrapper>
            <SectionTitle>Новости</SectionTitle>

            <NewsPreview.Row template={['"a b" "a c"']}>
                <NewsPreview bg={require('./images/1.png')} size="lg" variant="full">
                    <time>01 ноября 2017</time>

                    <div>
                        <h4>Аудит пройден</h4>
                        <p>Компания «РУКАРД» в очередной раз прошла
                            процедуру аудита по требованиям PCI PIN
                            Security Requirements 2.0 и успешно
                            подтвердила выполнение всех применимых
                            требований по безопасной обработке данных
                            платежных карт.</p>
                    </div>
                </NewsPreview>

                <NewsPreview bg={require('./images/2.png')} size="sm" variant="left">
                    <time>31 августа 2017</time>

                    <div>
                        <h4>Миграция завершилась</h4>
                        <p>Компания РУКАРД осуществила
                            миграцию процессингового центра
                            в новый высокотехнологичный центр
                            хранения и обработки данных.</p>
                    </div>
                </NewsPreview>

                <NewsPreview bg={require('./images/3.png')} size="sm" variant="left">
                    <time>20 декабря 2016</time>

                    <div>
                        <h4>Новый партнер</h4>
                        <p>При поддержке Процессинговой
                            компании Рукард, Банк Казани
                            запустил эмиссию и эквайринг карт
                            национальной платежной системы.</p>
                    </div>
                </NewsPreview>
            </NewsPreview.Row>

            <NewsPreview.Row template={['"a b d"', '"a c d"']}>
                <NewsPreview bg={require('./images/2.png')} size="sm" variant="full">
                    <time>14 июля 2016</time>

                    <div>
                        <h4>PCI DSS</h4>
                        <p>В ОЧЕРЕДНОЙ РАЗ ПРОЦЕССИНГОВАЯ КОМПАНИЯ РУКАРД ПОДТВЕРДИЛА СООТВЕТСТВИЕ ВЫСОКИМ ТРЕБОВАНИЯ СТАНДАРТА PCI DSS</p>
                    </div>
                </NewsPreview>
                <NewsPreview bg={require('./images/2.png')} size="sm" variant="left">
                    <time>17 декабря 2015</time>

                    <div>
                        <h4>Расширение географии</h4>
                        <p>ПРОЦЕССИНГОВАЯ КОМПАНИЯ РУКАРД РАСШИРИТ ГЕОГРАФИЮ БИЗНЕСА БЛАГОДАРЯ ИНВЕСТИЦИЯМ НОВЫХ ВЛАДЕЛЬЦЕВ</p>
                    </div>
                </NewsPreview>
            </NewsPreview.Row>
        </Wrapper>
    )
}

export default NewsPage
