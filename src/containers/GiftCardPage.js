import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {GiftCardPage} from '@components'

import {
    openModal,
} from 'store/modal/actions'


export default connect(
    null,
    dispatch => bindActionCreators({
        openModal,
    }, dispatch)
)(GiftCardPage)
