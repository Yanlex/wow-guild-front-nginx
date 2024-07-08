import React from 'react';
import { createRoot } from 'react-dom/client';
import AuthProvider from 'Components/AuthState';
import App from './App';
import './style.css';

const root = createRoot(document.getElementById('root'));
root.render(
	<AuthProvider>
		<App />
	</AuthProvider>,
);
