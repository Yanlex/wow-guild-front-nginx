import React from 'react';
import HeaderNavigation from '../Header/HeaderNavigatin';

type PageProps = {
	children: JSX.Element | JSX.Element[];
};

export default function Page({ children }: PageProps) {
	return (
		<div className="page">
			<HeaderNavigation />
			{children}
		</div>
	);
}
