import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
    const [inputValue, setInputValue] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setInputValue("");
        navigate(`/order/${inputValue}`);
    };

    const handlechange = (e) => {
        setInputValue(e.target.value);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>Bienvenue chez nous !</h1>
            <hr />
            <h2>Connectez-vous</h2>
            <input value={inputValue} onChange={handlechange} placeholder={"Entrez votre prénom"} required />

            <button>Mon espace</button>
        </form>
    );
}
