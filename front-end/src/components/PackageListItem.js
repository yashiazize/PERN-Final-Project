import React from 'react'
import { Link } from 'react-router-dom'

function PackageListItem({packageObj}) {

    return (
        <div className="card" style={{width: "30rem"}}>
            <img src={packageObj.img_url} style={{height: "22rem"}} className="card-img-top" alt="img_url"></img>
            <div className="card-body">
            <h5 className="card-title">{packageObj.package_name}</h5>
            <p>Price: ${packageObj.price}</p>
            <Link className="packageDetailsButton" to={`/travelpackages/${packageObj.id}`}>Package Details</Link>
            </div>
        </div>
    )
}

export default PackageListItem
