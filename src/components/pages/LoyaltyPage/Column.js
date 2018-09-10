import styled from 'styled-components'

import BREAKS from '@constants/breakpoints'

const Column = styled.div`
    display: flex;
    flex-direction: column;

    line-height: 1.71;
    color: #454444;

    strong {
        display: block;
        font-weight: 500;
        margin-bottom: 30px;
    }

    p {
        font-size: 14px;
        margin-bottom: 2rem;
    }

    @media (min-width: ${BREAKS.SM}px) {
        font-size: 18px;

        :not(:last-child) {
            margin-bottom: 30px;
        }
    }

    @media (min-width: ${BREAKS.MD}px) {
        margin-bottom: 60px;
    }
`

export default Column
