import { useRef } from 'react';
import Form from 'react-bootstrap/Form';
import { verifyUser } from '../data/users';
import './Login.css';

function Login({ setToken, setRole }) {
    const userRef = useRef();
    const passRef = useRef();

    const handleLogin = () => {
        const user = userRef.current.value.trim();
        const pass = passRef.current.value.trim();

        const userInfo = verifyUser(user, pass);

        if (!userInfo) {
            alert("Wrong username or password");
            userRef.current.focus();
            return;
        }

        setToken(userInfo.token);
        setRole(userInfo.role);

        userRef.current.value = "";
        passRef.current.value = "";
    };

    return (
        <div className="login-container shadow-lg p-4">
            <h2 className="login-title">Welcome Back</h2>
            <p className="login-subtitle">รหัสผ่าน Username = user |  Password = pass</p>
            

            <Form.Group className="mt-3">
                <Form.Label>Username</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="user"
                    ref={userRef}
                />
            </Form.Group>

            <Form.Group className="mt-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="pass"
                    ref={passRef}
                />
            </Form.Group>

            <button className="btn btn-success w-100 mt-4 login-btn"
                onClick={handleLogin}>
                Login
            </button>
        </div>
    );
}

export default Login;
