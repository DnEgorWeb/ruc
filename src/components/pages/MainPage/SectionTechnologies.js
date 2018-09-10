import React from 'react'
import styled, {css} from 'styled-components'
import BREAKS from '@constants/breakpoints'

import {
    Button,
    Section,
    Container,
    SectionTitle,
} from '@components'

const Nav = styled.nav`
    margin-bottom: 30px;

    > li {
        display: inline-block;
        vertical-align: middle;
        text-transform: uppercase;

        color: #ffffff;
        cursor: pointer;
        font-size: 11px;
        font-weight: 500;
        line-height: 1.17;
        
        margin-right: 16px;
        
        &:hover {
            text-decoration: underline;
        }
        
        &.active {
            color: #7ad513;
        }
    }
    
    @media (min-width: ${BREAKS.SM}px) {
        margin-bottom: 100px;
    
        > li {
            font-size: 16px;
            margin-right: 20px;
        }
    }
    
    @media (min-width: ${BREAKS.MD}px) {
        > li {
            font-size: 18px;
            margin-right: 40px;
        }
    }
`

const Slider = styled.div`
    display: flex;
    flex-direction: column;
        
    @media (min-width: ${BREAKS.SM}px) {
        flex-direction: row;
    }
`

Slider.Items = styled.div`
    @media (min-width: ${BREAKS.SM}px) {
         margin-left: 30px;
    }
`

Slider.Images = styled.div`
    height: 276px;
    position: relative;
    display: flex;
    align-items: center;
    
    > img {
        max-height: 100%;
        max-width: 100%;
    
        display: none;
        
        transition: opacity .3s ease;

        &.active {
            display: block;
        }
    }
       
    @media (min-width: ${BREAKS.SM}px) {
        height: 320px;
        max-height: 320px;
        min-width: 370px;
    }

    @media (min-width: ${BREAKS.MD}px) and (max-width: 1439px) {
        height: 568px;
        max-height: 568px;
        width: 33%;
        flex: 1 0 auto;
        
    }

    @media (min-width: ${BREAKS.LG}px) {
        height: 568px;
        max-height: 568px;
        width: 660px;
        flex: 1 0 auto;
    }
`

Slider.Item = styled.div`
    position: relative;
    top: 0;
    left: 0;
    
    transition: opacity .3s ease;
    pointer-events: none;
    display: none;
    
    ${p => p.active && css`
        display: block;
        pointer-events: auto;
    `}
    @media (min-width: ${BREAKS.MD}px) and (max-width: 1439px) {
        padding: 0 50px;
    }
    @media (min-width: ${BREAKS.LG}px) {
        padding: 0 140px;
    }
`

const Wrapper = styled(Section)`
    color: #ffffff;
    display: flex;
    overflow: hidden;
    position: relative;
    
    ${Container} {
        display: flex;
        flex-direction: column;
    }

    ${SectionTitle} {
        margin-bottom: 24px;
    }

    img {
        position: relative;
        pointer-events: none;
    }

    h4 {
        font-size: 18px;
        font-weight: 500;
        font-style: normal;
        line-height: 1.27;
        text-transform: uppercase;
        margin-bottom: 20px;
    }

    p {
        font-size: 13px;
        line-height: 1.89;

        margin: 1rem 0;
    }

    ${Button} {
        width: 100%;
    }
        
    @media (min-width: ${BREAKS.SM}px) {
        ${SectionTitle} {
            margin-bottom: 60px;
        }
        
        h4 {
            margin-bottom: 30px;
        }
        
        p {
            font-size: 14px;
        }
        
        ${Button} {
            width: inherit;
        }
    }
    
    @media (min-width: ${BREAKS.MD}px) {
        h4 {
            font-size: 26px;
            margin-bottom: 60px;
        }
        
        p {
            font-size: 18px;
        }
        
        ${Button} {
            margin-top: 60px;
        }
    }
`


export default class SectionTechnologies extends React.Component {
    state = {
        currentSlide: 3,
    }

    slideChangeHandle = (currentSlide) => this.setState({currentSlide})

    render() {
        const {
            currentSlide,
        } = this.state

        return (
            <Wrapper>
                <SectionTitle number="5">Используемые технологии</SectionTitle>

                <Nav>
                    <li className={currentSlide === 0 ? 'active' : undefined} onClick={() => this.slideChangeHandle(0)}>I-TOUCH</li>
                    <li className={currentSlide === 1 ? 'active' : undefined} onClick={() => this.slideChangeHandle(1)}>RUSOFT RETAIL</li>
                    <li className={currentSlide === 2 ? 'active' : undefined} onClick={() => this.slideChangeHandle(2)}>UMES GATE</li>
                    <li className={currentSlide === 3 ? 'active' : undefined} onClick={() => this.slideChangeHandle(3)}>TERMINAL MANAGER</li>
                    <li className={currentSlide === 4 ? 'active' : undefined} onClick={() => this.slideChangeHandle(4)}>RUSOFT-ABS</li>
                </Nav>

                <Slider>
                    <Slider.Images>
                        <img
                            id="itouch"
                            className={currentSlide === 0 ? 'active' : undefined}
                            src={require('./images/bg-itouch.png')}
                            srcSet={`${require('./images/bg-itouch@2x.png')} 2x, ${require('./images/bg-itouch@3x.png')} 3x`}
                        />
                        <img
                            id="retail"
                            className={currentSlide === 1 ? 'active' : undefined}
                            src={require('./images/bg-retail.png')}
                            srcSet={`${require('./images/bg-retail@2x.png')} 2x, ${require('./images/bg-retail@3x.png')} 3x`}
                        />
                        <img
                            id="umes"
                            className={currentSlide === 2 ? 'active' : undefined}
                            src={require('./images/bg-umes-gate.png')}
                            srcSet={`${require('./images/bg-umes-gate@2x.png')} 2x, ${require('./images/bg-umes-gate@3x.png')} 3x`}
                        />
                        <img
                            id="abs"
                            className={currentSlide === 3 ? 'active' : undefined}
                            src={require('./images/bg-terminal.png')}
                            srcSet={`${require('./images/bg-abs@2x.png')} 2x, ${require('./images/bg-abs@3x.png')} 3x`}
                        />
                        <img
                            id="terminal"
                            className={currentSlide === 4 ? 'active' : undefined}
                            src={require('./images/bg-abs.png')}
                            srcSet={`${require('./images/bg-terminal@2x.png')} 2x, ${require('./images/bg-terminal@3x.png')} 3x`}
                        />
                    </Slider.Images>

                    <Slider.Items>
                        <Slider.Item active={this.state.currentSlide === 0}>
                            <h4>I-TOUCH</h4>
                            <p>i-Touch — совершенная система ДБО, позволяющая держателям банковских карт,
                                эмитированных Банками-Партнерами, оперативно и безопасно совершать
                                любые операции с мобильного телефона и планшетных компьютеров</p>
                            <Button.A target="_blank" href="http://rusoft-company.ru/products/bank/i-touch">Подробнее</Button.A>
                        </Slider.Item>
                        <Slider.Item active={this.state.currentSlide === 1}>
                            <h4>Rusoft retail</h4>
                            <p>Программное решение «RUSOFT RETAIL» предназначено для автоматизации розничного бизнеса в коммерческом банке и представляет собой решение, реализующее весь спектр услуг, предлагаемых банком клиентам.</p>

                            <Button.A target="_blank" href="http://rusoft-company.ru/products/bank/retail">Подробнее</Button.A>
                        </Slider.Item>
                        <Slider.Item active={this.state.currentSlide === 2}>
                            <h4>UMES GATE</h4>
                            <p>Программный продукт «UMES GATE» представляет собой аппаратно-программный комплекс нового поколения, способный обеспечить интеграцию сторонней АБС банка с процессинговым центром и различными сервисами</p>
                            <Button.A target="_blank" href="http://rusoft-company.ru/products/bank/umes">Подробнее</Button.A>
                        </Slider.Item>
                        <Slider.Item active={this.state.currentSlide === 3}>
                            <h4>Terminal manager</h4>
                            <p>«Terminal Manager» — программный продукт предназначен для простого и интуитивно-понятного управления любым терминальным оборудованием. В программном решении предусмотрена возможность обслуживания карт с магнитной полосой, бесконтактных карт, микропроцессорных карт, карт EM в режиме On-Line.</p>
                            <p>Также реализован интерфейс оплаты поставщиков услуг и гибкого формирования отчетных форм для аналитики. Допускаются настройки по рассылке технических статусов банкоматов пользователям с использованием почтовых клиентов X-mail / E-mail. Доступна функция SMS-мониторинга и удаленного управления сетью через WEB-браузер</p>
                            <Button.A target="_blank" href="http://rusoft-company.ru/products/bank/tm">Подробнее</Button.A>
                        </Slider.Item>
                        <Slider.Item active={this.state.currentSlide === 4}>
                            <h4>RUSOFT-ABS</h4>
                            <p>Программное решение «RUSOFT-ABS» предназначено для автоматизации
                                широкого набора современных банковских услуг в многопрофильном Банке</p>
                            <Button.A target="_blank" href="http://rusoft-company.ru/products/bank/abs">Подробнее</Button.A>
                        </Slider.Item>
                    </Slider.Items>
                </Slider>
            </Wrapper>
        )
    }
}
