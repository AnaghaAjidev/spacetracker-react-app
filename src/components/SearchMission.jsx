import React from 'react'
import NavBar from './NavBar'

const SearchMission = () => {
    return (
        <>
            <NavBar />
            <div className="container mt-5">
                <div className="card shadow p-4 col-md-6 mx-auto">

                    <h3 className="text-center mb-3">Search Mission</h3>

                    <label className="form-label">Mission ID</label>
                    <input
                        type="text"
                        className="form-control mb-3"
                        placeholder="Enter Mission ID"
                    />

                    <button className="btn btn-primary">
                        Search
                    </button>

                </div>
            </div>
        </>
    )
}

export default SearchMission