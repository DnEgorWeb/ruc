import React from 'react'
import {NavLink} from 'react-router-dom'

import Logo from '@components/atoms/Logo'
import Container from '@components/atoms/Container'

import Wrapper from './Wrapper'
import CloseBtn from './CloseBtn'
import Nav from './Nav'
import Contacts from './Contacts'
import SearchBox from './SearchBox'


function MainMenu({closeMenu = () => {}, openReports = () => {}, openInfo = () => {}, ...p}) {
    return (
        <Wrapper {...p}>
            <Container align="center" justify="space-between">
                <Logo />

                <CloseBtn onClick={closeMenu} />
            </Container>

            <Container justify="space-between">
                <Nav>
                    <li><NavLink onClick={closeMenu} to="/about">О нас</NavLink></li>
                    <li><NavLink onClick={closeMenu} to="/banks">Банкам</NavLink></li>
                    <li><NavLink onClick={closeMenu} to="/companies">Организациям</NavLink></li>
                    <li><NavLink onClick={closeMenu} to="/loyalty">Программа лояльности</NavLink></li>
                    <li><NavLink onClick={closeMenu} to="/news">Новости</NavLink></li>
                    <li><NavLink onClick={closeMenu} to="/contacts">Контакты</NavLink></li>
                    <li>
                        <SearchBox
                            placeholder="Искать по ключевым словам"
                            onChange={() => {}}
                            onSubmit={(e) => {
                                e.preventDefault()
                            }}
                        />
                    </li>
                </Nav>

                <Contacts>
                    <Contacts.Address>
                        <span>офис</span>
                        <strong>Москва</strong>

                        <div>
                            <p><a href="https://goo.gl/maps/Liutuyho5YB2" target="_blank">Электрический переулок, дом 3/10, строение 1</a></p>
                            <p><a href="tel:+74957370680">+7 (495) 737-06-80</a></p>
                            <p><a href="mailto:info@rucard.net">info@rucard.net</a></p>
                        </div>
                    </Contacts.Address>

                    <Contacts.List>
                        <ul>
                            <li><a href="http://old.rucard.net/" target="_blank">Старая версия сайта</a></li>
                            <li><a href="https://jira.rusoft-company.ru/" target="_blank">Техническая поддержка</a></li>
                            <li><a href="http://services.rucard.ru/" target="_blank">Сервис-Центр</a></li>
                        </ul>
                    </Contacts.List>

                    <Contacts.List>
                        <span>Информация</span>
                        <ul>
                            <li><a href="http://www.e-disclosure.ru/portal/company.aspx?id=37100" target="_blank">Раскрытие информации</a></li>
                            <li><a onClick={openInfo}>Раскрытие инсайдерской информации</a></li>
                            <li><a onClick={openReports}>Отчётность</a></li>
                        </ul>
                    </Contacts.List>

                    <Contacts.List>
                        <span>Рукард в социальных сетях</span>
                        <ul>
                            <li><a href="#">Facebook</a></li>
                            <li><a href="#">Вконтакте</a></li>
                            <li><a href="#">Instagram</a></li>
                            <li><a href="#">Одноклассники</a></li>
                        </ul>
                    </Contacts.List>

                    <Contacts.List>
                        <span>Язык</span>
                        <ul>
                            <li>Русский</li>
                            <li>English</li>
                        </ul>
                    </Contacts.List>
                </Contacts>
            </Container>
        </Wrapper>
    )
}

export default MainMenu
