import React from 'react'
import styled, {css} from 'styled-components'

import BREAKS from '@constants/breakpoints'

const Slider = styled.div`
    flex: 1;
    position: relative;
`

Slider.Item = styled.div`

    display: inline-block;
    vertical-align: top;
    min-height: 400px;
    height: 100%;
    width: 100%;

    // TODO
    display: none;
    //opacity: 0;
    //pointer-events: none;

    transition: opacity .3s ease;
    @media (min-width: ${BREAKS.MD}px) {
        min-height: 550px;
    }
    ${p => p.active && css`
        display: block;

        opacity: 1;
        pointer-events: auto;
    `}

    &.first {
        background: url('${require('../images/calculate.png')}') center no-repeat;
        background-size: contain;
    }
    
    &.second {
        > div {
            > div {
                justify-content: flex-start;
            }
        }

        @media (min-width: ${BREAKS.SM}px) {
            > div {
                > div {
                    flex: 1 0 calc(33.3334% - 40px);
                }
            }
        }

        @media (min-width: ${BREAKS.MD}px) {
            > div {
                > div {
                    flex: 0 0 calc(33.33% - 190px);
                }
            }
        }
    }
    
    &.fourth {
        > div {
            > div {
                justify-content: flex-start;
            }
        }

        @media (min-width: ${BREAKS.MD}px) {
            > div {
                > div {
                    flex: 0 0 calc(50% - 190px);;
                }
            }
        }
    }

    &.fifth {
        @media (min-width: ${BREAKS.SM}px) and (max-width: 1023px) {
            > div {
                margin-bottom: 2rem;

                > div {
                    &:nth-child(1) {
                        flex: 1 0 calc(100% - 40px);
                        
                    }
                }
    
                > form {
                    flex: 1 0 calc(50% - 40px);
                    margin: 0 20px;
                }
            }
        }

        @media (min-width: ${BREAKS.MD}px) and (max-width: 1439px) {
            > div {
                > div {
                    &:nth-child(1) {
                        flex: 0 0 25%;
                        font-size: 16px;
                    }

                    &:nth-child(2) {
                        margin-left: 0;
                    }
                }

                > form {
                    flex: 0 0 25%;
                    margin: 0;
                }
            }
        }
    }

    @media (min-width: ${BREAKS.MD}px) {
        position: absolute;
        left: 0;
        top: 0;
    }
`

export default Slider
