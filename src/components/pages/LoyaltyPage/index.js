import React, {Fragment} from 'react'

import SectionLoyalty from './SectionLoyalty'
import SectionOutsoursing from './SectionOutsoursing'
import SectionLoyaltySystem from './SectionLoyaltySystem'
import SectionCharacteristics from './SectionCharacteristics'
import SectionSixStepsToStart from './SectionSixStepsToStart'


function LoyaltyPage() {
    return (
        <Fragment>
            <SectionLoyalty />
            <SectionOutsoursing />
            <SectionLoyaltySystem />
            <SectionCharacteristics />
            <SectionSixStepsToStart />
        </Fragment>
    )
}

export default LoyaltyPage
