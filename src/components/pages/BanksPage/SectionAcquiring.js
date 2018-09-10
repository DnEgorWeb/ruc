import React, {Component} from 'react'
import styled from 'styled-components'
import BREAKS from '@constants/breakpoints'

import SpecialSection from './SpecialSection'
import SectionTitle from '@components/atoms/SectionTitle'
import Column from '@components/atoms/Column'
import Row from '@components/atoms/Row'
import Tab from '@components/atoms/Tab'
import Description from '@components/atoms/Description'


const Wrapper = styled(SpecialSection)`
    background: #ffffff;

    ${SectionTitle} {
        color: #949494;
        margin-bottom: 30px;
        
        @media (min-width: ${BREAKS.SM}px) {
            margin-bottom: 35px;    
        }
    
        @media (min-width: ${BREAKS.MD}px) {
            margin-bottom: 60px;
        }
    }

    ${Column} {
        margin: 30px 0 0;
        
        @media (min-width: ${BREAKS.SM}px) {
            margin: 50px 0  20px;        
        }
    
        @media (min-width: ${BREAKS.MD}px) {
            margin: 110px 0;
        }
    }

    h4 {
        font-size: 14px;
        font-weight: 500;
        
        @media (min-width: ${BREAKS.SM}px) {
            font-size: 16px;
        }
    
        @media (min-width: ${BREAKS.MD}px) {
            font-size: 18px;
        }
    }

    ul {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 20px 0 0 0;
        flex-wrap: wrap;
        margin: 0 -10px;

        @media (min-width: ${BREAKS.SM}px) {
            padding: 30px 0 0 0;
        }
    
        @media (min-width: ${BREAKS.MD}px) {
            padding: 80px 0 0 0;
        }
    }

    li {
        display: block;
        font-size: 13px;
        line-height: 1.33;
        color: #74be21;
        margin: 0 10px 20px;
        
        @media (min-width: ${BREAKS.SM}px) {
            font-size: 16px;
        }
    
        @media (min-width: ${BREAKS.MD}px) {
            font-size: 18px;
        }
    }
`
const Descr = styled(Description)`
    flex-direction: column
`
const TabRow = styled(Row)`
    flex-direction: row;
`

class SectionAcquiring extends Component {
    state = {
        tab: 'description',
        list: {
            description: [
                
                `Процессинговый центр Рукард предоставляет возможность реализовывать не только торговый, но и классический эквайринг. Рукард оказывает услуги по сбору и обработке информации об операциях по картам в банкоматах (ATM) и устройствах CASH IN.`,
                `Компания предоставляет услуги по обеспечению удаленного мониторинга и администрированию терминала.`
            ],
            payment: [
                `Подключение терминалов и обслуживание сети`,
                `Сбор и обработка (процессинг) информации об операциях по картам в POS — терминалах, функциональных и информационных киосках, банковских отделениях самообслуживания`,
                `Предоставление отчетности по операциям`,
                `Расширение функционала терминалов`,
                `Технологический клиринг`,
                `24/7 клиентская поддержка`,
                `Возможность постепенного наращивания функционала Back-office ("RUSOFT-RETAIL" + Дополнительные модули) и степени интеграции с процессингом — вплоть до организации Процессинга in house`,
                `Организация поставок терминального оборудования от ведущих поставщиков и терминального ПО`,
                `ПРОЦЕССИНГОВЫЙ ЦЕНТР РУКАРД ПРЕДОСТАВЛЯЕТ ВОЗМОЖНОСТЬ РЕАЛИЗОВЫВАТЬ НЕ ТОЛЬКО ТОРГОВЫЙ, НО И КЛАССИЧЕСКИЙ ЭКВАЙРИНГ. РУКАРД ОКАЗЫВАЕТ УСЛУГИ ПО СБОРУ И ОБРАБОТКЕ ИНФОРМАЦИИ ОБ ОПЕРАЦИЯХ ПО КАРТАМ В БАНКОМАТАХ (ATM) И УСТРОЙСТВАХ CASH IN. ПРОЦЕССИНГОВАЯ КОМПАНИЯ РУКАРД ПРЕДОСТАВЛЯЕТ УСЛУГИ ПО ОБЕСПЕЧЕНИЮ УДАЛЕННОГО МОНИТОРИНГА И АДМИНИСТРИРОВАНИЮ ТЕРМИНАЛА.`
            ],
        }
    }

    tabClick = (activeTab) => {
        this.setState({ tab: activeTab });
    }

    render() {
        const p = this.props;
        const { list, tab } = this.state;

        return (
            <Wrapper type="white" data-type="white" { ...p }>
                <SectionTitle number="9" id="acquiring">Эквайринг</SectionTitle>

                <TabRow>
                    <Tab
                        className={ tab === 'description' ? 'active' : '' }
                        onClick={ this.tabClick.bind(null, 'description') }
                    >ОПИСАНИЕ</Tab>
                    <Tab
                        className={ tab === 'payment' ? 'active' : '' }
                        onClick={ this.tabClick.bind(null, 'payment') }
                    >УСЛУГИ</Tab>
                </TabRow>

                <Descr>
                    <strong>
                        Эквайринг — это услуга, позволяющая принимать пластиковые карты в различных устройствах с целью
                        снятия наличных средств, а так же в качестве средства оплаты товаров и услуг в торговых точках.
                    </strong>
                    { list[tab].map((item, i) => <p key={i}>{item}</p>) }
                </Descr>
                <Descr>
                    <h4>ПОДДЕРЖИВАЕМОЕ ОБОРУДОВАНИЕ</h4>
                    <ul>
                        <li>POS-терминалы</li>
                        <li>M-POS</li>
                        <li>Standalone POS</li>
                        <li>Smart PIN PAD</li>
                        <li>Переносной терминал</li>
                    </ul>
                </Descr>
                

            </Wrapper>
        )
    }
}

export default SectionAcquiring
