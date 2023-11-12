import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';

export const Navbar = () => {
    const [cookies, setCookies] = useCookies(["access_token"]);
    const navigate = useNavigate();

    const logout = () => {
        setCookies("access_token", "");
        window.localStorage.removeItem("userID");
        navigate("/auth")
    }

    return (
        // <div className="navbar">
        //     <Link to="/">Home</Link>
        //     <Link to="/create-recipe">Create</Link>
        //     {!cookies.access_token ?
        //         (<Link to="/auth">Login</Link>)
        //         : (
        //             <>
        //                 <Link to="/saved-recipe">Saved</Link>
        //                 <button onClick={logout}> Logout </button>
        //             </>
        //         )}
        // </div>

        <div className="navbar-container">
            <div className="navbar">
                <Link to="/">Home</Link>
                <Link to="/create-recipe">Create</Link>
                {!cookies.access_token ? (
                    <Link to="/auth">Login</Link>
                ) : (
                    <>
                        <Link to="/saved-recipe">Saved</Link>
                        {/* <button className="login-btn" onClick={logout}>Logout</button> */}
                        <Button variant="outlined">
                            <LogoutIcon sx={{ fontSize: 20, color: "#fff"}} onClick={logout}/>
                            {/* Logout */}
                        </Button>
                    </>
                )}
            </div>
        </div>

    );
};