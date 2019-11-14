import React from 'react';

const Member = props =>{

    const {name, email, role} = props.member;

    return (
        <div className="member-card">
            <h2>{name}</h2>
            <h3>Email: {email}</h3>
            <h3>Role: {role}</h3>
        </div>
    );
};

export default Member;