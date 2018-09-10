import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import SectionBanks from '@components/pages/BanksPage/SectionBanks.js'

import {
    openModal,
} from 'store/modal/actions'

export default connect(
    null,
    dispatch => bindActionCreators({
        openModal,
    }, dispatch)
)(SectionBanks)
