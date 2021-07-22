import React from 'react'


function PackageListItem({packageObj}) {
    return (
        <div>
            {packageObj.package_name}
            {packageObj.price}
            <img src={packageObj.img_url} />
            {packageObj.location}
            {packageObj.in_stock}
            
        </div>
    )
}

export default PackageListItem
