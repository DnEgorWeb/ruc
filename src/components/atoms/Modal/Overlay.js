import React from 'react'
import styled, {css} from 'styled-components'
import Transition from 'react-transition-group/Transition'

const Overlay = styled.div`
    background: rgba(0, 0, 0, .3);
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 4rem 2rem;
    overflow: hidden;
    overflow-y: auto;

    position: fixed;
    left: 0;
    top: 0;

    height: 100vh;
    width: 99.9999vw; //TODO если 100vw, то не работает скролл в хроме. Хз почему :(
    
    transform: translate3d(0,0,0);
    z-index: 9;

    transition: opacity ${p => p.duration / 2}ms ease;
    pointer-events: none;
    opacity: 0;

    ${p => (p.state === 'entering' || p.state === 'exiting') && css`
        opacity: 0;
        pointer-events: none;
    `}

    ${p => p.state === 'entered' && css`
        opacity: 1;
        pointer-events: auto;
    `}
`

const duration = 400

export default ({visible, onClose = () => {}, children}) => (
    <Transition in={visible} timeout={{
        enter: 0,
        exit: duration,
    }}>
        {state => (
            <Overlay
                duration={duration}
                state={state}
                onClick={onClose}
            >{children}</Overlay>
        )}
    </Transition>
)
