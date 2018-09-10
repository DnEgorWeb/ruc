import React from 'react'
import styled from 'styled-components'
import {NavLink} from 'react-router-dom'
import {withRouter} from 'react-router'

import BREAKS from '@constants/breakpoints'

import {
    Logo,
    Button,
    Container,
} from '@components'

import Navigation from './Navigation'
import MenuBtn from './MenuBtn'

const Header = styled(({setMainMenuVisibility = () => {}, openModal, className, style, ...p}) => (
    <header {...{className, style}}>
        <Container>
            <Logo to="/" />

            <Navigation>
                <li><NavLink to="/banks">Банкам</NavLink></li>
                <li><NavLink to="/companies">Организациям</NavLink></li>
            </Navigation>

            <div className="right">
                <Button filled onClick={openModal}>Заказать консультацию</Button>
                <MenuBtn onClick={setMainMenuVisibility} />
            </div>
        </Container>
    </header>
))`
    background: #ffffff;
    box-shadow: 0 .5rem 1rem 0 rgba(0, 0, 0, .1);
    position: relative;
    
    ${Container} {
        display: flex;
        align-items: center;
        justify-content: space-between;

        height: 60px;
    }

    .right {
        margin: 0 -2rem;
        
        & > * {
            margin: 0 2rem;
        }
    }

    ${Navigation}, ${Button} {
        display: none;
    }

    @media (min-width: ${BREAKS.SM}px) {
        ${Container} { height: 80px; }

        ${Navigation}, ${Button} {
            display: initial;
        }
    }

    @media (min-width: ${BREAKS.MD}px) {
        ${Container} { height: 120px; }
    }
`

export default withRouter(Header)
