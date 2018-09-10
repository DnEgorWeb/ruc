import cryptoMD5 from 'crypto-js/md5';
import {createAction} from 'redux-actions'

import {
    SET_MAINMENU_VISIBILITY, SET_USER_MAIL, SET_USER_MESSAGE,
    SET_USER_NAME, SET_USER_PHONE
} from '@constants/Page'


export const setMainMenuVisibility = createAction(SET_MAINMENU_VISIBILITY)
export const setUserName           = createAction(SET_USER_NAME)
export const setUserMail           = createAction(SET_USER_MAIL)
export const setUserPhone          = createAction(SET_USER_PHONE)
export const setUserMessage        = createAction(SET_USER_MESSAGE)

export const sendFormData = (data) => (dispatch, getState) => {
    const { page } = getState();
    console.log(page);
    const body = {
            ...data,
            userName : page.user.name,
            userMail : page.user.mail,
            userPhone: page.user.phone,
            comment: page.user.message
        }
    const hash_key = cryptoMD5(JSON.stringify(body)).toString();
    const formData = new FormData();
    formData.append('json', JSON.stringify(body));
    formData.append('hash_key', hash_key);

    fetch('/send_mail.php', {
        method: 'post',
        body : formData
    })
        .then(res => console.log(res))
        .catch(e => console.log(e))
}

export const initialize = () => (dispatch) => {

}
