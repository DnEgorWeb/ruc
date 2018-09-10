import styled from 'styled-components'
import BREAKS from '@constants/breakpoints'

const Row = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    
    @media (min-width: ${BREAKS.SM}px) {
        flex-direction: row;
    }
`

export default Row
