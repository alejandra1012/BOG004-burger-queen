import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from '../App';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import '@testing-library/jest-dom';

// eslint-disable-next-line no-undef
test('authentication login ', async () => {
	// eslint-disable-next-line no-undef
	jest.mock('react-router-dom', () => ({
		// eslint-disable-next-line no-undef
		...jest.requireActual('react-router-dom'),
		// eslint-disable-next-line no-undef
		useNavigate: () => jest.fn(),
	}));

	const history = createMemoryHistory();
	render(
		<Router location={history.location} navigator={history}>
			<App />
		</Router>
	);

	const emailInput = screen.getByPlaceholderText('Email');
	const pswInput = screen.getByPlaceholderText('Contraseña');
	const button = screen.getByText('Iniciar sesión');

	fireEvent.change(emailInput, { target: { value: 'yuri1413_@hotmail.com' } });
	fireEvent.change(pswInput, { target: { value: 'alejandra' } });
	fireEvent.click(button);

	await waitFor(() => {
		// eslint-disable-next-line no-undef
		expect(history.location.pathname).toBe('/Ordens');
	});
});

// // eslint-disable-next-line no-undef
// test('authentication login ', async () => {
// 	// eslint-disable-next-line no-undef
// 	jest.mock('react-router-dom', () => ({
// 		// eslint-disable-next-line no-undef
// 		...jest.requireActual('react-router-dom'),
// 		// eslint-disable-next-line no-undef
// 		useNavigate: () => jest.fn(),
// 	}));

// 	const history = createMemoryHistory();
// 	render(
// 		<Router location={history.location} navigator={history}>
// 			<App />
// 		</Router>
// 	);

// 	const emailInput = screen.getByPlaceholderText('Email');
// 	const pswInput = screen.getByPlaceholderText('Contraseña');
// 	const button = screen.getByText('Iniciar sesión');

// 	fireEvent.change(emailInput, { target: { value: 'yuri1413_@hotmail.com' } });
// 	fireEvent.change(pswInput, { target: { value: '1234567' } });
// 	fireEvent.click(button);

// 	const msgError = await screen.findByTestId('mensaje-error');

// 	// eslint-disable-next-line no-undef
// 	expect(msgError.textContent).toBe('Firebase: Error (auth/wrong-password).');
// 	// eslint-disable-next-line no-undef
// 	expect(history.location.pathname).toBe('/');
// });
