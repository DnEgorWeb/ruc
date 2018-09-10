import React from 'react'
import {Switch, Route} from 'react-router-dom'
import styled, {css, injectGlobal} from 'styled-components'

import BREAKS from '@constants/breakpoints'

import MainPage from '@components/pages/MainPage'
import AboutUsPage from '@components/pages/AboutUsPage'
import SearchPage from '@components/pages/SearchPage'
import ContactsPage from '@components/pages/ContactsPage'
import GiftCardPage from '@containers/GiftCardPage'
import VirtualGiftCardsPage from '@components/pages/VirtualGiftCardsPage'
import LoyalityCardsPage from '@containers/LoyalityCardsPage'
import CoalitionProgramPage from '@containers/CoalitionProgramPage'
import CompaniesPage from '@components/pages/CompaniesPage'
import BanksPage from '@components/pages/BanksPage'
import LoyaltyPage from '@components/pages/LoyaltyPage'
import NewsPage from '@components/pages/NewsPage'
import NewsItemPage from '@components/pages/NewsItemPage'

import MainMenu from '@containers/MainMenu'
import Header from '@containers/Header'
import Footer from '@components/molecules/Footer'
import Modals from '@containers/Modals'

injectGlobal`
    *, *::before, *::after{
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }
    
    @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500');
    
    :root{
        font-size: 15px;
    }
    
    html, body, #app{
        min-height: 100vh;
    }

    body{
        font-family: Roboto, sans-serif;
        overflow: hidden;

        width: 100%;
    }

    #app{
    }

    .text-left{text-align: left;}
    .text-center{text-align: center;}
    .text-right{text-align: right;}
    
    .visible {
        &-mobile {
            @media (min-width: ${BREAKS.SM}px) { display: none !important; }
        }

        &-tablet {
            @media (min-width: ${BREAKS.MD}px) { display: none !important; }
        }
    }
`

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;

    overflow: hidden;
    ${p => !p.mainMenuVisible && css`
        overflow-y: scroll;
    `}

    @media (min-width: ${BREAKS.MD}px) {
        overflow-y: scroll;
    }

    height: 100vh;
    
    > main {
        flex: 1;
    }
`

function App({mainMenuVisible}) {
    return (
        <Wrapper id="appViewPort" mainMenuVisible={mainMenuVisible}>
            <MainMenu active={mainMenuVisible} />

            <Header />

            <main>
                <Switch>
                    <Route path="/" component={MainPage} exact />
                    <Route path="/about" component={AboutUsPage} />
                    <Route path="/contacts" component={ContactsPage} />
                    <Route path="/search" component={SearchPage} />
                    <Route path="/giftcard" component={GiftCardPage} />
                    <Route path="/virtualcard" component={VirtualGiftCardsPage} />
                    <Route path="/loyaltycard" component={LoyalityCardsPage} />
                    <Route path="/coalition" component={CoalitionProgramPage} />
                    <Route path="/companies" component={CompaniesPage} />
                    <Route path="/banks" component={BanksPage} />
                    <Route path="/partners" component={BanksPage} />
                    <Route path="/loyalty" component={LoyaltyPage} />
                    <Route path="/news" component={NewsPage} exact />
                    <Route path="/news/:id" component={NewsItemPage} />
                </Switch>
            </main>

            <Footer />

            <Modals />
        </Wrapper>
    )
}

export default App
