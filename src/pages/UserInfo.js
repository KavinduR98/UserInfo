import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const UserInfo = () => {
    const { userId } = useParams();
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://reqres.in/api/users/${userId}`);
                const data = await response.json();
                setUser(data.data);
            } catch (error) {
                console.log('Error fetching user information:', error);
            }
        };

        fetchData();
    }, [userId]);

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>User Information</h1>
            <div>
                <img src={user.avatar} alt={user.first_name} />
                <h2>{user.first_name}</h2>
                <h2>{user.last_name}</h2>
                <p>Email: {user.email}</p>
            </div>
            <Link to="/" className="btn btn-primary">
                Back
            </Link>
        </div>
    );
};

export default UserInfo;
