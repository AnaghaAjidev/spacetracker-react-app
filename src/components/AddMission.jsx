import React from 'react'
import NavBar from './NavBar'

const AddMission = () => {
    return (
        <>
            <NavBar />
            <div className="container mt-5">
                <div className="card shadow p-4">
                    <h2 className="text-center mb-4">Add Mission</h2>

                    <div className="row g-3">

                        <div className="col-12 col-sm-6">
                            <label className="form-label">Mission ID</label>
                            <input type="text" className="form-control" placeholder="Enter Mission ID" />
                        </div>

                        <div className="col-12 col-sm-6">
                            <label className="form-label">Mission Name</label>
                            <input type="text" className="form-control" placeholder="Enter Mission Name" />
                        </div>

                        <div className="col-12 col-sm-6">
                            <label className="form-label">Agency</label>
                            <input type="text" className="form-control" placeholder="Enter Agency Name" />
                        </div>

                        <div className="col-12 col-sm-6">
                            <label className="form-label">Launch Vehicle</label>
                            <input type="text" className="form-control" placeholder="Enter Launch Vehicle" />
                        </div>

                        <div className="col-12 col-sm-6">
                            <label className="form-label">Destination</label>
                            <input type="text" className="form-control" placeholder="Enter Destination" />
                        </div>

                        <div className="col-12 col-sm-6">
                            <label className="form-label">Mission Type</label>
                            <select className="form-select">
                                <option>Select Mission Type</option>
                                <option>Orbiter</option>
                                <option>Lander</option>
                                <option>Rover</option>
                                <option>Crewed</option>
                                <option>Satellite</option>
                            </select>
                        </div>

                        <div className="col-12 col-sm-6">
                            <label className="form-label">Budget (in Crores)</label>
                            <input type="number" className="form-control" placeholder="Enter Budget" />
                        </div>

                        <div className="col-12 col-sm-6">
                            <label className="form-label">Launch Year</label>
                            <input type="number" className="form-control" placeholder="Enter Launch Year" />
                        </div>

                        <div className="col-12 col-sm-6">
                            <label className="form-label">Status</label>
                            <select className="form-select">
                                <option>Select Status</option>
                                <option>Planned</option>
                                <option>Upcoming</option>
                                <option>Active</option>
                                <option>Completed</option>
                            </select>
                        </div>

                        <div className="col-12 col-sm-6">
                            <label className="form-label">Image URL</label>
                            <input type="url" className="form-control" placeholder="Enter Image URL" />
                        </div>

                        <div className="col-12">
                            <label className="form-label">Description</label>
                            <textarea className="form-control" rows="3" placeholder="Enter Description"></textarea>
                        </div>

                        <div className="col-12 text-center">
                            <button className="btn btn-success px-4">
                                Add Mission
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default AddMission