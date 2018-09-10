import styled from 'styled-components'
import BREAKS from '@constants/breakpoints'

const Column  = styled.div`
    display: flex;
    flex-direction: column;
    
    line-height: 1.71;
    color: #454444;
    
    strong {
        display: block;
        font-size: 13px;
        font-weight: 500;
        line-height: 1.54;
        margin-bottom: 15px;
        
        @media (min-width: ${BREAKS.SM}px) {
            font-size: 14px;
            line-height: 1.71;
            margin-bottom: 30px;
        }
    
        @media (min-width: ${BREAKS.MD}px) {
            font-size: 16px;
            line-height: 2.1;
            margin-bottom: 60px;
        }
    }
    
    p {
        font-size: 13px;
        line-height: 1.54;
        margin-bottom: 2rem;
        
        @media (min-width: ${BREAKS.SM}px) {
            font-size: 14px;
            line-height: 1.7;
        }
    
        @media (min-width: ${BREAKS.MD}px) {
        }
    }
`

export default Column
