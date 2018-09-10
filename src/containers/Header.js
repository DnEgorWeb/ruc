import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import Header from '@components/molecules/Header'

import {
    openModal,
} from 'store/modal/actions'

import {
    setMainMenuVisibility,
} from 'store/page/actions'

import {
    MODAL_ORDER_CONSULT,
} from 'constants/Modal'


export default connect(
    null,
    dispatch => bindActionCreators({
        openModal: () => openModal(MODAL_ORDER_CONSULT),
        
        setMainMenuVisibility: () => setMainMenuVisibility(true),
    }, dispatch)
)(Header)
