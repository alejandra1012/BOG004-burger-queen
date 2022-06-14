import { useState } from 'react';
import { useAuth } from '../context/authContext';
import { useNavigate } from 'react-router-dom';
import '../style-sheets/Login.css';

export function Login() {
	const [user, setUser] = useState({
		email: '',
		password: '',
	});
	const { login, loginGoogle } = useAuth();
	const navigate = useNavigate();
	const [error, setError] = useState();

	const handleChange = ({ target: { name, value } }) =>
		setUser({ ...user, [name]: value });

	const handleSubmit = async e => {
		e.preventDefault();
		setError('');
		try {
			await login(user.email, user.password);
			navigate('/Ordens');
		} catch (error) {
			setError(error.message);
		}
	};

	const handleGoogleSignin = async () => {
		try {
			await loginGoogle();
			navigate('/Ordens');
		} catch (error) {
			setError(error.message);
		}
	};

	return (
		<>
			<header>
				<h1>PIDE YA</h1>
			</header>
			<div className='container-login'>
				{error && <p>{error} </p>}
				<h4 className='titulo'>BIENVENID@ INGRESA AQUI</h4>
				<form onSubmit={handleSubmit}>
					<label htmlFor='email'></label>
					<input
						type='text'
						name='email'
						placeholder='Email'
						onChange={handleChange}
					/>

					<label htmlFor='password'></label>
					<input
						type='password'
						name='password'
						placeholder='Contraseña'
						id='password'
						onChange={handleChange}
					/>

					<button className='login'>Iniciar sesión</button>
				</form>
				<button className='login-Google' onClick={handleGoogleSignin}>
					<img
						className='logo'
						src={require('../img/Google.png')}
						alt='logo Google'
					/>
					Iniciar con Google
				</button>
				<h4>¿Aún no tienes cuenta con PIDE YA?</h4>
				<a href='/Register'>
					<button className='registro'>Regístrate aqui</button>
				</a>
			</div>
		</>
	);
}
