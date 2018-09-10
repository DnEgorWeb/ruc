import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import MainMenu from '@components/molecules/MainMenu'

import {setMainMenuVisibility} from 'store/page/actions'

import {
    openModal,
} from 'store/modal/actions'

import {
    MODAL_GET_INFO,
    MODAL_GET_REPORTS,
} from 'constants/Modal'

export default connect(
    state => ({
        active: state.page.mainMenuVisible,
    }),
    dispatch => bindActionCreators({
        closeMenu: () => setMainMenuVisibility(false),
        openInfo: () => openModal(MODAL_GET_INFO),
        openReports: () => openModal(MODAL_GET_REPORTS),
    }, dispatch)
)(MainMenu)
