import React, { useEffect, useState } from 'react';

type PageProps = {
	PathDisplay: string;
};

export default function OurProgress({ PathDisplay }: PageProps) {
	const [guildProgress, setGuildProgress] = useState(null);

	async function guildProg() {
		try {
			fetch(
				'https://raider.io/api/v1/guilds/profile?region=eu&realm=howling-fjord&name=%D0%9A%D0%BB%D1%8E%D1%87%D0%B8%D0%BA%20%D0%B2%20%D0%B4%D1%83%D1%80%D0%BA%D1%83&fields=raid_progression',
			)
				.then((response) => {
					if (!response.ok) {
						throw new Error('Network response was not ok');
					}
					return response.json();
				})
				.then((data) => {
					setGuildProgress(data);
				})
				.catch((error) => {
					console.log(error);
				});
		} catch (e) {
			console.log(e);
		}
	}

	useEffect(() => {
		guildProg();
	}, []);

	if (!guildProgress) {
		return <div>Loading...</div>;
	}

	return (
		<article className={`main__header-progress ${PathDisplay}`}>
			<h2>РЕЙДОВЫЙ ПРОГРЕСС ГИЛЬДИИ</h2>
						<div className="progressCard">
				<h3>Неруб'арский дворец</h3>
				<ul>
					<li>
						Нормал{' '}
						{guildProgress.raid_progression['nerubar-palace'].normal_bosses_killed}
						{' / '}
						{guildProgress.raid_progression['nerubar-palace'].total_bosses}
					</li>
					<li>
						Героик{' '}
						{guildProgress.raid_progression['nerubar-palace'].heroic_bosses_killed}
						{' / '}
						{guildProgress.raid_progression['nerubar-palace'].total_bosses}
					</li>
					<li>
						Мифик{' '}
						{guildProgress.raid_progression['nerubar-palace'].mythic_bosses_killed}
						{' / '}
						{guildProgress.raid_progression['nerubar-palace'].total_bosses}
					</li>
				</ul>
				<img src={`./assets/img/Nerub-ar_Palace_loading_screen.jpg`} alt="" />
			</div>
			<div className="progressCard">
				<h3>Глубины Черной горы</h3>
				<ul>
					<li>
						Нормал{' '}
						{guildProgress.raid_progression['blackrock-depths'].normal_bosses_killed}
						{' / '}
						{guildProgress.raid_progression['blackrock-depths'].total_bosses}
					</li>
					<li>
						Героик{' '}
						{guildProgress.raid_progression['blackrock-depths'].heroic_bosses_killed}
						{' / '}
						{guildProgress.raid_progression['blackrock-depths'].total_bosses}
					</li>
					<li>
						Мифик{' '}
						{guildProgress.raid_progression['blackrock-depths'].mythic_bosses_killed}
						{' / '}
						{guildProgress.raid_progression['blackrock-depths'].total_bosses}
					</li>
				</ul>
				<img src={`./assets/img/nwo6h3y4jfcb1.jpg`} alt="" />
			</div>
		</article>
	);
}
