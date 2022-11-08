import axios from 'axios';
import swal from '@sweetalert/with-react';
import '../styles/login.css';
import { useNavigate } from 'react-router-dom';

export default function Login() {

    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        // eslint-disable-next-line
        const regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
        if (email === '' || password === '') {
            swal(<h2>Los campos no pueden estar vacios</h2>);
            return;
        }
        if (email !== '' && !regexEmail.test(email)) {
            swal(<h2>Mail invalido, escribelo correctamente</h2>)
            return;
        }

        if (email !== 'challenge@alkemy.org' || password !== 'react') {
            swal(<h2>Credenciales erroneas</h2>)
            return;
        }

        axios.post('http://challenge-react.alkemy.org/', { email, password })
            .then(res => {
                swal({
                    icon: "success",
                    text: "Sesion iniciada!"
                })
                const sendToken = res.data.token;
                localStorage.setItem('token', sendToken);
                navigate('/movies')
            })
    }

    return (
        <>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Email:</span><br />
                    <input type="text" name="email" />
                </label>
                <br />
                <label>
                    <span>Password:</span><br />
                    <input type="password" name="password" />
                </label>
                <br />
                <button type="submit">Ingresar</button>
            </form>
        </>
    )
}