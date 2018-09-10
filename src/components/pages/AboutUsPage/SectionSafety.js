import React from 'react'
import styled from 'styled-components'
import BREAKS from '@constants/breakpoints'

import {
    Section,
    SectionTitle,
    Container,
} from '@components'

const SectionSafety = styled(Section)`
    overflow: hidden;
    color: #ffffff;
    padding: 0;

    ${SectionTitle} {
        color: #ffffff !important;
        margin-top: 20px;
        margin-bottom: 10px;
        
        @media (min-width: ${BREAKS.SM}px) {
            margin-top: 45px;
            margin-bottom: 60px;
        }
    
        @media (min-width: ${BREAKS.MD}px) {
            margin-top: 140px;
            margin-bottom: 200px;
        }
    }

    ${Container} {
        position: relative;

        > div{
            
            
            @media (min-width: ${BREAKS.SM}px) {
            
            }
        
            @media (min-width: ${BREAKS.MD}px) {
                padding-left: 50%;
                padding-right: 5%;
            }
        }
    }

    img {
        display: block;
        object-fit: contain;
        width: 100%;
        
    
        @media (min-width: ${BREAKS.SM}px) {
            display: inline-block;
            width: 350px;
            float: left;
            margin-right: 40px;
        }
    
        @media (min-width: ${BREAKS.MD}px) {
            width: unset;
            display: block;
            position: absolute;
            left: -60px;
            top: 180px;
        }
    }

    h4 {
        font-size: 16px;
        font-weight: 500;
        line-height: 1.31;
        margin-bottom: 20px;

        
        @media (min-width: ${BREAKS.SM}px) {
            
        }
    
        @media (min-width: ${BREAKS.MD}px) {
            font-size: 26px;
            margin-bottom: 60px;
        }
    }

    p {
        font-size: 13px;
        line-height: 1.89;
        
        @media (min-width: ${BREAKS.SM}px) {
            
        }
    
        @media (min-width: ${BREAKS.MD}px) {
            font-size: 18px;
        }
    }
    
    a {
        color: #ffffff;
        display: flex;
        font-size: 13px;
        font-weight: 500;
        line-height: 1.54;
        text-decoration: none;
        align-items: center;
        margin: 20px 0 40px;

        
        @media (min-width: ${BREAKS.SM}px) {
            
        }
    
        @media (min-width: ${BREAKS.MD}px) {
            display: inline-block;
            font-size: 18px;
            line-height: 1.17;
            margin-top: 100px;

        }

        &::before {
            background: url('${require('./images/list.svg')}') center no-repeat;
            content: '';
            display: inline-block;
            vertical-align: middle;
            margin-right: 20px;

            height: 40px;
            width: 40px;
            
            @media (min-width: ${BREAKS.SM}px) {
            
            }
        
            @media (min-width: ${BREAKS.MD}px) {
                height: 80px;
                width: 80px;
            }
        }
        
        &:hover{
            text-decoration: underline;
        }
    }
`

export default SectionSafety
