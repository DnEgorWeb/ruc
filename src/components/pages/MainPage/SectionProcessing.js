import React from 'react'
import styled, {css} from 'styled-components'

import BREAKS from '@constants/breakpoints'

import Button from '@components/atoms/Button'
import Section from '@components/atoms/Section'
import Container from '@components/atoms/Container'
import SectionTitle from '@components/atoms/SectionTitle'
import ScrollDownBtn from '@components/atoms/ScrollDownBtn'

const VerticalText = styled.span`
    font-size: 13px;
    font-weight: 300;
    color: #ffffff;
    
    opacity: .5;
    
    transform: rotateZ(-180deg);
    writing-mode: tb-rl;
    
    position: absolute;
    top: 0;
    
    ${p => p.side === 'left' ? css`
        left: 1rem;
    ` : css`
        right: 1rem;
    `}

    @media (min-width: ${BREAKS.SM}px) {
        font-size: 14px;
        opacity: 1;
    }

    @media (min-width: ${BREAKS.MD}px) {
        font-size: 18px;
    }
`

export const Wrapper = styled(Section)`
    background: url('${require('./images/grid.svg')}'),
                linear-gradient(315deg,#3db0f5,#2480b7 50%,#1f659a);
    background-size: 89px 51px, auto;
    color: #ffffff;
    text-align: center;
    
    min-height: 0;
    padding: 25px 0;

    ${Container} {
        position: relative;
        z-index: 1;

        img {
            max-width: 100%;
            margin-top: 30px;
            z-index: -1;
        }
    }
    
    ${SectionTitle} {
        font-size: 19px;
        text-align: center;

        margin: 1rem auto 20px;
    }

    ${Button} {
        display: block;
        width: 100%;
    }

    @media (min-width: ${BREAKS.SM}px) {
        padding: 75px 0;

        ${SectionTitle} {
            font-size: 30px;
            max-width: 450px;
            
            margin: 1rem auto 30px;
        }

        ${Button} {
            display: inline-block;
            width: auto;
        }

        ${Container} > div {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    }

    @media (min-width: ${BREAKS.MD}px) {
        min-height: 960px;
        text-align: left;

        ${Container} {
            display: flex;
            align-items: flex-end;

            height: 811px;

            img {
                max-width: calc(100% - 30rem);
                margin-top: 0;

                position: absolute;
                right: 1rem;
                top: 0;
            }

            > div {
                display: block;
            }
        }

        ${SectionTitle} {
            text-align: left;
            font-size: 54px;
            margin-bottom: 60px;
        }
    }
`

class SectionProcessing extends React.Component {
    scrollDown = (e) => {
        e.preventDefault()

        const $el = document.querySelector('#scrollToView')
        if($el && 'scrollIntoView' in $el) {
            $el.scrollIntoView({ behavior: 'smooth' })
        }
    }

    render() {
        return (
            <Wrapper>
                <img
                    src={require('./images/processing.png')}
                    srcSet={`${require('./images/processing@2x.png')} 2x, ${require('./images/processing@3x.png')} 3x`}
                />
                <VerticalText side="left">15 лет успешной работы</VerticalText>
                <VerticalText side="right">По всему миру</VerticalText>

                <div>
                    <SectionTitle>Процессинг банковских карт по всему миру</SectionTitle>
                    <Button.Link to="#">Презентация</Button.Link>
                    <ScrollDownBtn onClick={this.scrollDown} />
                </div>
            </Wrapper>
        )
    }
}

export default SectionProcessing
