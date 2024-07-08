import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

interface mtopslice {
	slice: [number, number];
	olstart: number;
}

function MplusTopList({ slice, olstart }: mtopslice) {
	const [guildData, setGuildData] = useState(null);
	const id = uuidv4();
	async function fetchData() {
		try {
			fetch(`/api/guild-data`)
				.then((response) => {
					if (!response.ok) {
						throw new Error('Network response was not ok');
					}
					return response.json();
				})
				.then((data) => {
					setGuildData(data);
				})
				.catch((error) => {
					console.log(`Ошибка fetchData guild-data ${error}`);
				});
		} catch (e) {
			console.log(e);
		}
	}

	useEffect(() => {
		fetchData();
	}, []);

	const classIcons: Record<string, string> = {
		'Death Knight': 'classicon_deathknight',
		'Demon Hunter': 'classicon_demonhunter',
		Druid: 'classicon_druid',
		Evoker: 'classicon_evoker',
		Hunter: 'classicon_hunter',
		Mage: 'classicon_mage',
		Monk: 'classicon_monk',
		Paladin: 'classicon_paladin',
		Priest: 'classicon_priest',
		Rogue: 'classicon_rogue',
		Shaman: 'classicon_shaman',
		Warlock: 'classicon_warlock',
		Warrior: 'classicon_warrior',
	};

	if (!guildData) {
		return <div>Loading...</div>;
	}

	// Сортировка по Рио
	guildData.sort(
		(a: { mythic_plus_scores_by_season: number }, b: { mythic_plus_scores_by_season: number }) =>
			b.mythic_plus_scores_by_season - a.mythic_plus_scores_by_season,
	);
	const filtredGuild = guildData.filter(
		(member: { guild: string; class: string }) => member.guild === 'ключик в дурку',
	);
	const topmplusgigachads = filtredGuild.slice(slice[0], slice[1]);
	console.log(topmplusgigachads)
	return (
		<>
			{' '}
			<ol className="topmplus__main_flex" start={olstart}>
				{topmplusgigachads
					.filter((member: { guild: string }) => member.guild === 'ключик в дурку')
					.map( 
						(member: {
							idk: React.Key;
							class: string;
							name: string;
							mythic_plus_scores_by_season: number;
						})  => (
							
							<li key={id} className="topmplus__row">
								<img
									src={`/api/class/${classIcons[member.class]}.jpg`}
									alt=""
									className="topmplus__classicon"
								/>
								<div className="topmplus__nickname">{member.name}</div>
								<div className="topmplus__main-rio">{member.mythic_plus_scores_by_season.toFixed()}</div>
							</li>
						),
					)}
			</ol>
		</>
	);
}

export default MplusTopList;
