import React from 'react'
import styled, {css} from 'styled-components'
import Transition from 'react-transition-group/Transition'
import BREAKS from '@constants/breakpoints'

import CloseBtn from './CloseBtn'
import Title from './Title'
import {Button} from '@components'

const Wrapper = styled(({closeModal, setUserName, title, children, ...p}) => (
    <div {...p} onClick={(e) => e.stopPropagation()}>
        {closeModal && <CloseBtn onClick={closeModal} />}

        {title && <Title>{title}</Title>}

        {children}
    </div>
))`
    background-color: #ffffff;
    border-radius: 4px;
    box-shadow: 0 27px 36px 0 rgba(0, 0, 0, .35);

    padding: 2rem;

    width: 460px;
    max-width: calc(100% - 2rem);

    position: absolute;
    

    transition: opacity ${p => p.duration / 2}ms cubic-bezier(.75, -.5, 0, 1.75),
                transform ${p => p.duration}ms cubic-bezier(.75, -.5, 0, 1.75);

    opacity: 0;
    transform: translate3d(0, 2rem, 0);
    
    ${p => (p.state === 'entering' || p.state === 'exiting') && css`
        z-index: 1;
        opacity: 0;
        transform: translate3d(0, 2rem, 0);
    `}

    ${p => p.state === 'entered' && css`
        z-index: 1;
        opacity: 1;
        transform: translate3d(0, 0, 0);
    `}

    ${Title} {
        margin-bottom: 4rem;
    }

    ${CloseBtn} {
        position: absolute;

        top: 30px;
        right: 30px;
    }
    
    ${Button} {
        width: 100%;
    }
    
    @media (min-width: ${BREAKS.SM}px) {
        padding: 4rem;
        
        ${Button} {
            width: initial;
        }
    }

`

const duration = 400

function Modal({visible, children, ...p}) {
    return (
        <Transition in={visible} timeout={{
            enter: 0,
            exit: duration,
        }}>
            {state => <Wrapper state={state} duration={duration} {...p}>{children}</Wrapper>}
        </Transition>
    )
}

Modal.Row = styled.p`
    margin-top: 4rem;
`


export default Modal
