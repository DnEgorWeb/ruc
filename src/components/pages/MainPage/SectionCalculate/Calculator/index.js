'use strict';
/**
 *  Данные для расчёта
 */

class Calculator {
    /**
     *  ДАННЫЕ ЗАПОЛНЯЕМЫЕ КЛИЕНТОМ
     */
    // Количество обслуживаемых карт
    cards = 1;

    // Количество обслуживаемых терминалов
    terminals = 1;

    // Среднемесячное число операций по эмитированным картам
    cardsIndex = 0;

    // Среднемесячное число операций в терминальной сети
    terminalIndex =  0;

    // Предполагаемый оборот по эмитированным картам
    expectedTurnoverOnIssuedCards = 0;

    // Предполагаемый оборот операций в терминальной сети
    expectedTurnoverOperationsOnTerminals = 0;

    /**
     *  ОСНОВНЫЕ ТАРИФНЫЕ ПАРАМЕТРЫ
     */
    //Регистрация Банка в ПЦ
    registrationOfABankInPts = 100000;

    /**
     * РАССЧЕТ ОПЕРАЦИЙ В ЭМИССИИ
     */
    // Доля операций выдачи средств (АТМ)
    operationATM = 0.25;

    // Доля операций покупки (POS)
    operationPOS = 0.6;

    // Доля переводов с карты
    shareOfTransfersFromCard = 0.05;

    // Доля переводов на карту
    shareOfTransfersToTheCard = 0.05;

    // Доля нефинансовых операций (NFS)
    operationNFS = 0.04;

    // Доля запросов от Клиентов
    shareOfRequestsFromCustomers = 0.01;

    // Комиссия за операции выдачи средств
    commissionForOperationOfWithdrawal = 0.0005;

    // Комиссия за операции покупки
    purchaseTransactionFee = 0.002;

    // Комиссия за операции перевода с карты
    feeForTransferTransactionFromCard = 0.0005;

    // Комиссия за операции перевода на карту
    feeForCardTransferOperations = 0.0005;

    // Комиссия за нефинансовые операции
    feeForNonFinancialTransactions = 2;

    // Комиссия за операции запроса Клиента
    commissionForOperationOfCustomersRequest = 30;

    /**
     *  РАССЧЕТ ОПЕРАЦИЙ В ЭКВАЙРИНГЕ
     */
    // Доля терминалов АТМ
    shareOfATMTerminals = 0.15;

    // Доля терминалов SST
    shareOfSSTTerminals = 0.1;

    // Доля терминалов POS
    shareOfPOSTerminals = 0.75;

    // Регистрация терминала АТМ
    shareOfAtmTerminals = 2500;

    // Регистрация терминала SST
    registrationOfSSTTerminal = 2000;

    // Регистрация терминала POS
    registerAPOSTerminal = 800;

    // ИТО с терминалом АТМ (месяц)
    ITOWithATM =  300;

    // ИТО с терминалом SST (месяц)
    ITOWithSST =  200;

    // ИТО с терминалом POS (месяц)
    ITOWithPOS =  25;

    /**
     *   РАССЧЕТ ДОПОЛНИТЕЛЬНЫХ УСЛУГ
     */
    // Сервис "Fraud Guard"
    fraudGuard = 0;

    // Сервис "Мобильные платежи"
    mobilePayments = 0;

    // Сервис "СМС"
    smsService = 0;

    // Сервис "Customer Support"
    customerSupport = 0;

    // подключение
    connectionFraudGuard      = 0;
    connectionMobilePayments  = 0;
    connectionSmsService      = 0;
    connectionCustomerSupport = 0;

    // абонентская плата
    subscriptionFraudGuard      = 0;
    subscriptionMobilePayments  = 0;
    subscriptionSmsService      = 0;
    subscriptionCustomerSupport = 0;

    constructor(options = {}) {
        const {
                  cards                                 = 1,
                  terminals                             = 1,
                  cardsIndex                            = 1,
                  terminalIndex                         = 1,
                  expectedTurnoverOnIssuedCards         = 1,
                  expectedTurnoverOperationsOnTerminals = 1,
                  fraudGuard                            = 0,
                  mobilePayments                        = 0,
                  smsService                            = 0,
                  customerSupport                       = 0
              } = options;

        /*console.log(fraudGuard,
        mobilePayments,
        smsService,
        customerSupport);*/
        this.setCards(cards);
        this.setTerminals(terminals);
        this.setCardsIndex(cardsIndex);
        this.setTerminalIndex(terminalIndex);
        this.setExpectedTurnoverOnIssuedCards(expectedTurnoverOnIssuedCards);
        this.setExpectedTurnoverOperationsOnTerminals(expectedTurnoverOperationsOnTerminals);
        this.fraudGuard      = fraudGuard;
        this.mobilePayments  = mobilePayments;
        this.smsService      = smsService;
        this.customerSupport = customerSupport;
    }

    /**
     *
     * @param cards (Number)
     */
    setCards = (cards) => {
        this.cards = cards;
    }

    /**
     *
     */
    setCardsIndex = (index) => {
        this.cardsIndex = index;
    }

    /**
     * Расчёт среднемесячного числа операций по эмитированным картам
     * @param terminals (Number)
     */
    setTerminals = (terminals) => {
        this.terminals = terminals;
    }

    /**
     * Расчёт среднемесячного числа операций в терминальной сети
     * @param index (number)
     */
    setTerminalIndex = (index) => {
        this.terminalIndex = index;
    }

    /**
     * Расчёт предполагаемого оборота по эмитированным картам
     * @param turnovers (Number)
     */
    setExpectedTurnoverOnIssuedCards = (turnovers) => {
        this.expectedTurnoverOnIssuedCards = turnovers;
    }

    /**
     * Расчёт предполагаемого оборота операций в терминальной сети
     * @param turnovers (Number)
     */
    setExpectedTurnoverOperationsOnTerminals = (turnovers) => {
        this.expectedTurnoverOperationsOnTerminals = turnovers;
    }

    /**
     * Тариф для действующих карт Банка
     * @returns {number}
     */
    tariffForExistingBankCards = () => {
        const cards = this.cards;

        switch(true) {
            case cards > 1 && cards <= 500     :
                return 13 * cards;
            case cards > 500 && cards <= 2000    :
                return ((cards - 500) * 9.45 + 6500);
            case cards > 2000 && cards <= 3000    :
                return ((cards - 2000) * 8.4 + 20675);
            case cards > 3000 && cards <= 5000    :
                return ((cards - 3000) * 7.35 + 29075);
            case cards > 5000 && cards <= 7000    :
                return ((cards - 5000) * 6.3 + 43775);
            case cards > 7000 && cards <= 10000   :
                return ((cards - 7000) * 5.25 + 56375);
            case cards > 10000 && cards <= 20000   :
                return ((cards - 10000) * 4.2 + 72125);
            case cards > 20000 && cards <= 50000   :
                return ((cards - 20000) * 2.1 + 114125);
            case cards > 50000 && cards <= 100000  :
                return ((cards - 50000) * 1.58 + 177125);
            case cards > 100000 && cards <= 200000  :
                return ((cards - 100000) * 1.05 + 256175);
            case cards > 200000 && cards <= 1000000 :
                return ((cards - 200000) * 0.84 + 361175);
            default:
                return +cards.toFixed(2);
        }
    };

    // стоимость подключения доп услуг
    getCostConnectionFraudGuard      = () => {
        const result = this.fraudGuard * 55000;
        return +result.toFixed(2);
    }
    getCostConnectionMobilePayments  = () => {
        const result = this.mobilePayments * 60000;
        return +result.toFixed(2);
    }
    getCostConnectionSmsService      = () => 6000;// this.smsService * 6000;
    getCostConnectionCustomerSupport = () => 0;

    // стоимость доп услуг за месяц
    getCostSubscriptionFraudGuard      = () => {
        const result = this.fraudGuard * 6000;
        return +result.toFixed(2);
    }
    getCostSubscriptionMobilePayments  = () => {
        const result = this.mobilePayments * (this.cards * 5 * 0.1);
        return +result.toFixed(2);
    }
    getCostSubscriptionSmsService      = () => {
        const result = this.smsService * (this.cards * 1.4 * 0.5);
        return +result.toFixed(2);
    }
    getCostSubscriptionCustomerSupport = () => {
        const result = this.customerSupport * ((
            this.expectedTurnoverOnIssuedCards + this.expectedTurnoverOperationsOnTerminals
        ) * 0.001);
        return +result.toFixed(2);
    };

    /**
     * Рассчет эмиссии - месяц
     * @returns {number}
     */
    calculationOfEmission = () => {
        const part1 = this.cardsIndex * this.operationATM                 * this.commissionForOperationOfWithdrawal;
        const part2 = this.cardsIndex * this.operationPOS                 * this.purchaseTransactionFee;
        const part3 = this.cardsIndex * this.shareOfTransfersFromCard     * this.feeForTransferTransactionFromCard;
        const part4 = this.cardsIndex * this.shareOfTransfersToTheCard    * this.feeForCardTransferOperations;
        const part5 = this.cardsIndex * this.operationNFS                 * this.feeForNonFinancialTransactions;
        const part6 = this.cardsIndex * this.shareOfRequestsFromCustomers * this.commissionForOperationOfCustomersRequest;

        const result = part1 + part2 + part3 + part4 + part5 + part6;
        return (+result.toFixed(2));
    }

    /**
     * Рассчет эквайринга - подключение
     * @returns {number}
     */
    calculationOfAcquiringConnection = () => {
        const part1 = this.terminals * this.shareOfATMTerminals * this.shareOfAtmTerminals;
        const part2 = this.terminals * this.shareOfSSTTerminals * this.registrationOfSSTTerminal;
        const part3 = this.terminals * this.shareOfPOSTerminals * this.registerAPOSTerminal;

        const result = part1 + part2 + part3;
        return (+result.toFixed(2));
    }

    /**
     * Рассчет эквайринга - месяц
     * @returns {number}
     */
    calculationOfAcquiringAMonth = () => {
        const part1 = this.terminals * this.shareOfATMTerminals * this.ITOWithATM;
        const part2 = this.terminals * this.shareOfSSTTerminals * this.ITOWithSST;
        const part3 = this.terminals * this.shareOfPOSTerminals * this.ITOWithPOS;

        const result = part1 + part2 + part3;
        return (+result.toFixed(2));
    }

    /**
     * Доп услуги - подключение
     * @returns {number}
     */
    additionalServiceConnection = () => {
        return (
            this.getCostConnectionFraudGuard() +
            this.getCostConnectionMobilePayments() +
            this.getCostConnectionSmsService() +
            this.getCostConnectionCustomerSupport()
        );
    }

    /**
     * Доп услуги - месяц
     * @returns {number}
     */
    additionalServicesMonth = () => {
        return (
            this.getCostSubscriptionFraudGuard() +
            this.getCostSubscriptionMobilePayments() +
            this.getCostSubscriptionSmsService() +
            this.getCostSubscriptionCustomerSupport()
        );
    }

    /**
     * ПЛАТЕЖ В МЕСЯЦ ПОДКЛЮЧЕНИЯ
     * @returns {number}
     */
    paymentPerMonthConnection = () => {
        const result = (
            this.registrationOfABankInPts +
            this.tariffForExistingBankCards() +
            this.calculationOfEmission() +
            this.calculationOfAcquiringConnection() +
            this.calculationOfAcquiringAMonth() +
            this.additionalServiceConnection() +
            this.additionalServicesMonth()
        );
        return +result.toFixed(2);
    }

    /**
     * ЕЖЕМЕСЯЧНЫЙ ПЛАТЕЖ
     * @returns {number}
     */
    monthlyPayment = () => {
        const result = (
            this.tariffForExistingBankCards() +
            this.calculationOfEmission() +
            this.calculationOfAcquiringAMonth() +
            this.additionalServicesMonth()
        );
        return +result.toFixed(2);
    }
}

export default  Calculator;
