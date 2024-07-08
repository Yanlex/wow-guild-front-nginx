import React, { useState, useEffect, useMemo } from 'react';
import AuthContext from './AuthContext';

function AuthProvider({ children }) {
	async function handleLogout() {
		try {
			fetch('/api/clear-cookie', {
				method: 'GET',
				credentials: 'include',
			})
				.then((response) => {
					if (response.redirected) {
						return window.location.replace(response.url);
					}
				})
				.catch((error) => {
					console.error('Error clearing cookies', error);
				});
		} catch (e) {
			console.log(e);
		}
	}

	const [isAuthenticated, setIsAuthenticated] = useState(
		JSON.parse(localStorage.getItem('isAuthenticated')) || false,
	);

	useEffect(() => {
		localStorage.setItem('isAuthenticated', JSON.stringify(isAuthenticated));
	}, [isAuthenticated]);

	const login: () => void = () => {
		setIsAuthenticated(true);
	};

	const logout: () => void = () => {
		setIsAuthenticated(false);
		localStorage.clear();
		handleLogout();
	};
	const authState = useMemo(() => ({ isAuthenticated, login, logout }), []);
	return <AuthContext.Provider value={authState}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
