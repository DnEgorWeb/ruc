import {connect} from 'react-redux'
import {Modals} from '@components'

/*import {
    closeModal,
} from 'store/modal/actions'*/

import {
    setUserName,
    setUserMail,
    setUserPhone,
    setUserMessage,
    sendFormData
} from "../store/page/actions";

export default connect(
    (store) => ({
        current: store.modal.current,
        user   : store.page.user,
    }),
    dispatch => ({
        setUserName: (e) => {
            dispatch(setUserName(e.target.value))
        },
        setUserMail: (e) => {
            dispatch(setUserMail(e.target.value))
        },
        setUserPhone: (e) => {
            dispatch(setUserPhone(e.target.value))
        },
        setUserMessage: (e) => {
            dispatch(setUserMessage(e.target.value))
        },
        sendFormData: (e, data) => {
            dispatch(sendFormData(data))
        }
    })
)(Modals)
