import React, { useState, useEffect } from "react";

function DataProvider({ url, renderContent }) {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(json => setData(json));
    }, [url]);

    return (
        <>
            {
                renderContent(data)
            }
        </>
    )
}

export { DataProvider };