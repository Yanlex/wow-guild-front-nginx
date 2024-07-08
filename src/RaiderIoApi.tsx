import React, { useState, useEffect } from 'react';
import getColorByScore from './rioColors';

function FetchGuild() {
	const [guildData, setGuildData] = useState(null);

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
					console.log(`Ошибка fetchData guild-data`);
				});
		} catch (e) {
			console.log(e);
		}
	}

	useEffect(() => {
		fetchData();
	}, []);

	const guildRanks = {
		0: 'ГМ',
		1: 'Зам ГМ',
		2: 'Резчик лука',
		3: 'Рейдерик+',
		4: 'Рейдерик',
		5: 'Завсегдатай',
		6: 'Местный',
		7: 'Альт',
		8: 'Посетитель',
		9: 'Свинопас',
	};

	const classColors = {
		'Death Knight': '#C41E3A',
		'Demon Hunter': '#A330C9',
		Druid: '#FF7C0A',
		Evoker: '#33937F',
		Hunter: '#AAD372',
		Mage: '#3FC7EB',
		Monk: '#00e086',
		Paladin: '#F48CBA',
		Priest: '#FFF',
		Rogue: '#FFF468',
		Shaman: '#0070DD',
		Warlock: '#8788EE',
		Warrior: '#C69B6D',
	};

	if (!guildData) {
		return <div>Loading...</div>;
	}

	// Сортировка по рангам
	guildData.sort((a: { rank: number }, b: { rank: number }) => a.rank - b.rank);

	return (
		<div className="cards">
			{guildData
				.filter((member) => member.mythic_plus_score > 0 && member.player_guild == 'ключик в дурку')
				.map((member) => (
					<div key={member.id} className="card-item">
						<img src={`/api/avatars/${member.character_name}.jpg`} className="card-item-img" />
						<div className="card-item-div">
							<div style={{ color: classColors[member.class] }}>
								<h2>{member.character_name}</h2>
							</div>
							<div>{member.player_guild} </div>
							<div>{guildRanks[member.rank]} </div>
							<div style={{ color: getColorByScore(member.mythic_plus_score) }}>
								{' '}
								{member.mythic_plus_score}
							</div>
						</div>
					</div>
				))}
		</div>
	);
}

export default FetchGuild;
