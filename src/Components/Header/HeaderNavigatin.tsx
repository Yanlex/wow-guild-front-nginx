/* eslint-disable import/no-unresolved */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import LoginForm from '../Forms/Login';
import RegistrationForm from '../Forms/Registration';
import DialogButton from '../Buttons';
import AuthContext from '../AuthState/AuthContext';

export default function HeaderNavigation() {
	const userName = Cookies.get('User');
	const { isAuthenticated, logout } = useContext(AuthContext);
	return (
		<div className="header__auth_menu">
			<nav className="header__nav_main">
				<ul className="header__nav_ul">
					<li>
						<Link to="/">Главная</Link>
					</li>
					<li>
						<Link to="/guides">Гайды</Link>
					</li>
				</ul>
			</nav>
			<nav className="header__navigation_login">
				{isAuthenticated ? (
					<>
						<div>{userName}</div>
						<button type="button" onClick={() => logout()} className="button">
							ВЫЙТИ
						</button>
					</>
				) : (
					<>
					</>
				)}
			</nav>
		</div>
	);
}
