import React from 'react'


function PackageListItem({packageObj}) {
    return (
        <div>
            <img src={packageObj.img_url} />
            <p>{packageObj.package_name}</p>
            <p>Price: ${packageObj.price}</p>
            <p>{packageObj.in_stock}</p>
            
        </div>
    )
}

export default PackageListItem
