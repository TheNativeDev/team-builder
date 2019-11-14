import React from 'react';
import Member from './Member';

const TeamMembers = props =>{

    if(!props.members){
        return (<h2>Loading..</h2>);
    }

    return (
        <div>
            <h2>Team Member List</h2>
            {props.members.map( (member, index) => <Member key={index} member={member} />)}
        </div>
    );
};
export default TeamMembers;