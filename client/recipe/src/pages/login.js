import React, { useState } from "react";
import axios from "axios";
import Form from "../components/form";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const [_, setCookies] = useCookies(["access_token"]);

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const onSubmit = async (event) => {
        event.preventDefault();
        try {
            const result = await axios.post("http://localhost:3001/auth/login", {
                username,
                password,
            });

            setCookies("access_token", result.data.token);
            window.localStorage.setItem("userID", result.data.userID);
            navigate("/");
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div style={{ width: "900px", marginTop: "3rem"}}>
            <Form
                username={username}
                setUsername={setUsername}
                password={password}
                setPassword={setPassword}
                label="Login"
                onSubmit={onSubmit}
            />
            
        </div>
    )
}