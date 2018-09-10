import Calculator from '../../src/components/pages/MainPage/SectionCalculate/Calculator';

describe("Calculator init", function() {

    it('Объект Calculator должен создаваться', () => {
        const clc = new Calculator();

        expect(clc).toBeDefined();
        expect(typeof clc).toBe('object');
    });

    it('Должны быть установлены значения по умолчанию', () => {
        const clc = new Calculator();

        expect(clc.cards).toBe(1);
        expect(clc.terminals).toBe(1);
        expect(clc.cardsIndex).toBe(1);
        expect(clc.terminalIndex).toBe(1);
        expect(clc.expectedTurnoverOnIssuedCards).toBe(1);
        expect(clc.expectedTurnoverOperationsOnTerminals).toBe(1);
    });

    describe('Должны быть установлены передаваемые значения:', () => {
        const clc = new Calculator({
            cards: 11000,
            terminals: 150,
            cardsIndex: 321,
            terminalIndex: 480,
            expectedTurnoverOnIssuedCards: 7000,
            expectedTurnoverOperationsOnTerminals: 4800
        });

        it('количество карт', () => {
            expect(clc.cards).toBe(11000);
        });

        it('количество терминалов', () => {
            expect(clc.terminals).toBe(150);
        });

        it('Расчёт среднемесячного числа операций по эмитированным картам', () => {
            expect(clc.cardsIndex).toBe(321);
        });

        it('Расчёт среднемесячного числа операций по эмитированным картам', () => {
            expect(clc.terminalIndex).toBe(480);
        });

        it('Расчёт предполагаемого оборота по эмитированным картам', () => {
            expect(clc.expectedTurnoverOnIssuedCards).toBe(7000);
        });

        it('Расчёт предполагаемого оборота операций в терминальной сети', () => {
            expect(clc.expectedTurnoverOperationsOnTerminals).toBe(4800);
        });
    });
});

describe('Тарифы', () => {
    const clc = new Calculator({
        cards: 11000,
        terminals: 150
    });

    it('Тариф для действующих карт Банка', () => {
        const tariff = clc.tariffForExistingBankCards();
        expect(tariff).toBe(76325);
    })
});

describe('Рассчет доп. услуг', () => {
    const clc = new Calculator({
        cards: 11000,
        terminals: 150,
        fraudGuard: 1,
        mobilePayments: 1,
        smsService: 1,
        customerSupport: 1
    });

    it('Сервис "Fraud Guard" (подключение)', () => {
        const cost = clc.getCostConnectionFraudGuard();
        expect(cost).toBe(55000)
    });

    it('Сервис "Мобильные платежи" (подключение)', () => {
        const cost = clc.getCostConnectionMobilePayments();
        expect(cost).toBe(60000);
    });

    it('Сервис "СМС" (подключение)', () => {
        const cost = clc.getCostConnectionSmsService();
        expect(cost).toBe(6000);
    });

    it('Сервис "Customer Support" (подключение)', () => {
        const cost = clc.getCostConnectionCustomerSupport();
        expect(cost).toBe(0);
    });

    //////////////////////////////////////////////////////
    it('Сервис "Fraud Guard" (месяц)', () => {
        const cost = clc.getCostSubscriptionFraudGuard();
        expect(cost).toBe(6000)
    });

    it('Сервис "Мобильные платежи" (месяц)', () => {
        const cost = clc.getCostSubscriptionMobilePayments();
        expect(cost).toBe(5500);
    });

    it('Сервис "СМС" (месяц)', () => {
        const cost = clc.getCostSubscriptionSmsService();
        expect(cost).toBe(7700);
    });

    it('Сервис "Customer Support" (месяц)', () => {
        const cost = clc.getCostSubscriptionCustomerSupport();
        expect(cost).toBe(0);
    });
});

describe('Расчёт услуг', () => {
    const clc = new Calculator({
        cards: 5000,
        terminals: 110,
        fraudGuard: 0,
        mobilePayments: 1,
        smsService: 0,
        customerSupport: 1
    });

    it('Рассчет эмиссии - месяц', () => {
        const cost = clc.calculationOfEmission();
        expect(cost).toBe(0.38);
    });

    it('Рассчет эквайринга - подключение', () => {
        const cost = clc.calculationOfAcquiringConnection();
        expect(cost).toBe(129250);
    });

    it('Рассчет эквайринга - месяц', () => {
        const cost = clc.calculationOfAcquiringAMonth();
        expect(cost).toBe(9212.50);
    });

    it('Доп услуги - подключение', () => {
        const cost = clc.additionalServiceConnection();
        expect(cost).toBe(66000);
    });
});

describe('Расчёт услуг со всеми параметрами', () => {
    const clc = new Calculator({
        cards: 5000,
        terminals: 110,
        cardsIndex: 301,
        terminalIndex: 488,
        expectedTurnoverOnIssuedCards: 7020,
        expectedTurnoverOperationsOnTerminals: 4850,
        fraudGuard: 0,
        mobilePayments: 0,
        smsService: 0,
        customerSupport: 1
    });

    it('Рассчет эмиссии - месяц', () => {
        const cost = clc.calculationOfEmission();
        expect(cost).toBe(114.79);
    });

    it('Рассчет эквайринга - подключение', () => {
        const cost = clc.calculationOfAcquiringConnection();
        expect(cost).toBe(129250);
    });

    it('Рассчет эквайринга - месяц', () => {
        const cost = clc.calculationOfAcquiringAMonth();
        expect(cost).toBe(9212.50);
    });

    it('Доп услуги - подключение', () => {
        const cost = clc.additionalServiceConnection();
        expect(cost).toBe(6000);
    });

    it('Доп услуги - месяц', () => {
        const cost = clc.additionalServicesMonth();
        expect(cost).toBe(11.87);
    });
});

describe('Итоговые расчёты', () => {
    const clc = new Calculator({
        cards: 55000,
        terminals: 430,
        fraudGuard: 1,
        mobilePayments: 1,
        smsService: 1,
        customerSupport: 1
    });

    it('ПЛАТЕЖ В МЕСЯЦ ПОДКЛЮЧЕНИЯ', () => {
        const cost = clc.paymentPerMonthConnection();
        expect(cost).toBe(1019287.88);
    })

    it('ЕЖЕМЕСЯЧНЫЙ ПЛАТЕЖ', () => {
        const cost = clc.monthlyPayment();
        expect(cost).toBe(293037.88);
    })
});
