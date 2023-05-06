import React from 'react';
import { USERS } from "../../constans";
import { UserList } from '../../components/userList/userlist';

export const Home = () => {
    return (
        <div>
            <h1>Home</h1>

            <UserList users={USERS} />
        </div>
    )
}