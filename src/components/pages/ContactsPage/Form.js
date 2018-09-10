import React from 'react'
import styled from 'styled-components'

import BREAKS from '@constants/breakpoints'

import Input from '@components/atoms/Input'

const Form = styled.form`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    flex: 1;
    margin-top: 20px;

    ${Input} {
        margin-bottom: 20px;
    }

    @media (min-width: ${BREAKS.SM}px) {
        margin-top: 0;
    }

    @media (min-width: ${BREAKS.MD}px) {
        width: 450px;
    }
`

export default Form
