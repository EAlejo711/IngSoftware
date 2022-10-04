import React, { useState } from "react";

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container">
            <h2>Iniciar Sesión</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">Correo Electronico: </label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="ejemplo@gmail.com" id="email" name="email" />
                <label htmlFor="password">Constraseña: </label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button type="submit">Iniciar Sesión</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>¿No tienes cuenta? Crear Una</button>
        </div>
    )
}