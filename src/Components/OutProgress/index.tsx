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
				<h3>Амирдрассил, Надежда Сна</h3>
				<ul>
					<li>
						Нормал{' '}
						{guildProgress.raid_progression['amirdrassil-the-dreams-hope'].normal_bosses_killed}
						{' / '}
						{guildProgress.raid_progression['amirdrassil-the-dreams-hope'].total_bosses}
					</li>
					<li>
						Героик{' '}
						{guildProgress.raid_progression['amirdrassil-the-dreams-hope'].heroic_bosses_killed}
						{' / '}
						{guildProgress.raid_progression['amirdrassil-the-dreams-hope'].total_bosses}
					</li>
					<li>
						Мифик{' '}
						{guildProgress.raid_progression['amirdrassil-the-dreams-hope'].mythic_bosses_killed}
						{' / '}
						{guildProgress.raid_progression['amirdrassil-the-dreams-hope'].total_bosses}
					</li>
				</ul>
				<img src={`/assets/img/6K6Z89WII3L01693945700775.png`} alt="" />
			</div>
			<div className="progressCard">
				<h3>Аберрий, Затененное Горнило</h3>
				<ul>
					<li>
						Нормал{' '}
						{guildProgress.raid_progression['aberrus-the-shadowed-crucible'].normal_bosses_killed}
						{' / '}
						{guildProgress.raid_progression['aberrus-the-shadowed-crucible'].total_bosses}
					</li>
					<li>
						Героик{' '}
						{guildProgress.raid_progression['aberrus-the-shadowed-crucible'].heroic_bosses_killed}
						{' / '}
						{guildProgress.raid_progression['aberrus-the-shadowed-crucible'].total_bosses}
					</li>
					<li>
						Мифик{' '}
						{guildProgress.raid_progression['aberrus-the-shadowed-crucible'].mythic_bosses_killed}
						{' / '}
						{guildProgress.raid_progression['aberrus-the-shadowed-crucible'].total_bosses}
					</li>
				</ul>
				<img src={`/assets/img/FpaAUhx.jpg`} alt="" />
			</div>
			<div className="progressCard">
				<h3>Хранилище Воплощений</h3>
				<ul>
					<li>
						Нормал {guildProgress.raid_progression['vault-of-the-incarnates'].normal_bosses_killed}
						{' / '}
						{guildProgress.raid_progression['vault-of-the-incarnates'].total_bosses}
					</li>
					<li>
						Героик {guildProgress.raid_progression['vault-of-the-incarnates'].heroic_bosses_killed}
						{' / '}
						{guildProgress.raid_progression['vault-of-the-incarnates'].total_bosses}
					</li>
					<li>
						Мифик {guildProgress.raid_progression['vault-of-the-incarnates'].mythic_bosses_killed}
						{' / '}
						{guildProgress.raid_progression['vault-of-the-incarnates'].total_bosses}
					</li>
				</ul>
				<img src={`/assets/img/Raid-Finder-Wing-2-Vault-of-the-Incarnates.jpg`} alt="" />
			</div>
		</article>
	);
}
