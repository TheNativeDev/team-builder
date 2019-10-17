import React from 'react';

const Form = props =>{

    const handleSubmit = e =>{
        e.preventDefault();


        const newMember = {
            name: e.target.name.value,
            email: e.target.email.value,
            role: e.target.role.value
        };

        props.addMember(newMember);
        
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name: </label>
            <input type="text" id="name" name="name" placeholder="Full Name" />
            <label htmlFor="email">Email: </label>
            <input type="text" id="email" name="email" placeholder="johndoe@gmail.com" />
            
            <label htmlFor="role">Role: </label>
            <select id="role" name="role">
                <option value="Team Lead">Team Lead</option>
                <option value="UI/UX">UI / UX</option>
                <option value="Frontend">Frontend</option>
                <option value="Backend">Backend</option>
                <option value="Data Science">Data Science</option>
                <option value="Android">Android</option>
                <option value="IOS">IOS</option>
            </select>
            <button type="submit">Add Member</button>
        </form>
    );
};

export default Form;