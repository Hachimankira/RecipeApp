import React from 'react'
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { CardMedia, Grid, TextField, Typography } from '@mui/material';

const Form = ({ 
    firstname, setFirstname, 
    lastname, setLastname, 
    username, setUsername, 
    password, setPassword, 
    label, 
    onSubmit }) => {
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
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img
                        className="inline-block h-36 w-36 mb-8 rounded-full"
                        src="/images/logo.png"
                        alt="profile"
                    />
                </div>
                <form onSubmit={onSubmit}>
                    {isLoginForm ? (
                        <>
                            <h2>Sign in to your account</h2>
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
                            </div>
                        </>
                    ) : (
                        <>
                            <h2>Welcome to Recipe App</h2>
                            <Typography variant="subtitle2" gutterBottom sx={{ textAlign: "center", paddingBottom: "4px" }}>
                                Please create an account and start creating
                            </Typography>
                            <div className="form-name">
                                <TextField
                                    id="outlined-basic"
                                    label="Firstname"
                                    variant="outlined"
                                    type="text"
                                    // id="firstname"
                                    value={firstname}
                                    onChange={(event) => setFirstname(event.target.value)}
                                    sx={{ paddingRight: "1rem"}}
                                />
                            {/* </div>
                            <div className="form-group"> */}
                                <TextField
                                    id="outlined-basic"
                                    label="Lastname"
                                    variant="outlined"
                                    type="text"
                                    // id="lastname"
                                    value={lastname}
                                    onChange={(event) => setLastname(event.target.value)}
                                />
                            </div>
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
                            </div>
                        </>
                    )}

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