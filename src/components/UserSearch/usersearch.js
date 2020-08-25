import React from 'react';

const UserSearchBox = ({ handleSelectChange, handleInputChange }) => {
    return (
        <form className="user-search">
            <input className="user-input" placeholder="Search for Peeps by name" name="userSearch" onChange={handleInputChange} />

            <div>
                <select defaultValue="all" onChange={handleSelectChange}>
                    <option data-filter-type="location" value="all">All</option>
                    <option data-filter-type="location" value="boston">Boston</option>
                    <option data-filter-type="location" value="chicago">Chicago</option>
                    <option data-filter-type="location" value="tampa">Tampa</option>
                </select>

                <select defaultValue="all" onChange={handleSelectChange}>
                    <option data-filter-type="team" value="all">All</option>
                    <option data-filter-type="team" value="design">Design</option>
                    <option data-filter-type="team" value="engineering">Engineering</option>
                    <option data-filter-type="team" value="finance">Finance</option>
                </select>

                <select defaultValue="all" onChange={handleSelectChange}>
                    <option data-filter-type="client" value="all">All</option>
                    <option data-filter-type="client" value="rightpoint">Rightpoint</option>
                    <option data-filter-type="client" value="pelotonia">Pelotonia</option>
                    <option data-filter-type="client" value="ge">GE</option>
                </select>
            </div>


        </form>
    )
}

export default UserSearchBox