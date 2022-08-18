import { useCookies } from 'react-cookie'
import { Outlet, Navigate } from 'react-router-dom'

function AuthPage() {
	const [cookies] = useCookies('access_token')

	if (cookies.access_token) {
		return <Outlet />
	}
	console.log(cookies.access_token);
	return <Navigate to={'/login'} replace />
}

export default AuthPage
