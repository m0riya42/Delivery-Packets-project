import React from 'react'
import { Container } from '@material-ui/core';
import { Grid } from '@material-ui/core';

import UserCard from './UserCard';
const Users = ({ users }) => {


    return (
        <Container>
            <Grid container spacing={4} direction="row-reverse">
                {
                    users.map((user) => {
                        return <UserCard user={user} />
                    })
                }
            </Grid>
        </Container>

    )

}

export default Users;

