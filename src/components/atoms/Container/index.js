import React from 'react'
import styled, {css} from 'styled-components'

/**
 * Базовый блок сетки, максимальная ширина 1500px, может работать как flex:
 * если имеется один из атрибутов align или justify
 * align - соответствует align-items
 * justify - соответствует justify-content
 */
const Container = styled.div`
    padding-left: 1rem;
    padding-right: 1rem;

    margin-left: auto;
    margin-right: auto;

    max-width: 1500px;
    width: 100%;

    ${p => (p.align || p.justify) && css`
        display: flex;
        align-items: ${p => p.align || 'initial'};
        justify-content: ${p => p.justify || 'initial'};
    `}
`

export default Container
