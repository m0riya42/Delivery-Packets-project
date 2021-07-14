import React, { useState } from 'react';
import { Container } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import UserCard from './UserCard';

const Users = ({ users, handleClose }) => {
   

    return (
        <Container>
            <Grid container spacing={4} direction="row-reverse">
                {
                    users.map((user) => {
                        return <UserCard user={user} handleClose={handleClose} />
                    })
                }
            </Grid>
        </Container>

    )

}

export default Users;
