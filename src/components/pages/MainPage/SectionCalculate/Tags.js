import React from 'react'
import styled from 'styled-components'

import BREAKS from '@constants/breakpoints'

const Tags = styled.ul`
    display: none;
    margin: 0;
    padding: 0;
    min-height: 46px;

    li {
        background-color: #74be21;
        border-radius: 3px;
        color: #ffffff;

        display: inline-block;
        vertical-align: middle;
        padding: 0 1em;
        margin: 0 10px 10px 0;

        font-size: 16px;
        font-weight: 500;
        line-height: 36px;
        text-align: center;
    }

    @media (min-width: ${BREAKS.SM}px) {
        display: block;
        margin: 0 0 40px;
    }
`

export default Tags
