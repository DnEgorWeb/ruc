import styled, {css} from 'styled-components'

import BREAKS from '@constants/breakpoints'

import Section from '@components/atoms/Section'
import Container from '@components/atoms/Container'
import SectionTitle from '@components/atoms/SectionTitle'

const SpecialSection = styled(Section)`
    ${p => p.type === 'white' && css`background: #ffffff;`}
    ${p => p.type === 'grey' && css`background: #f7f7f7;`}

    ${p => (p.type === 'grey' || p.type === 'white') && css`
        ${SectionTitle} {
            color: #949494;
        }
    `}

    @media (min-width: ${BREAKS.MD}px) {
        ${Container} {
            padding-left: calc(250px + 190px);
        }
    }
`

export default SpecialSection
