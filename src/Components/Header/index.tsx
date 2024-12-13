/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import HeaderSocial from '../Social';
import OurProgress from '../OutProgress';

export default function Header(props: { title: JSX.Element | string; p: JSX.Element | string }) {
	const { title, p } = props;
	let location = useLocation();
	const [isVisible, setIsVisible] = useState(false);
	const [backgoundSize, setBackgoundSize] = useState(null);
	const [background, setBackground] = useState(null);

	useEffect(() => {
		if (location.pathname !== '/') {
			setBackgoundSize('header_resize');
			setBackground('display-none');
		} else {
			setBackgoundSize('bgDefault');
			setBackground('bg1');
		}
	}, [location.pathname]);

	const background2 =
		location.pathname === '/'
			? 'bg1'
			: location.pathname === '/guides' || location.pathname === '/amirdrassil/smolderon'
			? 'display-none'
			: 'bgDefault';

	const backgoundSize2 =
		location.pathname === '/guides' || location.pathname === '/amirdrassil/smolderon'
			? 'header_resize'
			: 'bgDefault';

	return (
		<>
			<header className={`header header_second ${backgoundSize}`}>
				<video autoPlay loop muted className={`${background}`}>
					<source src={`./assets/video/M1QEYAXEAWPX1699388765299.mp4`} type="video/mp4" />
					Your browser does not support the video tag.
				</video>
				<div className="container">
					<section className={` header__guild-info `}>
						{/* I took this SPACE practice from the Blizzard website :D */}
						<div className="space__manager">
							<div className={`space__huge ${background}`} />
							<div className={`space__huge ${background}`} />
							<div className="space__large" />
						</div>
						<h1>{title}</h1>
						{p}
						<HeaderSocial PathDisplay={background} />
					</section>
					<div className="header__space">
						<div className="space__manager">
							<div className={`space__small ${background}`} />
							<div className={`space__small ${background}`} />
							<div className={`space__small ${background}`} />
							<div className={`space__large ${background}`} />
							<div className={`space__large ${background}`} />
						</div>
					</div>
					<OurProgress PathDisplay={background} />
				</div>
			</header>
		</>
	);
}
