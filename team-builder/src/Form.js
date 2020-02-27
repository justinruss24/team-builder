import React, {useState} from 'react';

const TeamForm = props => {
    const [member, setMember] = useState({
        name: "",
        email: "",
        role: ""
    });

    //onChange handler to control inputs
    const handleChange = el => {
        setMember({ ...member, [el.target.name]: el.target.value });
        // console.log(member);
    };

    const sendMember = el => {
        el.preventDefault();
        props.addNewMember(member);
        setMember({ name: "", email: "", role: ""});
    };

    return (
        <form onSubmit={sendMember}>
            <label htmlFor="name">Name</label>
            <input id="name" type="text" name="name" onChange={handleChange} value={member.name} />
            <label htmlFor="email">Email</label>
            <input id="email" type="text" name="email" onChange={handleChange} value={member.email} />
            <label htmlFor="role">Role</label>
            <input id="role" type="text" name="role" onChange={handleChange} value={member.role} />
            <button type="submit">Add Member</button>
        </form>
    );
};

export default TeamForm;