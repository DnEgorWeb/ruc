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
    }

    li {
        display: flex;
        position: relative;
        margin: 10px 10px 10px 56px;
        line-height: 1.7;
        font-size: 13px;
        
        @media (min-width: ${BREAKS.SM}px) {
            margin-bottom: 40px;
            flex: 0 0 33%;
            font-size: 14px;
        }
    
        @media (min-width: ${BREAKS.MD}px) {
            margin: 30px 30px 50px 70px;
        }

        @media (min-width: ${BREAKS.LG}px) {
            flex: 0 0 22%;
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

class SectionMobilePayments extends Component {
    state = {
        tab: 'description',
        list: {
            description: [
                `Важным преимуществом данного решения является возможность
                пользоваться обезличенным электронным кошельком Платежной системы REXPAY`,
                `Подключение новых поставщиков из любых регионов производится по
                запросу банка бесплатно и в кратчайшие сроки`,
                `Наряду с рассылкой сообщений о транзакции или балансе карты
                возможно распространение рекламной и иной информации Банка`,
                `Сервис «Мобильные платежи» предполагает обязательное СМС- информирование Клиента
                и полностью соответствует требованиям Законодательства РФ и ЦБ РФ (ФЗ-161)`
            ],
            payment: [
                'При помощи мобильного приложения для ОС Google Android и Apple IOS',
                'Используя СМС-сообщения заданного формата',
                'Через Личный кабинет на сайте Вашего Банка'
            ],
            scope: [
                'Предоставление Клиенту современного сервиса ДБО в бесперебойном круглосуточном режиме',
                'Получение дохода за счёт комиссии от проведения платежей Клиентом и платы за подключение этого сервиса',
                'Продажу виртуальных и пластиковых карт новым Клиентам',
                'Укрепление лояльности Ваших Клиентов в результате предоставления им большего комфорта и удобства',
                'Повышение оборота по картам',
                'Снижение загрузки офисов Банка за счёт осуществления Клиентами платежей самостоятельно в удалённом доступе'
            ],
            service: [
                'Подключиться к услуге через банкомат, используя свою банковскую карту',
                'Получить доступ к сервису «Мобильные платежи» на сайте сервиса «Мобильные платежи» вашего банка'
            ]
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
                <SectionTitle number="7" id="mobPayment">Мобильные платежи</SectionTitle>

                <TabRow>
                    <Tab
                        className={ tab === 'description' ? 'active' : '' }
                        onClick={ this.tabClick.bind(null, 'description') }
                    >ОПИСАНИЕ</Tab>
                    <Tab
                        className={ tab === 'payment' ? 'active' : '' }
                        onClick={ this.tabClick.bind(null, 'payment') }
                    >ПРОВЕДЕНИЕ ПЛАТЕЖА</Tab>
                    <Tab
                        className={ tab === 'scope' ? 'active' : '' }
                        onClick={ this.tabClick.bind(null, 'scope') }
                    >ВОЗМОЖНОСТИ</Tab>
                    <Tab
                        className={ tab === 'service' ? 'active' : '' }
                        onClick={ this.tabClick.bind(null, 'service') }
                    >ПОДКЛЮЧЕНИЕ УСЛУГИ</Tab>
                </TabRow>

                <Description>
                    <strong>
                        Сервис «Мобильные платежи» позволяет физическим лицам оплачивать различные
                        услуги, переводить денежные средства и совершать другие операции с банковской карты
                        или электронного кошелька при помощи мобильного телефона, а также любого
                        компьютера/планшета с доступом в Интернет. Это удобно и экономит время.
                    </strong>
                </Description>
                <ul>{ list[tab].map((item, i) => <li key={i}>{item}</li>) }</ul>
            </Wrapper>
        )
    }
}

export default SectionMobilePayments
