import styled from 'styled-components'

import BREAKS from '@constants/breakpoints'

const Description = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
    
    @media (min-width: ${BREAKS.SM}px) {
        margin-top: 42px;
    }

    @media (min-width: ${BREAKS.MD}px) {
        margin-top: 100px;
    }
    
    p {
        margin-bottom: 2rem;
        line-height: 1.9;
        font-size: 13px;
        
        @media (min-width: ${BREAKS.SM}px) {
            font-size: 14px;
        }
    
        @media (min-width: ${BREAKS.MD}px) {
            font-size: 16px;
            margin-right: 240px;
        }
    }

    strong {
        display: block;
        font-size: 13px;
        font-weight: 500;
        line-height: 1.9;
        margin-bottom: 2rem;
        
        @media (min-width: ${BREAKS.SM}px) {
            font-size: 16px;
        }
    
        @media (min-width: ${BREAKS.MD}px) {
            font-size: 18px;
            margin-right: 240px;
        }
    }
`
export default Description
