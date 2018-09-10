import React from 'react'
import styled from 'styled-components'

import BREAKS from '@constants/breakpoints'

const SearchBox = styled(({placeholder = '', onChange = () => {}, onSubmit = () => {}, ...p}) => (
    <form action="" onSubmit={onSubmit} {...p}>
        <button />
        <input
            type="search"
            placeholder={placeholder}
            onChange={onChange}
        />
    </form>
))`
    display: flex;
    border-bottom: 1px solid #acacac;
    align-items: center;
    justify-content: flex-start;
    padding: 10px 0;

    button {
        background: url('${require('./images/search.svg')}') center no-repeat;
        background-size: contain;
        border: 0;

        display: block;
        cursor: pointer;
        margin-right: 20px;

        height: 20px;
        width: 20px;

        :hover {
            opacity: .75;
        }

        :active {
            transform: translateY(1px);
        }
    }

    input {
        border: 0;
        line-height: 2.08;
        font-size: 13px;
        -webkit-appearance: none;
        appearance: none;

        width: 100%;

        ::placeholder {
            color: #acacac;
        }

        :focus {
            outline: none;
        }
    }
    
    @media (min-width: ${BREAKS.SM}px) {
        button {
            margin-right: 28px;
    
            height: 28px;
            width: 28px;
        }
        
        input {
            font-size: 20px;
            line-height: 1.15;
        }
    }

    @media (min-width: ${BREAKS.MD}px) {
        padding: 20px 0;

        button {
            margin-right: 35px;
    
            height: 35px;
            width: 35px;
        }
        
        input {
            font-size: 26px;
            line-height: 1.15;
        }
    }
`

export default SearchBox
