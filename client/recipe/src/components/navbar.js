import { Link } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';

export const Navbar = () => {
    const [cookies, setCookies] = useCookies(["access_token"]);
    const navigate = useNavigate();

    const logout = () => {
        setCookies("access_token", "");
        window.localStorage.removeItem("userID");
        navigate("/auth")
    }

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
                        <Button variant="outlined">
                            <LogoutIcon sx={{ fontSize: 20, color: "#fff" }} onClick={logout} />
                        </Button>
                    </>
                )}
            </div>
        </div>

    );
};