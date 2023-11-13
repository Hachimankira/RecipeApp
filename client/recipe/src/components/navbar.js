import { Link } from "react-router-dom";
import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircle from '@mui/icons-material/AccountCircle';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { red } from '@mui/material/colors';
import Avatar from '@mui/material/Avatar';




export const Navbar = () => {
    const [cookies, setCookies] = useCookies(["access_token"]);
    const navigate = useNavigate();

    const logout = () => {
        setCookies("access_token", "");
        window.localStorage.removeItem("userID");
        navigate("/login")
    }

    const [anchorEl, setAnchorEl] = React.useState(null);

    // const handleChange = (event) => {
    //     setAuth(event.target.checked);
    // };

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className="navbar-container">
            <div className="navbar">
                <NavLink to="/" activeClassName="active">Home</NavLink>
                <NavLink to="/create-recipe" activeClassName="active">Create</NavLink>
                {!cookies.access_token ? (
                    <NavLink to="/auth" activeClassName="active">Login</NavLink>
                ) : (
                    <>
                        <NavLink to="/saved-recipe" activeClassName="active">Saved</NavLink>
                        {/* <Button variant="outlined">
                            <LogoutIcon sx={{ fontSize: 20, color: "#fff" }} onClick={logout} />
                        </Button> */}
                        <div>
                            {/* <IconButton
                                sx={{ fontSize: 25 }}
                                // size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleMenu}
                                color="inherit"
                            >
                                <AccountCircle />
                            </IconButton> */}
                                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe" onClick={handleMenu}>
                                    KS
                                </Avatar>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                <MenuItem onClick={handleClose}>Profile</MenuItem>
                                <MenuItem onClick={logout}>
                                    Logout <LogoutIcon sx={{ fontSize: 20, paddingLeft: "1rem" }} />
                                </MenuItem>
                            </Menu>
                        </div>
                    </>
                )}

            </div>
        </div>

    );
};