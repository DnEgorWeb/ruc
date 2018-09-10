import React, {Component} from 'react'
import styled from 'styled-components'
import BREAKS from '@constants/breakpoints'

import SpecialSection from './SpecialSection'
import SectionTitle from '@components/atoms/SectionTitle'
import Description from '@components/atoms/Description'
import Row from '@components/atoms/Row'
import Tab from '@components/atoms/Tab'

const Wrapper = styled(SpecialSection)`
    ${SectionTitle} {
        margin-bottom: 30px;
        
        @media (min-width: ${BREAKS.SM}px) {
            margin-bottom: 50px;
        }
    
        @media (min-width: ${BREAKS.MD}px) {
            margin-bottom: 60px;
        }
    }

    ul {
        display: flex;
        flex-wrap: wrap;

        @media (min-width: ${BREAKS.SM}px) {
            margin-top: 20px;
        }
    
        @media (min-width: ${BREAKS.MD}px) {
            margin-top: 50px;
        }
    }

    li {
        display: flex;
        position: relative;
        margin: 10px 10px 10px 56px;
        line-height: 1.7;
        font-size: 13px;
        
        @media (min-width: ${BREAKS.SM}px) {
            font-size: 14px;
            margin-bottom: 40px;
        }
    
        @media (min-width: ${BREAKS.MD}px) {
            margin: 30px 30px 50px 70px;
            flex: 0 0 calc(33% - 100px);
            max-width: 33%;
            min-width: 33%;
        }

        @media (min-width: ${BREAKS.LG}px) {
            flex: 0 0 22%;
            max-width: 33%;
            min-width: 22%;
        }

        :before {
            content: '';
            background: url(${require('../LoyaltyPage/images/znak.svg')}) no-repeat center;
            width: 36px;
            height: 36px;

            position: absolute;
            left: -56px;
            top: 0;
            
            @media (min-width: ${BREAKS.MD}px) {
               left: -70px;
            }
        }
    }
`

const TabRow = styled(Row)`
    flex-direction: row;
`

class SectionSelfService extends Component {
    state = {
        tab: 'description',

        list: {
            description: [
                `Высококвалифицированные
                сотрудники поддержат комфортный
                процесс взаимодействия
                с представителями Вашей организации
                и обеспечат взаимодействие
                с поставщиками`,

                `При получении Вашего запроса, мы
                в кратчайшие сроки оформим заявку на
                поставку оборудования и обеспечим
                контроль ее прохождения у поставщика.
                Наши специалисты согласуют с Вами
                удобную дату и время поставки`,

                `Оборудование может быть доставлено
                Вам уже с предустановленным
                и настроенным программным
                обеспечением`
            ],
            delivery   : [
                'Оформление заявки',
                'Согласование даты поставки',
                'Тестирование установленного банкомата'
            ]
        }
    }

    tabClick = (activeTab) => {
        this.setState({ tab: activeTab });
    }

    render() {
        const p = this.props;
        const tab = this.state.tab;

        return (
            <Wrapper type="grey" data-type="grey" { ...p }>
                <SectionTitle number="8" id="selfMaintain">Устройства самообслуживания</SectionTitle>
                <TabRow>
                    <Tab
                        className={ tab === 'description' ? 'active' : '' }
                        onClick={ this.tabClick.bind(null, 'description') }
                    >ОПИСАНИЕ</Tab>
                    <Tab
                        className={ tab === 'delivery' ? 'active' : '' }
                        onClick={ this.tabClick.bind(null, 'delivery') }
                    >ПОСТАВКА ОБОРУДОВАНИЯ</Tab>
                </TabRow>
                <Description>
                    <p>
                        Процессинговая компания Рукард предлагает терминальное оборудование от ведущих мировых
                        производителей с предустановленным программным обеспечением «СОФИТ ATM WIN»
                        (с поддержкой EMV), «СОФИТ CASH-IN» и т.п.
                    </p>
                </Description>
                <ul>
                    { this.state.list[ tab ].map((item, i) => <li key={ i }>{ item }</li>) }
                </ul>
            </Wrapper>
        )
    }
}

export default SectionSelfService
