import React from 'react'
import styled from 'styled-components'

import BREAKS from '@constants/breakpoints'

import {
    Button,
    Section,
    Container,
    SectionTitle,
} from '@components'




class SectionConnect extends React.Component {
    scrollDown = (e) => {
        e.preventDefault()

        const $el = document.querySelector('#scrollToCalc')
        if($el && 'scrollIntoView' in $el) {
            $el.scrollIntoView({ behavior: 'smooth' })
        }
    }
    render(){
        const Steps = styled.ul`
            margin: 0 0 30px;
            padding: 0;

            > li {
                display: flex;
                align-items: flex-start;
                margin-top: 25px;

                position: relative;
                
                &::before{
                    content: '';
                    display: none;
                    background: url('${require('./images/processing/arrow.svg')}') center no-repeat;

                    height: 11px;
                    width: 18px;
                    
                    position: absolute;
                    
                    transform: rotateZ(90deg);
                    left: 21px; // (60px - 18px) / 2
                    top: 80px; // 60px + 20px
                }

                &:not(:last-child)::before{
                    display: block;
                }

                strong {
                    color: #65b444;
                    display: block;
                    font-size: 13px;
                    font-weight: 500;
                    line-height: 1.15;

                    margin-bottom: 1em;
                }

                p {
                    color: #454444;
                    font-size: 13px;
                    line-height: 1.54;
                }
            }

            @media (min-width: ${BREAKS.SM}px) {
                margin-bottom: 40px;

                > li {
                    min-height: 170px; // 130px + 20px + 20px

                    &::before{
                        height: 19px;
                        width: 32px;

                        left: 49px; // (130px - 32px) / 2
                        top: 150px; // 130px + 20px
                    }

                    strong {
                        font-size: 18px;
                        font-weight: normal;
                        line-height: 1.17;
                    }

                    p {
                        font-size: 14px;
                        line-height: 1.71;
                    }
                }
            }

            @media (min-width: ${BREAKS.MD}px) {
                display: flex;
            
                margin: 0 -70px;
                padding: 0;
                
                > li {
                    display: block;
                    margin: 0 70px;
                    min-height: 0;

                    &::before{
                        display: block;

                        height: 22px;
                        width: 38px;

                        top: 80px; // 160px / 2
                        left: -108px; // -38px - 70px
            
                        transform: translate3d(0, -50%, 0);
                    }

                    &:first-child::before{
                        display: none;
                    }

                    strong {
                        font-size: 20px;
                        font-weight: normal;
                        line-height: 1.2;
                    }

                    p {
                        font-size: 16px;
                        line-height: 1.63;
                    }
                }
            }
        `

        Steps.Icon = styled.div`
            border-radius: 60px;
            display: block;
            flex: 0 0 auto;

            margin-right: 20px;

            height: 60px;
            width: 60px;

            @media (min-width: ${BREAKS.SM}px) {
                border-radius: 130px;

                height: 130px;
                width: 130px;
            }

            @media (min-width: ${BREAKS.MD}px) {
                border-radius: 160px;

                margin-right: 0;
                margin-bottom: 50px;

                height: 160px;
                width: 160px;
            }
        `


        const SectionConnect = styled(Section)`
            background: #f7f7f7;
            display: flex;
            
            ${Container} {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                align-items: flex-start;
            }

            ${SectionTitle} {
                color: #949494;
            }
            
            @media (min-width: ${BREAKS.MD}px) {
                ${Button} {
                    font-size: 16px;
                    width: 300px;
                }
            }
        `
        return (
            <SectionConnect>
                <SectionTitle number="2">Как подключить процессинг?</SectionTitle>

                <Steps>
                    <li>
                        <Steps.Icon>
                            <img src={require('./images/processing/icon-01.svg')} alt="" />
                        </Steps.Icon>
                        <div>
                            <strong>Рассчитайте стоимость</strong>
                            <p>Воспользуйтесь калькулятором для начала расчета стоимости обслуживания процессинга</p>
                        </div>
                    </li>
                    <li>
                        <Steps.Icon>
                            <img src={require('./images/processing/icon-02.svg')} alt="" />
                        </Steps.Icon>
                        <div>
                            <strong>Заполните форму</strong>
                            <p>Укажите контактные данные и менеджер свяжется с Вами в течение рабочего дня</p>
                        </div>
                    </li>
                    <li>
                        <Steps.Icon>
                            <img src={require('./images/processing/icon-03.svg')} alt="" />
                        </Steps.Icon>
                        <div>
                            <strong>Выберите тариф</strong>
                            <p>На основе показателей Вашего бизнеса будут сформированы персональные тарифы</p>
                        </div>
                    </li>
                    <li>
                        <Steps.Icon>
                            <img src={require('./images/processing/icon-04.svg')} alt="" />
                        </Steps.Icon>
                        <div>
                            <strong>Получите сертификат</strong>
                            <p>Прохождение сертификации без задержек в МПС при содействии Рукард</p>
                        </div>
                    </li>
                </Steps>

                <Button.Link filled to="#" onClick={this.scrollDown}>Рассчитать стоимость</Button.Link>
            </SectionConnect> 
        )
    }
    
}

export default SectionConnect