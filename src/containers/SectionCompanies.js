import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import SectionCompanies from '@components/pages/CompaniesPage/SectionCompanies.js'

import {
    openModal,
} from 'store/modal/actions'

export default connect(
    null,
    dispatch => bindActionCreators({
        openModal,
    }, dispatch)
)(SectionCompanies)
