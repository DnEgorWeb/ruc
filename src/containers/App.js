import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {withRouter} from 'react-router'
import App from '../components/App'

export default withRouter(connect(
    state => ({
        mainMenuVisible: state.page.mainMenuVisible,
    }),
    dispatch => bindActionCreators({
    }, dispatch)
)(App))
