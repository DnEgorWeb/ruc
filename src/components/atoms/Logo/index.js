import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

import BREAKS from '@constants/breakpoints'

const Logo = styled(({to, ...p}) => <Link to={to || '/'} {...p} />)`
    background: url(${p => require('./images/logo.svg')});
    display: block;

    height: 24px;
    width: 110px;

    @media (min-width: ${BREAKS.MD}px) {
        height: 37px;
        width: 168px;
    }
`

export default Logo
