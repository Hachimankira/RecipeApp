import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import LogoutIcon from '@mui/icons-material/Logout';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import PersonIcon from '@mui/icons-material/Person';




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
                            <img
                                className="inline-block h-12 w-12 rounded-full ring-2 ring-gray"
                                src="/images/profile.jpg"
                                alt="profile"
                                onClick={handleMenu}
                            />
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
                                    <PersonIcon sx={{ fontSize: 40, paddingRight: "1rem" }} />  Profile
                                </MenuItem>
                                <MenuItem onClick={logout}>
                                    <LogoutIcon sx={{ fontSize: 40, paddingRight: "1rem" }} /> Logout
                                </MenuItem>
                            </Menu>
                        </div>
                    </>
                )}

            </div>
        </div>

    );
};