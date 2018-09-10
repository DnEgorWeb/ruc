import React from 'react'

import Container from '@components/atoms/Container'
import SectionTitle from '@components/atoms/SectionTitle'
import Input from '@components/atoms/Input'
import Map from '@components/atoms/Map'
import Button from '@components/atoms/Button'

import Wrapper from './Wrapper'
import Form from './Form'
import Meta from './Meta'


function ContactsPage() {
    return (
        <Container>
            <Wrapper>
                <div id="map">
                    <Map height="auto" />
                </div>

                <div id="form">
                    <Form>
                        <SectionTitle>Свяжитесь с нами</SectionTitle>

                        <Input
                            label="Как к Вам обращаться?"
                            placeholder="Иванов Иван Иванович"
                        />
                        <Input
                            label=""
                            placeholder="E-mail"
                        />
                        <Input
                            label="Телефон"
                            placeholder="+7 (916) 123 45 67"
                        />
                        <Input
                            label=""
                            placeholder="Чем мы можем помочь?"
                        />
                    </Form>
                </div>

                <Meta id="meta">
                    <h4>Процессинговая компания Рукард</h4>
                    <span>Генеральный директор Федотов Игорь Иванович</span>

                    <div>
                        <p>
                            <a href="https://goo.gl/maps/Liutuyho5YB2">г. Москва, 123557, Электрический переулок, дом 3/10, строение 1</a>
                        </p>
                        <p>
                            <a href="tel:+74957370680">+7 (495) 737-06-80 </a>
                        </p>
                        <p>
                            <a href="mailto:info@rucard.net">info@rucard.net</a>
                        </p>
                    </div>
                </Meta>

                <div id="btn">
                    <div>
                        <Button>Отправить</Button>
                    </div>
                </div>
            </Wrapper>
        </Container>
    )
}

export default ContactsPage
