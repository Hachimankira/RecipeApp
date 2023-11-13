import React from 'react'
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Form = ({ username, setUsername, password, setPassword, label, onSubmit }) => {
    const isLoginForm = label.toLowerCase() === 'login';

    return (
        <div className="auth-container">
            <form onSubmit={onSubmit}>
                <h2>{label}</h2>
                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </div>
                <button type="submit">{label}</button>
                {isLoginForm ? (
                    <div>
                        <h5>Don't have an account?</h5>
                        <Link to="/register">
                            <Button variant="text">Create an account</Button>
                        </Link>
                    </div>
                ) : (
                    <div>
                        <h5>Already have an account?</h5>
                        <Link to="/login">
                            <Button variant="text">Login here!</Button>
                        </Link>
                    </div>
                )}


            </form>
        </div>
    );
}

export default Form