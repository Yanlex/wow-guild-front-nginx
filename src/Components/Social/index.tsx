import React from 'react';

export default function HeaderSocial(props: { PathDisplay: string }) {
	const { PathDisplay } = props;
	return (
		<ul className={`header__guild-contacts ${PathDisplay}`}>
			<li className="" style={{ backgroundColor: 'var(--button-discrod-color)' }}>
				<div className="social__logo">
					<img src={`./assets/img/discord-mark-white.png`} alt="" />
				</div>
				<a href="https://discord.gg/fjVkeJaKjc" target="_blank" rel="noreferrer">
					Discord
				</a>
			</li>
			<li className="" style={{ backgroundColor: 'var(--button-raiderio-color)' }}>
				<div className="social__logo">
					<img src={`./assets/img/raiderio.png`} alt="" />
				</div>
				<a
					href="https://raider.io/guilds/eu/howling-fjord/%D0%9A%D0%BB%D1%8E%D1%87%D0%B8%D0%BA%20%D0%B2%20%D0%B4%D1%83%D1%80%D0%BA%D1%83"
					target="_blank"
					rel="noreferrer"
				>
					Raider.io
				</a>
			</li>

			<li className="" style={{ backgroundColor: 'var(--button-warcraftlogs-color)' }}>
				<div className="social__logo">
					<img src={`./assets/img/warcraftlogs.png`} alt="" />
				</div>
				<a
					href="https://www.warcraftlogs.com/guild/eu/%D1%80%D0%B5%D0%B2%D1%83%D1%89%D0%B8%D0%B9-%D1%84%D1%8C%D0%BE%D1%80%D0%B4/%D0%9A%D0%BB%D1%8E%D1%87%D0%B8%D0%BA%20%D0%B2%20%D0%B4%D1%83%D1%80%D0%BA%D1%83"
					target="_blank"
					rel="noreferrer"
				>
					Warcraftlogs
				</a>{' '}
			</li>
		</ul>
	);
}
