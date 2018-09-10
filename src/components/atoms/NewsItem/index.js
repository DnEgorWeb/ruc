import React from 'react'
import styled from 'styled-components'
import moment from 'moment'

import BREAKS from '@constants/breakpoints'

const Preview = styled(({url, ...p}) => (
    url && <div {...p}><img src={url} alt="" /></div>
))`
    display: flex;
    align-items: center;
    justify-content: center;

    overflow: hidden;
    padding: 10px;

    height: 150px;

    img{
        display: block;
        margin: auto;

        max-height: 100%;
        max-width: 100%;
    }

    @media (min-width: ${BREAKS.SM}px) {
        height: auto;
        flex: 1 0 220px;
        margin-right: 10px;
    }

    @media (min-width: ${BREAKS.MD}px) {
        background-image: linear-gradient(to bottom, #ffffff, #f7f7f7);
        margin-right: 0;
        height: 247px;
    }
`

const Content = styled.div`
    color: #454444;
    padding: 10px;

    font-size: 13px;
    line-height: 1.54;

    @media (min-width: ${BREAKS.SM}px) {
        font-size: 14px;
        line-height: 1.71;
    }

    @media (min-width: ${BREAKS.MD}px) {
        padding: 70px;
        min-height: 370px;
    }
`

const Date = styled(({date, ...p}) => (
    date && <div {...p}>{moment(date).locale('ru').format('LL')}</div>
))`
    color: #acacac;

    font-size: 13px;
    line-height: 1.54;

    @media (min-width: ${BREAKS.SM}px) {
        font-size: 14px;
        line-height: 1.14;
    }
`

const Title = styled.h4`
    color: #3bacf0;

    font-size: 13px;
    font-weight: 500;
    line-height: 1.25;
    
    margin: 10px 0 20px;

    @media (min-width: ${BREAKS.SM}px) {
        font-size: 16px;
    }

    @media (min-width: ${BREAKS.MD}px) {
        font-size: 18px;
        margin: 1.5rem 0;
    }
`

const NewsItem = styled(({preview, children, title, date, ...p}) => (
    <article {...p}>
        {preview && <Preview url={preview} />}
        <Content>
            <Date date={date} />
            <Title>{title}</Title>

            {children}
        </Content>
    </article>
))`
    background-color: #ffffff;
    border-radius: 3px;
    box-shadow: 0 20px 70px 0 rgba(0, 0, 0, 0.07);

    margin-bottom: 1rem;
    
    font-family: Roboto, sans-serif;

    @media (min-width: ${BREAKS.SM}px) {
        display: flex;
    }

    @media (min-width: ${BREAKS.MD}px) {
        display: block;
        margin-bottom: 0;

        min-height: 615px;
        width: calc(33% - 50px);
    }
`

export default NewsItem
