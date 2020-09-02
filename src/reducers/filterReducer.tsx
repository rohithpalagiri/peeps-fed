const initDropdownFilters = {
    locationFilter: 'all',
    clientFilter: 'all',
    departmentFilter: 'all',
    userInput: ''
}

const filterReducer = (state = initDropdownFilters, action) => {
    switch (action.type) {
        case 'FILTER_LOCATION':
            return {...state, locationFilter: action.filter}
        case 'FILTER_CLIENT':
            return {...state, clientFilter: action.filter}
        case 'FILTER_DEPARTMENT':
            return {...state, departmentFilter: action.filter}
        case 'FILTER_INPUT':
            return {...state, userInput: action.filter}
        default:
            return state
    }
}

export const filterLocation = (filter) => {
    return {
        type: 'FILTER_LOCATION',
        filter,
    }
}

export const filterClient = (filter) => {
    return {
        type: 'FILTER_CLIENT',
        filter,
    }
}

export const filterDepartment = (filter) => {
    return {
        type: 'FILTER_DEPARTMENT',
        filter,
    }
}

export const filterUserInput = (filter) => {
    return {
        type: 'FILTER_INPUT',
        filter,
    }
}

export default filterReducer