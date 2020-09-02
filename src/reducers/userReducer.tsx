import userService from '../services/users'

const userReducer = (state = [], action) => {
    switch (action.type) {
        case 'FILTER_USER':
            break;
        case 'INIT_USERS':
            return action.data
        default:
            return state
    }
}

export const initializeUsers = () => {
    return async dispatch => {
        const initUsers = await userService.getAll()

        const users = [...initUsers.sort((a, b) => a.last_name.toUpperCase().localeCompare(b.last_name.toUpperCase()))]
        dispatch({
            type: 'INIT_USERS',
            data: users,
        })
    }
}

export default userReducer