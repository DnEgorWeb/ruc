import {
    SET_MAINMENU_VISIBILITY, SET_USER_MAIL, SET_USER_MESSAGE, SET_USER_NAME, SET_USER_PHONE,
} from '@constants/Page'

const initialState = {
    mainMenuVisible: false,
    user: {
        name   : '',
        mail   : '',
        phone  : '',
        message: ''
    }
}

export default function page(state = initialState, action) {
    switch(action.type) {
        case SET_MAINMENU_VISIBILITY: {
            return {
                mainMenuVisible: action.payload,
            }
        }
        case SET_USER_NAME: {
            return {
                user: {
                    ...state.user,
                    name: action.payload
                }
            }
        }
        case SET_USER_MAIL: {
            return {
                user: {
                    ...state.user,
                    mail: action.payload
                }
            }
        }
        case SET_USER_PHONE: {
            return {
                user: {
                    ...state.user,
                    phone: action.payload
                }
            }
        }
        case SET_USER_MESSAGE: {
            return {
                user: {
                    ...state.user,
                    message: action.payload
                }
            }
        }

        default: {
            return state
        }
    }
}
