import React from 'react'
import styled from 'styled-components'

import BREAKS from '@constants/breakpoints'

import Container from '../Container'


const Section = styled(({children, _ref, container = true, ...p}) => (
    <section {...p} ref={_ref}>
        {container ? <Container>{children}</Container> : children}
    </section>
))`
    background: #3db0f5 linear-gradient(235deg, #3db0f5, #2480b7 50%, #1f659a);
    display: block;
    padding: 1rem 0;

    width: 100%;

    @media (min-width: ${BREAKS.SM}px) {
        padding: 45px 0;
    }

    @media (min-width: ${BREAKS.MD}px) {
        padding: 140px 0;
        min-height: 1080px;
    }
`

export default Section
