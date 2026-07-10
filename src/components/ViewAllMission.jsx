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

                    {missions.map(
                        (mission, index) => {
                            return (

                                <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={mission.missionId}>
                                    <div className="card h-100 shadow">

                                        <img
                                            src={mission.image}
                                            className="card-img-top"
                                            alt={mission.missionName}
                                            style={{ height: "220px", objectFit: "cover" }}
                                        />

                                        <div className="card-body">
                                            <h5>{mission.missionName}</h5>
                                            <p><strong>Agency:</strong> {mission.agency}</p>
                                            <p><strong>Destination:</strong> {mission.destination}</p>
                                            <p><strong>Launch Year:</strong> {mission.launchYear}</p>
                                            <p><strong>Budget:</strong> ₹{mission.budgetCrores} Crores</p>

                                            <span className={`badge ${getBadge(mission.status)}`}>
                                                {mission.status}
                                            </span>

                                        </div>

                                    </div>
                                </div>

                            )
                        }
                    )}

                </div>
            </div>
        </>
    )
}

export default ViewAllMission