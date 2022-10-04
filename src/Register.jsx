import React, { useState } from "react";

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container">
            <h2>Crear Cuenta</h2>
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Nombre Completo:</label>
            <input value={name} name="name" id="name" placeholder="Nombre Completo" />
            <label htmlFor="email">Correo Electronico:</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="ejemplo@gmail.com" id="email" name="email" />
            <label htmlFor="password">Contraseña:</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
            <button type="submit">Crear Cuenta</button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('login')}>¿Ya tienes una cuenta? Iniciar Sesión</button>
    </div>
    )
}
