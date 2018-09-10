import {connect} from 'react-redux'
import SectionCalculate from '../components/pages/MainPage/SectionCalculate';

import {
    setUserName,
    setUserMail,
    setUserPhone,
    sendFormData
} from "../store/page/actions";

export default connect(
    (store) => ({
        user: store.page.user
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
        sendFormData: (data) => {
            dispatch(sendFormData(data))
        }
    })
)(SectionCalculate)
