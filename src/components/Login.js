import { useState } from 'react';
import { useAuth } from '../context/authContext';
import { useNavigate } from 'react-router-dom';

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
			<div>
				{error && <p>{error} </p>}
				<form onSubmit={handleSubmit}>
					<label htmlFor='email'>Email</label>
					<input
						type='text'
						name='email'
						placeholder='Email'
						onChange={handleChange}
					/>

					<label htmlFor='password'>Password</label>
					<input
						type='password'
						name='password'
						id='password'
						onChange={handleChange}
					/>

					<button>Login</button>
				</form>
				<button onClick={handleGoogleSignin}>login whit Google</button>
			</div>
		</>
	);
}
