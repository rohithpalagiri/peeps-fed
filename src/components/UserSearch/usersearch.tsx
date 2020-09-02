import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filterLocation, filterClient, filterDepartment, filterUserInput } from '../../reducers/filterReducer'

const UserSearchBox = ({locations, departments, clients }) => {
    const dispatch = useDispatch()

    const filter = useSelector(state => state.filter)

    return (
        <form className="user-search">
            <input className="user-input" placeholder="Search for Peeps by name" name="userSearch" value={filter.userInput} onChange={(e) => dispatch(filterUserInput(e.target.value))} />

            <div>
                <select id="locationSelect" value={filter.locationFilter} onChange={(e) => dispatch(filterLocation(e.target.value))}>
                    <option data-filter-type="location" value={"all"}>All</option>
                    {locations.map((x) => {
                        return (
                            <option data-filter-type="location" key={x} value={x.toLowerCase()}>{x}</option>
                        )
                    })}
                </select>

                <select id="departmentSelect" value={filter.departmentFilter} onChange={(e) => dispatch(filterDepartment(e.target.value))}>
                    <option data-filter-type="department" value="all">All</option>
                    {departments.map((x) => {
                        return (
                            <option data-filter-type="department" key={x} value={x.toLowerCase()}>{x}</option>
                        )
                    })}
                </select>

                <select id="clientSelect" value={filter.clientFilter} onChange={(e) => dispatch(filterClient(e.target.value))}>
                    <option data-filter-type="client" value="all">All</option>
                    {clients.map((x) => {
                        return (
                            <option data-filter-type="client" key={x} value={x.toLowerCase()}>{x}</option>
                        )
                    })}
                </select>
            </div>
        </form>
    )
}

export default UserSearchBox