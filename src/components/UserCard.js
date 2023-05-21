import React from 'react';
import { Link } from 'react-router-dom';

const UserCard = ({ user }) => {
    return (
        <Link to={`/user/${user.id}`} style={{ textDecoration: 'none', color:"black" }}>
            <div className="user-card card" style={{ width: "25rem" }} hoverable>
                <img src={user.avatar} alt={user.first_name} className="card-img-top" />
                <div className="card-body">
                    <div className='text-start'>
                        <h3>{user.first_name}</h3>
                        <h6>{user.email}</h6>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default UserCard;