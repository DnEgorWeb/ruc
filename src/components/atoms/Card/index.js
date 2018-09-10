import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import BREAKS from '@constants/breakpoints'

const Card = styled.div`
    box-shadow: 4px 8px 16px 0 rgba(0, 0, 0, 0.07);
    display: flex;
    background: #ffffff;
    align-items: center;
    transition: box-shadow 0.5s;
    &:hover{
        box-shadow: 12px 24px 48px 0 rgba(0, 0, 0, 0.07)
    }
    img {
        display: block;

        max-height: 40px;

        flex: 0;
        margin-left: 45px;
    }

    @media (min-width: ${BREAKS.SM}px) {
        flex-direction: column;
        align-items: flex-start;
    }

    @media (min-width: ${BREAKS.MD}px) {
        display: flex;
        flex-direction: row;
        flex: 0 0 calc(50% - 60px);
        align-items: center;
        margin: 30px;
        
        img {
            max-height: 70px;
        }
    }
`

Card.Title = styled.div`
    color: #3bacf0;
    font-weight: 500;
    margin-bottom: 1rem;

    @media (min-width: ${BREAKS.SM}px) {
        font-size: 18px;
    }

    @media (min-width: ${BREAKS.MD}px) {
    }
`

Card.Column = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 13px;
    line-height: 1.71;
    padding: 1rem;
    justify-content: center;

    p {
        margin-bottom: 0;
    }

    @media (min-width: ${BREAKS.SM}px) {
        font-size: 14px;
    }

    @media (min-width: ${BREAKS.MD}px) {
        padding: 35px;
    }
`
Card.Link = Card.withComponent(({children, filled, ...p}) => <Link {...p}>{children}</Link>)
Card.A = Card.withComponent(({children, filled, ...p}) => <a {...p}>{children}</a>)
export default Card
