import { useState } from 'react';
import { useAuth } from '../context/authContext';
import { useNavigate } from 'react-router-dom';

export function Register() {
	const [user, setUser] = useState({
		email: '',
		password: '',
	});
	const { signup } = useAuth();
	const navigate = useNavigate();
	const [error, setError] = useState();

	const handleChange = ({ target: { name, value } }) =>
		setUser({ ...user, [name]: value });

	const handleSubmit = async e => {
		e.preventDefault();
		setError('');
		try {
			await signup(user.email, user.password);
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
						placeholder='Correo'
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
				</form>
				<button className='registrar'>Registrar</button>
				<h4>¿ya tienes cuenta con PIDE YA?</h4>
				<a href='/'>
					<button className='registro'>Inicia sesión aquí</button>
				</a>
			</div>
		</>
	);
}
