import { useAuth } from '../context/authContext';

export function Error() {
	const { user } = useAuth();
	console.log(user);

	return (
		<div>
			<h1>Error 404 Página no encontrada</h1>
			<p>
				El archivo específico no se encontró en este sitio web. Por favor
				compruebe la url
			</p>
		</div>
	);
}
