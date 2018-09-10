import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {Modal} from '@components'

import {
    closeModal,
} from 'store/modal/actions'


export default connect(
    null,
    dispatch => bindActionCreators({
        closeModal,
    }, dispatch)
)(Modal)
