import React from 'react'
import { Link } from 'react-router-dom'

function PackageListItem({packageObj}) {
    return (
        <div className="card" style={{width: "30rem"}}>
            <img src={packageObj.img_url} className="card-img-top" alt="img_url"></img>
            <div className="card-body">
            <h5 className="card-title">{packageObj.package_name}</h5>
            <p>Price: ${packageObj.price}</p>
            <Link to="/travelpackages/:id" className="btn btn-primary">Package Details</Link>
            </div>
        </div>
    )
}

export default PackageListItem
