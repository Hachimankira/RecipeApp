import React, { useState, useEffect } from 'react';
import { Container, Typography, Avatar, Paper, Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { useGetUserID } from '../hooks/useGetUserID';
import axios from "axios";


export const Profile = () => {
    const userID = useGetUserID();

    // Assuming you have a user object with details
    const [user, setUser] = useState({
        name: 'Upasna Singh Thakuri',
        username: 'upu',
        bio: 'Passionate home cook and food enthusiast.',
        // Add more details as needed
    });
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
          try {
            const response = await axios.get(`http://localhost:3001/auth/user/ids/${userID}`);
            setUser(response.data.user);
          } catch (error) {
            setError(error.response?.data?.error || 'Error fetching user data');
          }
        };
    
        if (userID) {
          fetchUserData();
        }
      }, [userID]);
    
      if (error) {
        return <div>{error}</div>;
      }

    return (
        <Container maxWidth="sm">
            <Paper elevation={3} sx={{ padding: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                {/* <Avatar sx={{ width: 100, height: 100, mb: 2 }}>
                    <PersonIcon />
                </Avatar> */}
                <img
                    className="inline-block h-36 w-36 rounded-full ring-2 ring-gray"
                    src="/images/profile.jpg"
                    alt="profile"
                />
                <Typography variant="h5" gutterBottom>
                    {user.firstname}  {user.lastname}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary" gutterBottom>
                    @{user.username}
                </Typography>
                <Typography variant="body1" paragraph>
                    {user.bio}
                </Typography>
                {/* Add more user details here */}
                <Button variant="outlined" startIcon={<EditIcon />}>
                    Edit Profile
                </Button>
            </Paper>
        </Container>
    );
};


