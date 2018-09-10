import styled from 'styled-components'

import BREAKS from '@constants/breakpoints'


const SearchItems = styled.div`
    display: flex;
    flex-wrap: wrap;

    @media (min-width: ${BREAKS.MD}px) {
        margin: 0 -30px;
    }
`

SearchItems.Item = styled.div`
    background: #ffffff;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, .07);

    flex: 0 0 100%;
    margin: .5rem 0;
    padding: 10px;

    small {
        color: #65b444;
        display: block;
        font-size: 13px;
    }

    h4 {
        color: #3bacf0;
        font-size: 14px;
        font-weight: 500;
        margin: 1em 0;
    }

    p {
        color: #454444;
        font-size: 13px;
        line-height: 1.54;

        strong {
            background-color: rgba(143, 225, 19, .5);
            font-weight: normal;
            padding: 0 .2em;
        }
    }

    @media (min-width: ${BREAKS.SM}px) {
        padding: 20px;

        small { font-size: 14px; }
        h4 { font-size: 16px; }
        p{
            font-size: 14px;
            line-height: 1.71;
        }
    }

    @media (min-width: ${BREAKS.MD}px) {
        flex: 0 0 calc(33.3334% - 60px);
        margin: 30px;
        padding: 70px;
    
        min-height: 360px;

        h4 {
            font-size: 18px;
        }
    }
`

export default SearchItems
