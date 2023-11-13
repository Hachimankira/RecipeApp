import React from 'react'
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { CardMedia, Grid, TextField, Typography } from '@mui/material';

const Form = ({ username, setUsername, password, setPassword, label, onSubmit }) => {
    const isLoginForm = label.toLowerCase() === 'login';

    return (
        <Grid container spacing={2} className="auth-container">
            <Grid item xs={6}>
                {isLoginForm ? (
                    <CardMedia
                        component="img"
                        height="150"
                        image="/images/login.jpg"
                        alt="Paella dish"
                    />
                ) : (
                    <CardMedia
                        component="img"
                        height="150"
                        image="/images/register.jpg"
                        alt="Paella dish"
                    />
                )}

            </Grid>
            <Grid item xs={6}>
                <form onSubmit={onSubmit}>
                    {isLoginForm ? (
                        <>
                            <h2>Sign in to your account</h2>
                        </>
                    ) : (
                        <>
                            <h2>Welcome to Recipe App</h2>
                            <Typography variant="subtitle2" gutterBottom sx={{ paddingBottom: "4px" }}>
                                Please create an account and start creating
                            </Typography>
                        </>
                    )}


                    {/* <h2>{label}</h2> */}
                    <div className="form-group">
                        <TextField
                            id="outlined-basic"
                            label="Username"
                            variant="outlined"
                            type="text"
                            // id="username"
                            value={username}
                            onChange={(event) => setUsername(event.target.value)}
                        />
                        {/* <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(event) => setUsername(event.target.value)}
                        /> */}
                    </div>
                    <div className="form-group">
                        <TextField
                            id="outlined-basic"
                            label="Password"
                            variant="outlined"
                            type="password"
                            // id="password"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                        />
                        {/* <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                        /> */}
                    </div>
                    <Button variant="contained" size="medium" type="submit">
                        {label}
                    </Button>
                    {/* <button type="submit">{label}</button> */}
                    {isLoginForm ? (
                        <div>
                            <Typography variant="subtitle2" gutterBottom sx={{ paddingTop: "2px" }}>
                                Don't have an account?
                                <Link to="/register">
                                    <Button variant="text">Click here</Button>
                                </Link>
                            </Typography>

                        </div>
                    ) : (
                        <div>
                            <Typography variant="subtitle2" gutterBottom sx={{ paddingTop: "2px" }}>
                                Already have an account?
                                <Link to="/login">
                                    <Button variant="text">Login here!</Button>
                                </Link>
                            </Typography>
                        </div>
                    )}
                </form>
            </Grid>
        </Grid>
    );
}

export default Form