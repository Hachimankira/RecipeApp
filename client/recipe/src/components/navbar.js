import { Link } from "react-router-dom";
import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import LogoutIcon from '@mui/icons-material/Logout';
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
        setAnchorEl(null);
    }

    const viewProfile = () => {
        navigate("/profile");
        setAnchorEl(null);
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
    const open = Boolean(anchorEl);

    return (
        <div className="navbar-container">
            <div className="navbar">
                <NavLink to="/" activeClassName="active">Home</NavLink>
                <NavLink to="/create-recipe" activeClassName="active">Create</NavLink>
                {!cookies.access_token ? (
                    <NavLink to="/login" activeClassName="active">Login</NavLink>
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
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                }}
                            >
                                <MenuItem onClick={viewProfile}>
                                    Profile
                                </MenuItem>
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