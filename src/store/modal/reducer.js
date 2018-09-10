import {
    OPEN_MODAL,
    CLOSE_MODAL,
} from '@constants/Modal'

const initialState = {
    current: null,
}

export default function modal(state = initialState, action) {
    switch(action.type) {
        case OPEN_MODAL: {
            return {
                current: action.payload,
            }
        }

        case CLOSE_MODAL: {
            return {
                current: false,
            }
        }

        default: {
            return state
        }
    }
}
