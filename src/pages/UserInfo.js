import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

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
            <div>
                <nav className="navbar navbar-light" style={{ backgroundColor: "#0194ff", height: "65px" }}>
                    <div className="container-fluid">
                        <span className="navbar-brand mb-0 h1" style={{ color: "#fff" }}><a href="/" style={{ textDecoration: "none", fontWeight: "600", color: "#fff" }}>Back</a></span>
                    </div>
                </nav></div>
            &nbsp;
            <div className='container'>
                <div className='col-md-12'>
                    <div className='row' style={{alignItems:"center"}}>
                        <div className='col-md-4'>
                            <div class="card" style={{ width: "20rem" }}>
                                <img src={user.avatar} alt={user.first_name} />
                            </div>
                        </div>
                        <div className='col-md-5' >
                            <div class="card" style={{ background: "#f6f6f6", borderRadius:"15px" }}>
                                <div class="card-body">

                                    <div style={{display:'flex', justifyContent:"space-between"}}>
                                        <p>First Name</p>
                                        <p style={{paddingRight:"20rem"}}>{user.first_name}</p>
                                    </div>
                                    <div style={{display:'flex', justifyContent:"space-between"}}>
                                        <p>Last Name</p>
                                        <p style={{paddingRight:"21rem"}}>{user.last_name}</p>
                                    </div>
                                    <div style={{display:'flex', justifyContent:"space-between"}}>
                                        <p>Email</p>
                                        <p style={{paddingRight:"12.8rem"}}>{user.email}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3'></div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default UserInfo;
