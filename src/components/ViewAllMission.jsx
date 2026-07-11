import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const ViewAllMission = () => {

    const [missions, changeMissions] = useState([])

    const fetchData = () => {

        axios.get("https://raw.githubusercontent.com/anishpdm/demo-json-api/refs/heads/main/mission.json").then(
            (response) => {
                changeMissions(response.data)
            }
        ).catch()
    }

    useEffect(
        () => {
            fetchData()
        }, []
    )

    const getBadge = (status) => {
        if (status === "Active") return "bg-success"
        if (status === "Upcoming") return "bg-primary"
        if (status === "Completed") return "bg-secondary"
        return "bg-warning text-dark"
    }

    return (
        <>
            <NavBar />

            <div className="container mt-4">
                <div className="row g-4">

                    {missions.map((mission, index) => {
                        return (

                            <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={mission.missionId}>

                                <div className="card border-0 shadow-lg rounded-4 h-100">

                                    <img
                                        src={mission.image}
                                        alt={mission.missionName}
                                        className="card-img-top rounded-top-4"
                                        style={{ height: "230px", objectFit: "cover" }}
                                    />

                                    <div className="card-body">

                                        <div className="d-flex justify-content-between align-items-center mb-2">
                                            <h5 className="fw-bold mb-0">
                                                {mission.missionName}
                                            </h5>

                                            <span className={`badge ${getBadge(mission.status)}`}>
                                                {mission.status}
                                            </span>
                                        </div>

                                        <p className="text-muted mb-2">
                                            <strong>Agency:</strong> {mission.agency}
                                        </p>

                                        <p className="mb-2">
                                            <strong>Destination:</strong> {mission.destination}
                                        </p>

                                        <div className="d-flex justify-content-between mb-3">
                                            <span>
                                                <strong>Year:</strong> {mission.launchYear}
                                            </span>

                                            <span className="text-success fw-bold">
                                                ₹{mission.budgetCrores} Cr
                                            </span>
                                        </div>

                                    </div>

                                    <div className="card-footer bg-white border-0">
                                        <button className="btn btn-dark w-100 rounded-pill">
                                            View Mission
                                        </button>
                                    </div>

                                </div>

                            </div>

                        )
                    })}

                </div>
            </div>
        </>
    )
}

export default ViewAllMission