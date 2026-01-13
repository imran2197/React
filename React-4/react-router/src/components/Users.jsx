import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

function Users({isAdmin}) {
    const params = useParams();
    const userId = params.id;

    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const fetchData = async() => {
            const response = await fetch(`https://fakestoreapi.com/users/${userId}`);
            const json = await response.json();
            setUserData(json);
        }
        fetchData();
        console.log(userData);
    }, [])
  return (
    <div>
      {
        userData == null ? (
            <h2>Loading...</h2>
        ) : (
            <>
                <h2>Admin: {isAdmin}</h2>
                <h4>User Name: {userData.username}</h4>
                <h3> Name: {userData.name.firstname + " " + userData.name.lastname}</h3>
                <h4> Phone: {userData.phone}</h4>
            </>
        )
      }
    </div>
  )
}

export default Users
