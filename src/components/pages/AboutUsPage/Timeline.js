import React from 'react'
import styled, {css} from 'styled-components'

import BREAKS from '@constants/breakpoints'

import Container from '@components/atoms/Container'

const Wrapper = styled.div`
    position: relative;

    &::before {
        background: #74be21;
        display: block;
        content: '';

        width: 2px;
        height: 100%;

        position: absolute;
        left: 45px;
        top: 0;

        transform: translateX(-1px);
    }

    @media (min-width: ${BREAKS.SM}px) {
        &::before {
            left: 80px;
        }
    }

    @media (min-width: ${BREAKS.MD}px) {
        white-space: nowrap;
        margin: 100px 0 0;

        &::before {
            height: 2px;
            width: 100%;

            position: absolute;
            left: 0;
            top: 50%;

            transform: translateY(-1px);
        }

        cursor: grab;
        cursor: -moz-grab;
        cursor: -webkit-grab;

        &:active{
            user-select: none;

            cursor: grabbing;
            cursor: -moz-grabbing;
            cursor: -webkit-grabbing;
        }
    }
`

Wrapper.Items = styled.div`
    @media (min-width: ${BREAKS.MD}px) {
        width: max-content;
    }
`

const h = 205

const Item = styled.div`
    position: relative;
    padding-left: 80px;
    margin-top: 60px;
    min-height: 60px;

    font-size: 13px;

    &:last-child { background: #ffffff; }

    &::before {
        background: #267cb6;
        border-radius: 160px;
        content: '${p => p.year}';
        color: #ffffff;
        display: block;

        font-weight: 300;
        text-align: center;

        line-height: 60px;
        width: 60px;

        position: absolute;
        left: 0;
        top: 0;
        z-index: 1;

        transform: translate3d(0, -30%, 0);
    }

    @media (min-width: ${BREAKS.SM}px) {
        padding-left: 150px;
        margin-top: 130px;
        min-height: 130px;

        font-size: 14px;

        &::before {
            font-size: 30px;

            line-height: 130px;
            width: 130px;
        }
    }

    @media (min-width: ${BREAKS.MD}px) {
        display: inline-block;
        vertical-align: middle;
        padding-left: 0;
        margin-right: 160px;
        margin-top: 0;

        font-size: 16px;

        white-space: nowrap;

        &:last-child { background: transparent; }

        &::before {
            font-size: 40px;

            line-height: 160px;
            width: 160px;

            top: 50%;

            transform: translate3d(-50%, -50%, 0);
        }

            > div {
                position: relative;
                height: 300px;

                &::before, &::after {
                    background: #acacac;
                    content: '';
                    display: block;

                    position: absolute;
                }

                &::before {
                    height: ${h}px;
                    width: 1px;
        
                    left: 3px;
                }

                &::after {
                    border-radius: 7px;

                    height: 7px;
                    width: 7px;

                    left: 0;
                }
            }
    }
`

Item.Top = styled.div`
    @media (min-width: ${BREAKS.MD}px) {
        padding-bottom: ${h + 30}px;
        height: 300px;

        ${p => !p.children && css`&::before, &::after{ display: none !important; }`}

        &::before { bottom: 0; }
        &::after { bottom: ${h}px; }
    }
`

Item.Bottom = styled.div`
    @media (min-width: ${BREAKS.MD}px) {
        padding-top: ${h + 30}px;

        ${p => !p.children && css`&::before, &::after{ display: none !important; }`}

        &::before { top: 0; }
        &::after { top: ${h}px; }
    }
`

Item.Col = styled.div`
    margin-top: 1rem;

    @media (min-width: ${BREAKS.SM}px) {
        margin-top: 25px;
    }

    @media (min-width: ${BREAKS.MD}px) {
        display: inline-block;
        vertical-align: top;
        white-space: normal;
        margin-top: 0;

        width: 300px;

        & + div {
            margin-left: 75px;
        }

        &.large {
            width: 350px;
        }
    }
`


class Timeline extends React.Component {
    state = {
        x: 0,
        clickX: 0,
        w: 0,
        isGrabbing: false,

        lastMouseX: -1,
        lastMouseTime: 0,
        mouseTravel: 0,
    }

    //componentDidMount() { this.startLoop() }
    //componentWillUnmount() { this.stopLoop() }

    startLoop = () => {
        if( !this._frameId ) {
            this._frameId = window.requestAnimationFrame(this.loop);
        }
    }

    stopLoop = () => {
        window.cancelAnimationFrame(this._frameId);
    }

    loop = (time) => {
        const {mouseTravel, lastMouseTime} = this.state
        const speed = Math.round(mouseTravel / (time - lastMouseTime))

        console.log('speed', speed)

        this.setState({ lastMouseTime: time })

        this.frameId = window.requestAnimationFrame(this.loop)
    }

    onMouseDown = (e) => {
        if(window.innerWidth < 1024) return false

        this.setState({
            clickX: e.clientX - this.state.x,
            w: [...this.items.children].reduce((p, el) => p + el.offsetWidth + 160, -160),
            isGrabbing: true
        })
    }

    onMouseUp = () => {
        if(window.innerWidth < 1024) return false

        this.setState({
            isGrabbing: false,
            mouseTravel: 0, // TODO
        })
    }

    onGrab = (e) => {
        const { clickX, w, isGrabbing, mouseTravel, lastMouseX } = this.state

        if(!isGrabbing || window.innerWidth < 1024) return false

        let x = (e.clientX - clickX)
        if(x > 0) {x = 0}
        if(x < -w + 1500) {x = -w + 1500}

        this.setState({
            x,
            lastMouseX: e.clientX,
            mouseTravel: (lastMouseX > -1) ? (mouseTravel + Math.abs(e.clientX - lastMouseX)) : mouseTravel,
        })
    }

    render() {
        return (
            <Wrapper
                onMouseDown={this.onMouseDown}
                onMouseUp={this.onMouseUp}
                onMouseMove={this.onGrab}
            >
                <Container>
                    <Wrapper.Items
                        innerRef={node => this.items = node}
                        style={{transform: `translateX(${this.state.x}px)`}}
                    >
                        <Item year={2002}>
                            <Item.Top />
                            <Item.Bottom>
                                <Item.Col>
                                    Регистрация юридического лица
                                    Процессинговой компании Рукард
                                </Item.Col>
                            </Item.Bottom>
                        </Item>

                        <Item year={2003}>
                            <Item.Top>
                                <Item.Col>
                                    Получен статус процессора в международных
                                    платежных системах Visa Incorporated,
                                    MasterCard Worldwide и Diners Club
                                </Item.Col>

                                <Item.Col>
                                    Процессинговой компанией Рукард получен
                                    статус почетного партнера по приему платежей
                                    ОАО «МТС», а также диплом за активное участие
                                    в развитии региональной сети приема платежей
                                    ОАО «МТС»
                                </Item.Col>
                            </Item.Top>
                            <Item.Bottom>
                                <Item.Col>
                                    Процессинговая компания Рукард начинает
                                    обслуживание эмиссионных и эквайринговых
                                    программ банков-партнеров в международных
                                    платежных системах Visa Incorporated,
                                    MasterCard Worldwide и Diners Club
                                </Item.Col>

                                <Item.Col className="large">
                                    Получена лицензия ФСБ РФ на осуществление
                                    разработки, производства, распространения,
                                    оказания услуг и технического обслуживания
                                    шифровальных (криптографических) средств,
                                    информационных систем и телекоммуникационных
                                    систем с использованием шифровальных
                                    (криптографических) средств
                                </Item.Col>
                            </Item.Bottom>
                        </Item>

                        <Item year={2004}>
                            <Item.Top />
                            <Item.Bottom>
                                <Item.Col>
                                    Процессинговая компания Рукард впервые
                                    выступила в роли системного интегратора
                                    по внедрению автоматизированных банковских
                                    систем и терминалов банковского
                                    самообслуживания
                                </Item.Col>
                            </Item.Bottom>
                        </Item>
                    </Wrapper.Items>
                </Container>
            </Wrapper>
        )
    }
}

export default Timeline
