import React from 'react'
import styled from 'styled-components'
import BREAKS from '@constants/breakpoints'

import {
    Section,
    SectionTitle,
    NewsPreview,
} from '@components'

const SectionNewsItem = styled(Section)`
    background: #ffffff;

    ${SectionTitle} {
        color: #949494;
    }
`

const DateBlock = styled.div`
    font-size: 13px;
    line-height: 1.56;
    color: #454444;
    margin-top: 12px;
    
    @media (min-width: ${BREAKS.SM}px) {
        margin-top: 25px;
        font-size: 14px;
    }

    @media (min-width: ${BREAKS.MD}px) {
        margin-top: 27px;
        font-size: 18px;
    }
`

const Image = styled(({style, className, ...p}) => (
    <div {...{style, className}}>
        <img {...p} />
    </div>
))`
    overflow: hidden;
    margin: 20px 0;
    max-height: 200px;
    
    img {
        width: 100%;
        object-fit: cover;
    }
        
    @media (min-width: ${BREAKS.SM}px) {
        margin: 25px 0;
        max-height: 280px;
    }

    @media (min-width: ${BREAKS.MD}px) {
        margin: 60px 0 140px 0;
        max-height: 660px;
    }
`

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    @media (min-width: ${BREAKS.MD}px) {
        flex-direction: row;
        margin: 0 -90px;
    }
`

const Item = styled.div`
    flex: 2 0 auto;
    color: #454444;
    
    display: flex;
    flex-direction: column;
    margin-bottom: 44px;
    
    @media (min-width: ${BREAKS.MD}px) {
        margin: 0 90px;
        flex: 2 0 0;
    }
    
    h4 {
        font-size: 16px;
        font-weight: 500;
        line-height: 1.27;
        text-transform: uppercase;
        margin-bottom: 20px;
        
        @media (min-width: ${BREAKS.SM}px) {
            font-size: 18px;
            line-height: 1.83;
        }
    
        @media (min-width: ${BREAKS.MD}px) {
            margin-bottom: 60px;
            font-size: 26px;
        }
    }
    
    p {
        font-size: 13px;
        line-height: 1.54;
        white-space: normal;
        margin-bottom: 2rem;
        
        @media (min-width: ${BREAKS.SM}px) {
            font-size: 14px;
        }
    
        @media (min-width: ${BREAKS.MD}px) {
            font-size: 18px;
            line-height: 1.9;
        }
    }
`

const ActualNews = styled.div`
    flex: 1 0 auto;
    
    @media (min-width: ${BREAKS.MD}px) {
        margin: 0 90px;
        flex: 1 0 0;
    }
    
    ${SectionTitle} {
        margin-bottom: 30px;
        
        @media (min-width: ${BREAKS.MD}px) {
            margin-bottom: 110px;
        }
    }
`

const Sign = styled.div`
    color: #949494;
    width: 240px;
    white-space: normal;
`

function NewsItemPage() {
    return (
        <SectionNewsItem>
            <SectionTitle>
                Аудит пройден
            </SectionTitle>
            <DateBlock>01 ноября 2017</DateBlock>
            <Image src={require('./images/image.png')} />
            <Wrapper>
                <Item>
                    <h4>Подзаголовок</h4>
                    <p>
                        Ab incimus daesed que volesto experibeate num inverempore mi, cus sit ene essitaqui dipidi con con
                        nectinv eliatio volor molupturem harum dolumenis ma cus aceptur mincienis rempe net, con re aut exped
                        que nonet, quo occupiet eum etur?
                    </p>
                    <p>
                        Inciur, sit qui dem eoste et adiae natem. Eprovid et provit volorest omnit aut fuga. Ibus dolorestota natur
                        sam, sandebi squata isquiat ioritibus aliqui bercia cum, offictur, ut fugia velicae rchillest facculparum
                        expere voluptatis dolo volorem quatiamus niet maximo et earum inum quam quisciamenia volori audit vid
                        eum elibus autet vollit, quatisim initatem quam eum denis aut libus adit.
                    </p><p>
                        Omnist es eum everit maximendae dolor am quisincia acima del et dolumquate vit autecto beatate
                        ceperfe rumquas aut rerum aliciissi tem rem ident eatem ipsum essiti dolupta tetur?
                    </p>
                    <Sign>
                        Подпись подпись подпись подпись подпись подпись подпись
                    </Sign>
                </Item>
                <ActualNews>
                    <SectionTitle>
                        Актуальные новости
                    </SectionTitle>
                    <NewsPreview bg={require('../NewsPage/images/3.png')} size="sm" variant="left">
                        <time>20 декабря 2016</time>

                        <div>
                            <h4>Новый партнер</h4>
                            <p>При поддержке Процессинговой
                                компании Рукард, Банк Казани
                                запустил эмиссию и эквайринг карт
                                национальной платежной системы.</p>
                        </div>
                    </NewsPreview>
                </ActualNews>
            </Wrapper>
        </SectionNewsItem>
    )
}

export default NewsItemPage
