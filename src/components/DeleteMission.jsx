import React from 'react'
import NavBar from './NavBar'

const DeleteMission = () => {
  return (
    <>
    <NavBar/>
    <div className="container mt-5">
      <div className="card shadow p-4 col-md-6 mx-auto">

        <h3 className="text-center mb-3">Delete Mission</h3>

        <label className="form-label">Mission ID</label>
        <input
          type="text"
          className="form-control mb-3"
          placeholder="Enter Mission ID"
        />

        <button className="btn btn-danger">
          Delete
        </button>

      </div>
    </div>
    </>
  )
}

export default DeleteMission