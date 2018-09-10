import styled from 'styled-components'

import BREAKS from '@constants/breakpoints'

const Title = styled.div`
    font-size: 19px;
    line-height: 1.17;
    color: #74be21;
    margin-bottom: 50px;

    @media (min-width: ${BREAKS.MD}px) {
        font-size: 30px;
        margin-bottom: 110px;
    }
`

export default Title
