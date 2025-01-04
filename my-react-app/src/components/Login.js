import React from 'react';

const Login = () => {
    return (
        <div className="login-box">
            <img src="images/logo.png" alt="Instagram Logo" className="logo" />
            <form action="#" method="post">
                <input type="text" placeholder="Username" name="username" required />
                <input type="password" placeholder="Password" name="password" required />
                <button type="submit">Log In</button>
            </form>
        </div>
    );
};

export default Login;