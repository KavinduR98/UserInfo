import React from 'react';
import { Link } from 'react-router-dom';

const UserCard = ({ user }) => {
    return (
        <div className="user-card card" style={{ width: "18rem" }}>
            <img src={user.avatar} alt={user.first_name} className="card-img-top" />
            <div className="card-body">
                <h3>{user.first_name}</h3>
                <a href="{`/user/${user.id}" class="btn btn-primary">View Details</a>
            </div>
        </div>
    );
};

export default UserCard;