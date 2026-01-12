import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

function FetchData() {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            const json = await response.json();
            setData(json);
        }
        fetchData();
    }, [])


  return (
    <div>
        <h2>Fetched Data</h2>
        {
            data ? (
                <h2>Name: {data[0].name}</h2>
            ) : (
                <h2>Loading...</h2>
            )
        }
    </div>
  )
}

export default FetchData
