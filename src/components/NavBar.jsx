import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div>

            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">

                    <Link className="navbar-brand" to="/">
                        Space Mission Tracker App
                    </Link>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link className="nav-link active" to="/">Add Mission</Link>
                            <Link className="nav-link" to="/search">Search Mission</Link>
                            <Link className="nav-link" to="/delete">Delete Mission</Link>
                            <Link className="nav-link" to="/view">View All Missions</Link>
                        </div>
                    </div>

                </div>
            </nav>

        </div>
    )
}

export default NavBar