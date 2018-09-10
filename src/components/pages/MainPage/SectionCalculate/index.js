import React from 'react'
import styled, {css} from 'styled-components'

require('isomorphic-fetch');

import BREAKS from '@constants/breakpoints'

import Container from '@components/atoms/Container'
import CheckBox from '@components/atoms/CheckBox'
import Section from '@components/atoms/Section'
import SectionTitle from '@components/atoms/SectionTitle'
import InputRange from '@components/atoms/InputRange'
import Input from '@components/atoms/Input'

import Tags                                       from './Tags'
import BreadCrumbs                                from './BreadCrumbs'
import Buttons                                    from './Buttons'
import Slider                                     from './Slider'
import Calculator                                 from './Calculator';

const Wrapper = styled(Section)`
    ${Container} {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        flex: 1;
    }

    ${SectionTitle} {
        margin-bottom: 20px;
    }

    @media (min-width: ${BREAKS.SM}px) {
        display: flex;
        flex-direction: column;
    }
    @media (min-width: ${BREAKS.MD}px) and (max-width: 1439px){
        padding: 140px 0 100px;

        ${SectionTitle} {
            margin-bottom: 0px;
        }
    }
    @media (min-width: ${BREAKS.LG}px) {
        padding: 140px 0 100px;

        ${SectionTitle} {
            margin-bottom: 50px;
        }
    }
`

const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    > * {
        margin-bottom: 10px;
    }

    p {
        color: #fff;
        font-size: 14px;
    }
    
    @media (min-width: ${BREAKS.SM}px) and (max-width: 1023px){
        flex: 0 0 calc(50% - 40px);
        margin: 2rem 20px;

        p {
            margin-left: 40px;
        }
    }

    @media (min-width: ${BREAKS.MD}px) {
        flex: 0 0 20%;
        margin: 2rem 95px;
        
        ${CheckBox}{
            margin-bottom: 30px;
        }
    }
`

const Row = styled.div`
    display: flex;
    @media (min-width: ${BREAKS.MD}px) {
        margin: 0 -95px;
        flex-direction: row;
    }
    @media (min-width: ${BREAKS.SM}px) and (max-width: 1023px) {
        
        flex-direction: row;
        flex-wrap: wrap;
        margin: 0 -20px;
    }

    
`

const ColumnTitle = styled.div`
    font-size: 14px;
    color: #ffffff;
    white-space: normal;
    margin-top: 1rem;
    margin-bottom: 1rem;

    @media (min-width: ${BREAKS.MD}px) {
        font-size: 18px;
        margin-bottom: 30px;
    }
`

const CheckBoxLarge = styled(CheckBox)`
    display: flex;

    i {
        min-width: 24px;
        max-width: 24px;
    }

    > span { font-size: 14px; }

    + p {
        margin-left: 40px;
        margin-bottom: 1rem;
    }


    @media (min-width: ${BREAKS.MD}px) {
        display: block;

        > span { font-size: 18px; }
        + p {
            margin-bottom: 0;
        }
    }
`

const Price = styled.div`
    font-size: 40px;
    font-weight: 300;
    line-height: 1.18;
    text-align: left;
    color: #8fe113;

    @media (min-width: ${BREAKS.MD}px) {
        flex: 0 0 auto;
    }
`

const Form = styled.form`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    flex: 0 0 460px;
    background: #ffffff;
    border-radius: 3px;
    box-shadow: 0 7px 16px 0 rgba(0, 0, 0, 0.16);
    padding: 1rem;
    
    > * {
        margin-bottom: 2rem;
    }
    @media (min-width: ${BREAKS.MD}px) and (max-width: 1439px) {
        padding: 40px;
        flex: 0 0 auto;
    }
    @media (min-width: ${BREAKS.LG}px) {
        padding: 70px;
        flex: 0 0 auto;
    }
`


class SectionCalculate extends React.Component {
    state = {
        currentSlide: 0,

        solution: '',

        status       : '',
        business     : [],
        businessIds  : [],
        paysystems   : [],
        paysystemsIds: [],

        countOfCards             : 1,
        countOfTerminals         : 1,
        countOfCardOperations    : 1,
        countOfTerminalOperations: 1,
        cardsTurnover            : 1,
        terminalsTurnover        : 1,

        additional   : [],
        additionalIds: [],

        user: {}
    }

    componentWillUnmount() {
        delete this.calculator;
    }

    handlePrev = () => {
        let currentSlide = this.state.currentSlide - 1

        if (this.state.currentSlide < 0) {
            currentSlide = 0
        }

        this.setState({currentSlide})
    }

    handleNext = () => {
        const currentSlide = this.state.currentSlide + 1

        this.setState({currentSlide})
    }

    formatLabel = (v) => {
        let num = v.toString()
        const reg = /(-?\d+)(\d{3})/
        const nbsp = String.fromCharCode(160)

        while(reg.test(num)) {
            num = num.replace(reg, '$1' + nbsp + '$2');
        }

        return num
    }

    onChange = (event) => {
        const target  = event.target;
        const value   = target.value;
        const checked = target.checked;
        const name    = target.name;
        const dataId  = target.getAttribute('data-id');

        if (target.type === 'checkbox') {
            if (checked) {
                const arrValues = this.state[ name ] ? this.state[ name ].concat([ value ]) : [ value ];
                const arrIds    = this.state[ `${name}Ids` ] ? this.state[ `${name}Ids` ].concat([ dataId ]) : [ dataId ];

                this.setState({
                    [name]        : arrValues,
                    [`${name}Ids`]: arrIds
                })
            } else {
                this.setState({
                    [name]:        this.state[name].filter(v => v !== value),
                    [`${name}Ids`]: this.state[`${name}Ids`].filter(id => id !== dataId),
                })
            }
        } else {
            this.setState({
                [name]: value
            });
        }
    }

    getTags = () => {
        const {
            solution,
            status,
            business,
            paysystems,
            countOfCards,
            countOfTerminals,
            countOfCardOperations,
            countOfTerminalOperations,
            cardsTurnover,
            terminalsTurnover,
            additional,
        } = this.state;

        const tags = []
        solution && tags.push(solution)
        status && status !== 'Нет' && tags.push(status)
        tags.push(...business)
        tags.push(...paysystems)
        tags.push(...additional)

        return tags
    }

    sendFormData = () => {
        const data = {
            additional               : this.state.additional,
            business                 : this.state.business,
            cardsTurnover            : this.state.cardsTurnover,
            countOfCardOperations    : this.state.countOfCardOperations,
            countOfTerminalOperations: this.state.countOfTerminalOperations,
            countOfTerminals         : this.state.countOfTerminals,
            currentSlide             : this.state.currentSlide,
            paysystems               : this.state.paysystems,
            solution                 : this.state.solution,
            status                   : this.state.status,
            terminalsTurnove         : this.state.terminalsTurnove
        }
        this.props.sendFormData(data)
    }

    render() {
        const { businessIds }    = this.state;
        const showCardIssue      = businessIds.some(v => v === 'cardIssue');
        const showAcquiringCards = businessIds.some(v => v === 'acquiringCards');
        const showAllCardsRange  = !showCardIssue && !showAcquiringCards;

        const {
                  // solution,                  // банк / эквайринг
                  // status,                    // статус в МПС "Principal" / "Affilate"
                  // business,                  // ваш бизнес array labels
                  // businessIds,               // ваш бизнес array values
                  // paysystems,                // Необходимые МПС array labels
                  // paysystemsIds,             // Необходимые МПС array ids
                  countOfCards,              // количество карт
                  countOfTerminals,          // количество терминалов
                  countOfCardOperations,     // число операций по картам
                  countOfTerminalOperations, // число операций по терминалам
                  cardsTurnover,             // Предполагаемый оборот по картам
                  terminalsTurnover,         // Предполагаемый оборот по терминалам
                  // additional,                // дополнительные сервисы array labels
                  additionalIds             // дополнительные сервисы array ids
              } = this.state;

        const {
                  user = {},
                  setUserName  = () => {},
                  setUserMail  = () => {},
                  setUserPhone = () => {}
              } = this.props;

        this.calculator = new Calculator({
            cards                                : countOfCards,
            terminals                            : countOfTerminals,
            cardsIndex                           : countOfCardOperations,
            terminalIndex                        : countOfTerminalOperations,
            expectedTurnoverOnIssuedCards        : cardsTurnover,
            expectedTurnoverOperationsOnTerminals: terminalsTurnover,
            fraudGuard                           : additionalIds.includes('fraudGuard') ? 1 :  0,
            mobilePayments                       : additionalIds.includes('mobilePayments') ? 1 :  0,
            smsService                           : additionalIds.includes('smsService') ? 1 :  0,
            customerSupport                      : additionalIds.includes('customerSupport') ? 1 :  0
        });

        const paymentPerMonthConnection = this.calculator.paymentPerMonthConnection();
        const monthlyPayment = this.calculator.monthlyPayment();

        return (
            <Wrapper  id="scrollToCalc">
                <SectionTitle number="3" >Рассчитайте индивидуальный тарифный план</SectionTitle>

                <Tags>{this.getTags().map((tag, i) => <li key={i}>{tag}</li> )}</Tags>

                <Slider>
                    <Slider.Item className="first" active={this.state.currentSlide === 0}>
                        <BreadCrumbs>1/4 Опишите ваши требования</BreadCrumbs>
                        <Row>
                            <Column>
                                <CheckBox type='radio' label='Банк' name='solution' onChange={this.onChange} />
                                <CheckBox type='radio' label='Эквайринг' name='solution' onChange={this.onChange} />
                            </Column>
                        </Row>
                    </Slider.Item>
                    <Slider.Item className="second" active={this.state.currentSlide === 1}>
                        <BreadCrumbs>2/4 Опишите ваши требования</BreadCrumbs>
                        <Row>
                            <Column>
                                <ColumnTitle>Ваш статус в МПС</ColumnTitle>
                                <CheckBox type='radio' label='Principal' name='status'  onChange={this.onChange} />
                                <CheckBox type='radio' label='Affilate'  name='status'  onChange={this.onChange} />
                                <CheckBox type='radio' label='Нет'       name='status'  onChange={this.onChange} />
                            </Column>
                            <Column>
                                <ColumnTitle>Ваш бизнес</ColumnTitle>
                                <CheckBox type='checkbox' label='Эмиссия карт'   name='business' data-id="cardIssue"      onChange={this.onChange} />
                                <CheckBox type='checkbox' label='Эквайринг карт' name='business' data-id="acquiringCards" onChange={this.onChange} />
                            </Column>
                            <Column>
                                <ColumnTitle>Необходимые МПС</ColumnTitle>
                                <CheckBox type='checkbox' label='VISA Int.'     name='paysystems' data-id='visaInt' onChange={this.onChange} />
                                <CheckBox type='checkbox' label='MasterCard WW' name='paysystems' data-id='masterCardWW' onChange={this.onChange} />
                                <CheckBox type='checkbox' label='UnionPay'      name='paysystems' data-id='unionPay' onChange={this.onChange} />
                                <CheckBox type='checkbox' label='МИР'           name='paysystems' data-id='mir'         onChange={this.onChange} />
                                <CheckBox type='checkbox' label='REXPAY'        name='paysystems' data-id='rexpay'      onChange={this.onChange} />
                            </Column>
                        </Row>
                    </Slider.Item>
                    <Slider.Item active={this.state.currentSlide === 2}>
                        <BreadCrumbs>3/4 Бизнес-показатели</BreadCrumbs>
                        <Row>
                            { (showCardIssue || showAllCardsRange) &&
                                <Column>
                                    <ColumnTitle>Количество обслуживаемых карт</ColumnTitle>
                                    <InputRange
                                        maxValue={ 100 }
                                        minValue={ 1 }
                                        formatLabel={ this.formatLabel }
                                        value={ this.state.countOfCards }
                                        onChange={ v => this.setState({ countOfCards: v }) }
                                    />
                                </Column>
                            }
                            { (showAcquiringCards || showAllCardsRange) &&
                                <Column>
                                    <ColumnTitle>Количество обслуживаемых терминалов</ColumnTitle>
                                    <InputRange
                                        maxValue={ 10000 }
                                        minValue={ 1 }
                                        step={ 10 }
                                        formatLabel={ this.formatLabel }
                                        value={ this.state.countOfTerminals }
                                        onChange={ v => this.setState({ countOfTerminals: v }) }
                                    />
                                </Column>
                            }
                            { (showCardIssue || showAllCardsRange) &&
                                <Column>
                                    <ColumnTitle>Среднемесячное число операций по эмитированным картам</ColumnTitle>
                                    <InputRange
                                        maxValue={ 10000 }
                                        minValue={ 1 }
                                        step={ 10 }
                                        formatLabel={ this.formatLabel }
                                        value={ this.state.countOfCardOperations }
                                        onChange={ v => this.setState({ countOfCardOperations: v }) }
                                    />
                                </Column>
                            }
                            { (showAcquiringCards || showAllCardsRange) &&
                                <Column>
                                    <ColumnTitle>Среднемесячное число операций в терминальной сети</ColumnTitle>
                                    <InputRange
                                        maxValue={ 10000 }
                                        minValue={ 1 }
                                        step={ 10 }
                                        formatLabel={ this.formatLabel }
                                        value={ this.state.countOfTerminalOperations }
                                        onChange={ v => this.setState({ countOfTerminalOperations: v }) }
                                    />
                                </Column>
                            }
                            { (showCardIssue || showAllCardsRange) &&
                                <Column>
                                    <ColumnTitle>Предполагаемый оборот по эмитированным картам</ColumnTitle>
                                    <InputRange
                                        maxValue={ 10000 }
                                        minValue={ 1 }
                                        step={ 10 }
                                        formatLabel={ this.formatLabel }
                                        value={ this.state.cardsTurnover }
                                        onChange={ v => this.setState({ cardsTurnover: v }) }
                                    />
                                </Column>
                            }
                            { (showAcquiringCards || showAllCardsRange) &&
                                <Column>
                                    <ColumnTitle>Предполагаемый оборот операций в терминальной сети</ColumnTitle>
                                    <InputRange
                                        maxValue={ 10000 }
                                        minValue={ 1 }
                                        step={ 10 }
                                        formatLabel={ this.formatLabel }
                                        value={ this.state.terminalsTurnover }
                                        onChange={ v => this.setState({ terminalsTurnover: v }) }
                                    />
                                </Column>
                            }
                        </Row>
                    </Slider.Item>
                    <Slider.Item className="fourth" active={this.state.currentSlide === 3}>
                        <BreadCrumbs>4/4 Дополнительные сервисы</BreadCrumbs>
                        <Row>
                            <Column>
                                <CheckBoxLarge type='checkbox' label='Система fraud-мониторинга FraudGuard' data-id='fraudGuard' name='additional' onChange={this.onChange} />
                                <p>
                                    Современная система мониторинга несанкционированных
                                    операций по банковским картам. Гибкие возможности
                                    по настройке правил
                                </p>
                            </Column>
                            <Column>
                                <CheckBoxLarge type='checkbox' label='Сервис «Мобильные платежи»' data-id='mobilePayments' name='additional' onChange={this.onChange} />
                                <p>
                                    Современное средство ДБО для ваших Клиентов. Решение реализовано в виде мобильного или десктоп-приложения. Позволяет переводить средства и оплачивать услуги
                                    сервис-провайдеров
                                </p>
                            </Column>
                            <Column>
                                <CheckBoxLarge type='checkbox' label='Информационный СМС-сервис' data-id='smsService' name='additional' onChange={this.onChange} />
                                <p>
                                    Сервис отправки информационных  СМС-сообщений Клиентам
                                </p>
                            </Column>
                            <Column>
                                <CheckBoxLarge type='checkbox' label='Сервис «Customer Support»' data-id='customerSupport' name='additional' onChange={this.onChange} />
                                <p>
                                    Техническая поддержка процессинга р режиме on-line
                                </p>
                            </Column>
                        </Row>
                    </Slider.Item>
                    <Slider.Item className="fifth" active={this.state.currentSlide === 4}>
                        <BreadCrumbs>Готово! Ваш тариф сформирован</BreadCrumbs>
                        <Row>
                            <Column>
                                <ColumnTitle>На основе введенных данных произведен расчет ежемесячной оплаты пользования функционалом процессинговой компании Рукард.</ColumnTitle>
                                <ColumnTitle>Все данные носят ознакомительный характер и позваляют вам узнать примерную стоимость подключения сервиса.</ColumnTitle>
                                <ColumnTitle>Чтобы получить персональное Коммерческое предложение, заполните форму с Вашими контактными данными и отправьте заявку.</ColumnTitle>
                            </Column>
                            <Column>
                                <div>
                                    <ColumnTitle>Платеж в месяц подключения </ColumnTitle>
                                    <Price>{this.formatLabel(paymentPerMonthConnection) + ' ₽'}</Price>
                                </div>
                                <div>
                                    <ColumnTitle>Ежемесячный платеж </ColumnTitle>
                                    <Price>{this.formatLabel(monthlyPayment) + ' ₽'}</Price>
                                </div>
                            </Column>
                            <Form>
                                <Input
                                    label="Как к Вам обращаться?"
                                    placeholder="Иванов Иван Иванович"
                                    value={user.name}
                                    onChange={setUserName}
                                />
                                <Input
                                    label="E-mail"
                                    placeholder="E-mail"
                                    value={user.mail}
                                    onChange={setUserMail}
                                />
                                <Input
                                    label="Телефон"
                                    placeholder="+7 (916) 123 45 67"
                                    value={user.phone}
                                    onChange={setUserPhone}
                                />
                            </Form>
                        </Row>
                    </Slider.Item>
                    <Slider.Item className="fifth" active={this.state.currentSlide === -1}>
                        <BreadCrumbs>Вы ничего не заполнили</BreadCrumbs>
                        <Row>
                            <Column>
                                <ColumnTitle>Вы не указали бизнес-данные вашей компании, поэтому мы не смогли рассчитать стоимость подключения и ежемесячный платеж.</ColumnTitle>
                                <ColumnTitle>Оставьте заявку, менеджер свяжется с Вами и все рассчитает.</ColumnTitle>
                            </Column>
                            <Column>
                                <div>
                                    <ColumnTitle>Платеж в месяц подключения </ColumnTitle>
                                    <Price>{this.formatLabel('-') + ' ₽'}</Price>
                                </div>
                                <div>
                                    <ColumnTitle>Ежемесячный платеж </ColumnTitle>
                                    <Price>{this.formatLabel('-') + ' ₽'}</Price>
                                </div>
                            </Column>
                            <Form>
                                <Input
                                    label="Как к Вам обращаться?"
                                    placeholder="Иванов Иван Иванович"
                                    value={user.name}
                                    onChange={setUserName}
                                />
                                <Input
                                    label="E-mail"
                                    placeholder="E-mail"
                                    value={user.mail}
                                    onChange={setUserMail}
                                />
                                <Input
                                    label="Телефон"
                                    placeholder="+7 (916) 123 45 67"
                                    value={user.phone}
                                    onChange={setUserPhone}
                                />
                            </Form>
                        </Row>
                    </Slider.Item>
                </Slider>

                <Buttons>
                    <Buttons.Prev
                        arrowed={this.state.currentSlide === 4 || this.state.currentSlide === -1}
                        onClick={this.handlePrev}
                    >
                        {this.state.currentSlide === 0
                            ? 'Не хочу заполнять'
                            : (this.state.currentSlide === -1
                                ? 'Заполнить'
                                : 'Назад'
                            )
                        }
                    </Buttons.Prev>

                    {this.state.currentSlide === 4 || this.state.currentSlide === -1
                        ? <Buttons.Next filled onClick={this.sendFormData}>Отправить заявку</Buttons.Next>
                        : <Buttons.Next arrowed onClick={this.handleNext}>Далее</Buttons.Next>
                    }
                </Buttons>
            </Wrapper>
        )
    }
}

export default SectionCalculate
