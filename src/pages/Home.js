import React, { useState, useEffect } from 'react';
import UserCard from '../components/UserCard';


const Home = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://reqres.in/api/users?page=1');
                const data = await response.json();
                setUsers(data.data);
            } catch (error) {
                console.log('Error fetching users:', error);
            }
        };

        fetchData();
    }, []);


    return (
        <div>
            <div>
                <nav className="navbar navbar-light" style={{ backgroundColor: "#0194ff", height: "65px" }}>
                    <div className="container-fluid">
                        <span className="navbar-brand mb-0 h1" style={{ color: "#fff", paddingLeft: "45rem" }}>Title</span>
                    </div>
                </nav></div>
                &nbsp;
            <h3 className='text-start' style={{ marginLeft: "3rem" }}>Users</h3>
            &nbsp;
            <div className='container'>
                <div className="row">
                    <div className="col-md-12">
                        <div className="user-cards">
                            {users.map(user => (
                                <UserCard key={user.id} user={user} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
