import styled, {css} from 'styled-components'
import BREAKS from '@constants/breakpoints'

const gap = 30;

const NewsPreview = styled.article`
    background-color: #ffffff;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, .07);
    position: relative;
    margin: 10px 0;
    
    h4 {
        font-size: 14px;
        font-weight: 500;
        margin-bottom: 1rem;
        color: #3db0f5;

        @media (min-width: ${BREAKS.SM}px) {
            font-size: 16px;
        }
        
        @media (min-width: ${BREAKS.MD}px) {
            font-size: 18px;
        }
    }
    
    > time {
        display: block;
    }
    
    > div {
        font-size: 13px;
        line-height: 1.71;
        
        @media (min-width: ${BREAKS.SM}px) {
            font-size: 14px;
        }
    }

    width: 100%;

    @media (min-width: ${BREAKS.MD}px) {
        ${p => p.size === 'lg' && css`width: 980px;`}
        ${p => p.size === 'md' && css`width: 720px;`}
        ${p => p.size === 'sm' && css`width: 460px;`}
    }

    ${p => p.variant === 'full'  && css`
        color: #ffffff;

        ${p => p.bg && css`
            background: url('${p => p.bg}') center no-repeat;
            background-size: cover;
        `}

        > time {
            position: absolute;
            font-size: 14px;
            top: 10px;
            left: 10px;
            
            @media (min-width: ${BREAKS.SM}px) {
                top: ${gap}px;
                left: calc(220px + ${gap}px);
            }
            
            @media (min-width: ${BREAKS.MD}px) {
                font-size: 30px;
                font-weight: 500;
                line-height: 1.17;    
                left: ${gap}px;
            }
        }

        > div {
            padding: calc(10px + ${gap}px) 10px 10px;
            background-color: rgba(0, 0, 0, .5);
            
            @media (min-width: ${BREAKS.SM}px) {
                padding: ${gap * 2}px ${gap}px ${gap}px;
                margin-left: 220px;
            }

            @media (min-width: ${BREAKS.MD}px) {
                position: absolute;
                bottom: ${gap}px;
                left: ${gap}px;
                padding: ${gap}px;
                margin-left: 0;
    
                ${p => p.size === 'lg' && css`width: 380px;`}
                ${p => p.size === 'md' && css`width: 315px;`}
                ${p => p.size === 'sm' && css`width: 300px;`}
            }
        }
        
        h4 {
            color: #ffffff;
        }
    `}

    ${p => p.variant === 'left' && css`
        color: #454444;
        padding: 10px;
        
        @media (min-width: ${BREAKS.SM}px) {
            padding-top: ${gap}px;
            padding-bottom: ${gap}px;
            padding-right: ${gap}px;
            padding-left: 250px;
        }
        
        @media (min-width: ${BREAKS.MD}px) {
            ${p => p.size === 'lg' && css`padding-left: ${600 + gap}px;`}
            ${p => p.size === 'md' && css`padding-left: ${369 + gap}px;`}
            ${p => p.size === 'sm' && css`padding-left: ${130 + gap}px;`}
        }

        ${p => p.bg && css`
            &::before {
                display: none;
                
                @media (min-width: ${BREAKS.SM}px) {
                    background: url('${p => p.bg}') center no-repeat;
                    background-size: cover;
                    content: '';
                    display: block;
    
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    left: 0;
                    
                    width: 220px;
                }
                
                @media (min-width: ${BREAKS.MD}px) {
                    ${p => p.size === 'lg' && css`width: 600px;`}
                    ${p => p.size === 'md' && css`width: 369px;`}
                    ${p => p.size === 'sm' && css`width: 130px;`}
                }
            }
        `}

        > time {
            color: #acacac;
            font-size: 14px;
            margin-bottom: 1rem;
        }

    `}
`

NewsPreview.Row = styled.div`
    display: flex;
    flex-direction: column;
    height: unset;
    
    @media (min-width: ${BREAKS.MD}px) {
        display: grid;
        grid-gap: ${2*gap}px;
        grid-template-areas: ${p => p.template};
        height: ${p => p.height || 525}px;
        margin-bottom: ${2*gap + gap}px;
    }

    ${NewsPreview}:nth-child(1) { grid-area: a }
    ${NewsPreview}:nth-child(2) { grid-area: b }
    ${NewsPreview}:nth-child(3) { grid-area: c }
    ${NewsPreview}:nth-child(4) { grid-area: d }
`

export default NewsPreview
