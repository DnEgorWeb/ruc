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
    color: #ffffff;
    ${Description} {
        margin-top: 50px;
    }
    ${SectionTitle} {
        margin-bottom: 30px;
        
        @media (min-width: ${BREAKS.SM}px) {
            margin-bottom: 50px;
        }
    
        @media (min-width: ${BREAKS.MD}px) {
            margin-bottom: 60px;
        }

    }

    ${Tab} {
        color: #ffffff;

        &.active {
            color: #7ad513;
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
        justify-content: flex-start;
        padding: 0px 0 0 0;
        flex-wrap: wrap;
        margin: 0 -10px;

        @media (min-width: ${BREAKS.SM}px) {
            padding: 0px 0 0 0;
        }
    
        @media (min-width: ${BREAKS.MD}px) {
            padding: 0px 0 0 0;
        }
    }

    p {
        color: #ffffff;
        
        @media (min-width: ${BREAKS.MD}px) {
            font-size: 18px;
        }

    }
    ${Row} + ${Row} {
        margin-top: 30px;   
        justify-content: space-between;
        
        @media (min-width: ${BREAKS.SM}px) {
            margin-top: 50px;
        }
    
        @media (min-width: ${BREAKS.MD}px) {
            margin-top: 120px;
        }

    }

    h4, h5 {
        color: #ffffff;
        font-weight: 500;
    }

    h4 {
        font-size: 13px;
        margin-bottom: 20px;
        
        @media (min-width: ${BREAKS.SM}px) {
            font-size: 18px;
            margin-bottom: 37px;
        }
    
        @media (min-width: ${BREAKS.MD}px) {
            font-size: 26px;
            margin-bottom: 60px;
        }

    }

    h5 {
        font-size: 13px;
        
        @media (min-width: ${BREAKS.SM}px) {
            font-size: 18px;
        }
    
        @media (min-width: ${BREAKS.MD}px) {
            margin-bottom: 30px;
        }

    }

    li {
        display: flex;
        position: relative;
        margin: 10px 10px 10px 10px;
        line-height: 1.7;
        font-size: 13px;
        color:#fff;
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
            filter: brightness(6);
            @media (min-width: ${BREAKS.MD}px) {
               left: -70px;
            }
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
        tab: 'fraudcard',
        list: {
            fraudcard: {
                description: [ 
                    `Сервис «FRAUD GUARD» предствляет собой комплекс информационно-технологических услуг, оказываемых компанией для Банка. Основная цель Сервиса «FRAUD GUARD» — предоставление Вашему Банку возможностей мониторинга по заранее установленным критериям, автоматического выявления, препятствования и блокирования подозрительных транзакций, торговых точек, терминалов и активностей, а также оперативного автоматического информирования уполномоченных сотрудников Вашего Банка по настроенным событиям`
                ],
                title: `Возможности, предоставляемые сервисом «FRAUD GUARD»`,
                list: [
                    `Автоматическая проверка транзакций в соответствии с установленными правилами и критериями`,
                    `Изменение статусов карт на основе результатов оценки рисков транзакций`,
                    `Online обработка данных`,
                    `Настройка Правил анализа транзакций индивидуально для Вашего Банка`
                ]
            },
            customersupport: {
                description: [ 
                    `Cервис «CUSTOMER SUPPORT» — это круглосуточный прием и обработка запросов держателей карт банков и уполномоченных сотрудников банков Службой поддержки Процессинговой компании Рукард`
                ],
                title: `В рамках предоставления сервиса «Customer Support» сотрудники Службы поддержки оказывают следующие услуги`,
                list: [
                    `Предоставление информации о произведенных авторизациях по картам и электронным кошелькам`,
                    `Блокировка карт по обращению владельцев, в случае отсуствия технической возможности на стороне Банка`,
                    `Предоставление информации об актуальном остатке по карте`,
                    `Блокировка электронных кошельков в рамках сервиса «Оператор электронных кошельков»`,
                    `Блокировка учетной записи ДБО сервиса «i-Touch»`,
                    `Разблокировка/изменение статуса карт, в случае отсутствия технической возможности на стороне Банка`
                ]
            },
            threedsecure: {
                description: [ 
                    `Cервис 3-D secure — это услуги по применению технологии 3-D Secure в рамках программ платежных систем при совершении операций оплаты товаров (работ, услуг) на сайтах электронной коммерции в сети Интернет с использованием банковских и платежных карт`,
                    `Процессинговая компания Рукард обеспечивает исполнение следующих программ платежных систем — программа «Verified» by Visa платежной системы Visa Inc., программа «MasterCard SecureCode» платежной системы MasterCard WW, программа «MirAccept» платежной системы Мир, а так же UnionPay Online Payment платежной системы UnionPay Int`
                ],
                title: `В рамках предоставления данного сервиса Процессинговая компания Рукард предоставляет следующие услуги`,
                list: [
                    `Администрирование сервера Access Control Server`,
                    `Добавление в регистрационную базу Процессинговой компании Рукард сервиса 3-D Secure для Банка`,
                    `Загрузка CAVV/AVV ключей в HSM Процессинговой компании Рукард`,
                    `Создание виртуальной структуры для аутентификации клиента во время совершения операций`,
                    `Создание конфигураций настроек Банка`,
                    `Сопровождение проекта в ПС`,
                    `Направление в ПС заявок на подключение БИНов Банка к сервису 3-D Secure`
                ]
            },
            smsservice: {
                description: [ 
                    `SMS-сервис позволяет получить информацию обо всех авторизациях по платежной карте в реальном времени, а также иную информацию, в рамках услуг, предусмотренных договором`
                ],
                title: `С помощью «СМС-Сервиса» клиент-держатель карты может воспользоваться следующими типами услуг`,
                list: [
                    `Получение сообщения о подключении услуги`,
                    `Уведомления об операциях (авторизациях) по карте`,
                    `Уведомление об увеличении доступного лимита по карте`,
                    `Запрос статуса и доступного лимита по карте`,
                    `Блокировка и разблокировка карт`
                ]
            },
        }
    }

    tabClick = (activeTab) => {
        this.setState({ tab: activeTab });
    }

    render() {
        const p = this.props;
        const { list, tab } = this.state;

        return (
            <Wrapper type="blue" data-type="blue" { ...p }>
                <SectionTitle number="9" id="rucardServices">Эквайринг</SectionTitle>

                <TabRow>
                    <Tab
                        className={ tab === 'fraudcard' ? 'active' : '' }
                        onClick={ this.tabClick.bind(null, 'fraudcard') }
                    >Технологический сервис «FRAUD GUARD»</Tab>
                    <Tab
                        className={ tab === 'customersupport' ? 'active' : '' }
                        onClick={ this.tabClick.bind(null, 'customersupport') }
                    >Cервис «CUSTOMER SUPPORT»</Tab>
                    <Tab
                        className={ tab === 'threedsecure' ? 'active' : '' }
                        onClick={ this.tabClick.bind(null, 'threedsecure') }
                    >Cервис 3-D secure</Tab>
                    <Tab
                        className={ tab === 'smsservice' ? 'active' : '' }
                        onClick={ this.tabClick.bind(null, 'smsservice') }
                    >SMS-сервис</Tab>
                </TabRow>

                <Descr>
                    { list[tab].description.map((item, i) => <p key={i}>{item}</p>) }
                    <h4>{ list[tab].title }</h4>
                    <ul>{list[tab].list.map((item, i) => <li key={i}>{item}</li>) }</ul>
                </Descr>
            </Wrapper>
        )
    }
}

export default SectionAcquiring
