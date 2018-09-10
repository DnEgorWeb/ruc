import React, {Fragment} from 'react'

import {
    Section,
    Container,
    SectionTitle,
} from '@components'

import SectionProcessing    from './SectionProcessing'
import SectionRucardNumbers from './SectionRucardNumbers'
import SectionConnect       from './SectionConnect'
import SectionCalculate     from '@containers/SectionCalculate'
import SectionSolutions     from './SectionSolutions'
import SectionTechnologies  from './SectionTechnologies'
import SectionNews          from './SectionNews'
import Statuses             from './Statuses'
import SectionPartners      from './SectionPartners'

function MainPage() {
    return (
        <Fragment>
            <SectionProcessing />

            <SectionRucardNumbers />

            <SectionConnect />

            <SectionCalculate />

            <SectionSolutions />

            <SectionTechnologies />

            <SectionNews />

            <Container>
                <Statuses />
            </Container>

            <SectionPartners />
        </Fragment>
    )
}

export default MainPage
