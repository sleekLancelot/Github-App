import {
    SEARCH_USERS,
    SET_LOADING,
    CLEAR_USERS,
    GET_USER,
    GET_REPOS
} from '../type'
import { SHOW_USERS } from '../type'

const GithubReducer = (state, action) => {
    switch (action.type) {
        case SHOW_USERS:
            return {
                ...state,
                users: action.payload,
                loading: false
            }
        case SEARCH_USERS:
            return {
                ...state,
                users: action.payload,
                loading: false
            }
        case SET_LOADING:
            return {
                ...state,
                loading: false
            }

        default:
            return state
    }
}

export default GithubReducer
