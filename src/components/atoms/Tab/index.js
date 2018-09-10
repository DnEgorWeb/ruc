import styled from 'styled-components'
import BREAKS from '@constants/breakpoints'

const Tab = styled.div`
    font-size: 14px;
    font-weight: 500;
    color: #3bacf0;
    white-space: nowrap;
    margin-right: 20px;
    line-height: 2;
    cursor: pointer;
    &.active {
        cursor: default;
    }

    @media (min-width: ${BREAKS.SM}px) {
        font-size: 16px;
        line-height: normal;
    }

    @media (min-width: ${BREAKS.MD}px) {
        font-size: 18px;
        margin-right: 40px;
    }
    
    &.active {
        color: #454444;
    }
`

export default Tab
