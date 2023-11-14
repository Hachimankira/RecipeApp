import axios from "axios";
import { useState } from "react";
import Form from "../components/form";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

export const Register = () => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const onSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post("http://localhost:3001/auth/register", {
                firstname,
                lastname,
                username,
                password,
            });
            toast.success("Registration Completed! Now login.");
            navigate('/login');
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <div style={{ width: "900px", marginTop: "3rem" }}>
            <Form
                firstname={firstname}
                setFirstname={setFirstname}
                lastname={lastname}
                setLastname={setLastname}
                username={username}
                setUsername={setUsername}
                password={password}
                setPassword={setPassword}
                label="Register"
                onSubmit={onSubmit}
            />
        </div>
    )
}