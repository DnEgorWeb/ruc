import styled from 'styled-components'

import BREAKS from '@constants/breakpoints'

const Nav = styled.div`
    display: none;

    position: sticky;
    top: 0;
    z-index: 3;

    ul {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;

        margin: 60px 0 0;
        padding: 0;

        width: 250px;

        position: absolute;

        li {
            display: inline-block;
            font-size: 16px;
            font-weight: 500;
            line-height: 1.19;
            text-align: right;
            margin-bottom: 40px;

            a {
                // color: #ffffff;
                text-decoration: none;
                
                &:hover {
                    -webkit-text-fill-color: #8fe113;
                    text-decoration: underline;
                }

                &.active {
                    color: #8fe113;
                    -webkit-text-fill-color: #8fe113;
                }
                -webkit-background-clip: text;
                background-clip: text;
                -webkit-text-fill-color: transparent;
            }
            -webkit-background-clip: text;
            background-clip: text;
            
        }
        -webkit-background-clip: text;
        background-clip: text;
    }

    @media (min-width: ${BREAKS.MD}px) {
        display: block;
    }
`

export default Nav
