import React from 'react';

const UserSearchBox = ({ handleFilterChange, handleInputChange, locations, departments, clients, locationValue, clientValue, departmentValue }) => {
    return (
        <form className="user-search">
            <input className="user-input" placeholder="Search for Peeps by name" name="userSearch" onChange={handleInputChange} />

            <div>
                <select id="locationSelect" defaultValue={locationValue} value={locationValue} onChange={handleFilterChange("location")}>
                    <option data-filter-type="location" value="all">All</option>
                    {locations.map((x) => {
                        return(
                            <option data-filter-type="location" value={x}>{x}</option>
                        )
                    })}
                </select>

                <select id="departmentSelect" defaultValue={departmentValue} value={departmentValue} onChange={handleFilterChange("department")}>
                    <option data-filter-type="department" value="all">All</option>
                    {departments.map((x) => {
                        return(
                            <option data-filter-type="department" value={x}>{x}</option>
                        )
                    })}
                </select>

                <select id="clientSelect" defaultValue={clientValue} value={clientValue} onChange={handleFilterChange("client")}>
                    <option data-filter-type="client" value="all">All</option>
                    {clients.map((x) => {
                        return(
                            <option data-filter-type="client" value={x}>{x}</option>
                        )
                    })}
                </select>
            </div>


        </form>
    )
}

export default UserSearchBox