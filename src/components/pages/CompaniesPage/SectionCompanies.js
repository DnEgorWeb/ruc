import React from 'react'
import styled from 'styled-components'
import BREAKS from '@constants/breakpoints'

import SpecialSection from '../BanksPage/SpecialSection'
import SectionTitle from '@components/atoms/SectionTitle'
import Container from '@components/atoms/Container'
import Button from '@components/atoms/Button'
import ScrollDownBtn from '@components/atoms/ScrollDownBtn'
import {
    MODAL_GET_OFFER,
} from 'constants/Modal'

const Wrapper = styled(SpecialSection)`
    background: url('${require('../MainPage/images/grid.svg')}'),
                linear-gradient(315deg,#3db0f5,#2480b7 50%,#1f659a);
    background-size: 89px 51px, auto;
    padding: 30px 0;
    color: #ffffff;
    text-align: center;

    ${Container} {
        display: flex;
        flex-direction: column;
        align-items: center;

        position: relative;
        z-index: 1;

        img {
            display: block;
            pointer-events: none;

            height: auto;
            max-width: 100%;

            z-index: -1;
        }
    }

    ${SectionTitle} {
        color: #ffffff;
        font-size: 20px;
        line-height: 1.2;
        margin-bottom: 10px;
    }

    p {
        font-size: 13px;
        line-height: 1.54;
        margin-bottom: 1rem;
        max-width: 475px;
    }

    ${Button} {
        width: 100%;
    }

    @media (min-width: ${BREAKS.SM}px) {
        ${Container} {
            > div {
                display: flex;
                flex-direction: column;
                align-items: center;
            }
        }
        
        ${SectionTitle} {
            //
        }

        ${Button} {
            width: auto;
        }
    }

    @media (min-width: ${BREAKS.MD}px) {
        padding: 75px 0;
        text-align: left;

        min-height: 960px;

        ${Container} {
            flex-direction: row;
            align-items: flex-end;

            height: 811px;

            img {
                position: absolute;
                right: 0;
                top: 0;
            }
            
            > div {
                align-items: flex-start;
            }
        }

        ${SectionTitle} {
            font-size: 54px;
            max-width: 650px;
            margin-bottom: 60px;
        }

        p {
            font-size: 18px;
            max-width: 310px;
            margin-bottom: 55px;
            line-height: 1.9;
        }
        
        ${ScrollDownBtn} {
            display: none;
        }
    }
    @media (min-width: ${BREAKS.MD}px) and (max-width: 1439px) {
        ${Container} {
            img {
                width: 75%;
                height: auto
            }
        }
    }
`

class SectionCompanies extends React.Component {
    
    scrollDown = (e) => {
        e.preventDefault()

        const $el = document.querySelector('#scrollToView')
        if ($el && 'scrollIntoView' in $el) {
            $el.scrollIntoView({behavior: 'smooth'})
        }
    }
    openmodal = (e) => {
        e.preventDefault()
        this.props.openModal(MODAL_GET_OFFER)
    }
    render() {
        return (
            <Wrapper type="blue" data-type="blue" {...this.props}>
                <img
                    src={require('./images/organization.png')}
                    srcSet={`${require('./images/organization@2x.png')} 2x, ${require('./images/organization@3x.png')} 3x`}
                />
                <div>
                    <SectionTitle id="companies">Организациям</SectionTitle>
                    <p>
                        Процессинговая компания Рукард предлагает услуги для бизнеса организаций
                    </p>
                    <Button onClick={this.openmodal}>ПОЛУЧИТЬ ПРЕДЛОЖЕНИЕ</Button>

                    <ScrollDownBtn onClick={this.scrollDown} />
                </div>
            </Wrapper>
        )
    }
}

export default SectionCompanies
