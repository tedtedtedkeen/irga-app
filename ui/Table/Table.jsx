import React from 'react'

const Table = ({ data, index }) => {

    let dataObj;

    if (index === 0) dataObj = data.first;
    else dataObj = data.second;

    console.log(index);

    return (
        <div>
            <h2>
                { dataObj.firstNum }
            </h2>
        </div>
    )
}

export { Table };