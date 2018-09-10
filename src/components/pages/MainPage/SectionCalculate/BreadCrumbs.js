import React from 'react'
import styled from 'styled-components'

import BREAKS from '@constants/breakpoints'

const BreadCrumbs = styled.div`
    color: #ffffff;
    margin-bottom: 20px;

    font-size: 14px;
    font-weight: 500;
    line-height: 2.04;

    @media (min-width: ${BREAKS.SM}px) {
        margin-bottom: 0;
        font-size: 18px;
    }
    
    @media (min-width: ${BREAKS.MD}px) and (max-width: 1439px){
        font-size: 24px;
        margin-bottom: 50px;
    }

    @media (min-width: ${BREAKS.LG}px) {
        font-size: 24px;
        margin-bottom: 100px;
    }
`

export default BreadCrumbs
