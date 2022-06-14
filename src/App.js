import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Register } from './components/Register';
import { Login } from './components/Login';
import { Ordens } from './components/Ordens';
import { Error } from './components/Error';
import { AuthProvider } from './context/authContext';
import { ProtectedRoute } from './components/ProtectedRoute';

function App() {
	return (
		<div className='App'>
			<AuthProvider>
				<Routes>
					<Route path='/' element={<Login />} />
					<Route path='/Register' element={<Register />} />
					<Route
						path='Ordens'
						element={
							<ProtectedRoute>
								{' '}
								<Ordens />
							</ProtectedRoute>
						}
					/>
					<Route path='Error' element={<Error />} />
				</Routes>
			</AuthProvider>
		</div>
	);
}

export default App;
