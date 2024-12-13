import React from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const classColors: Record<string, string> = {
	'Рыцарь смерти': '#C41E3A',
	'Охотник на демонов': '#A330C9',
	Друид: '#FF7C0A',
	Пробудитель: '#33937F',
	Охотник: '#AAD372',
	Маг: '#3FC7EB',
	Монах: '#00e086',
	Палладин: '#F48CBA',
	Жрец: '#FFF',
	Разбойник: '#FFF468',
	Шаман: '#0070DD',
	Чернокнижник: '#8788EE',
	Воин: '#C69B6D',
};

const discordClassChannels = {
	Воин: {
		title: 'Небесная цитадель',
		discordInvite: 'https://discord.gg/xmcWP5b',
	},
	Палладин: {
		title: 'Обитель света',
		discordInvite: 'https://discord.gg/yAhvHbM',
	},
	Охотник: {
		title: 'Приют стрелка',
		discordInvite: 'https://discordapp.com/invite/gjvNbyj',
	},
	Разбойник: {
		title: 'Палата теней',
		discordInvite: 'https://discordapp.com/invite/GfcqXR5',
	},
	Жрец: {
		title: 'Храм света пустоты',
		discordInvite: 'https://discord.gg/G8zUnFxEs4',
	},
	'Рыцарь смерти': {
		title: 'Цитадель Ледяной Короны',
		discordInvite: 'https://discord.gg/QktwJdq',
	},
	Шаман: {
		title: 'Водоворот',
		discordInvite: 'https://discord.gg/8Bag6kT',
	},
	Маг: {
		title: 'Оплот Хранителя',
		discordInvite: 'https://discord.gg/bSwXsKG',
	},
	Чернокнижник: {
		title: 'Разлом Зловещего Шрама',
		discordInvite: 'https://discord.gg/tnfqRE4GZ9',
	},
	Монах: {
		title: 'Храм Пяти Рассветов',
		discordInvite: 'https://discord.gg/P52zeKR',
	},
	Друид: {
		title: 'Роща Снов',
		discordInvite: 'https://discordapp.com/invite/5uPBe28',
	},
	'Охотник на демонов': {
		title: 'Небесная Цитадель',
		discordInvite: 'https://discord.gg/hQbyRwZugV',
	},
	Пробудитель: {
		title: 'Храм Драконьего Покоя',
		discordInvite: 'https://discord.gg/5yMyjh9SG7',
	},
};

export default function Guides() {
	const id = uuidv4();
	return (
		<section className="page-About">
			<div className="container">
				<div className="guides-content">
					<section>
						<h2>КЛАССОВЫЕ РЕСУРЫ</h2>
						<p>
							Ознакомиьтесь со своими гайдами, на ваш спек/класс. Найдите бис шмот,трини и статы.
						</p>
						<ul>
							<li>
								<a href="https://www.wowhead.com/guides/classes" target="_blank" rel="noreferrer">
									WoWHead
								</a>
							</li>
						</ul>
						<br />
						<section>
							<h3>DISCORD СООБЩЕСТВА</h3>
							<ul>
								{Object.entries(discordClassChannels).map(([key, value]) => (
									<li key={id}>
										<span style={{ color: classColors[key] }}>{key}</span>
										<span> - </span>
										<a href={value.discordInvite} target="_blank" rel="noreferrer">
											{value.title}
										</a>
									</li>
								))}
							</ul>
							<br />
						</section>
						<section>
							<h3>БИС ЛИСТЫ</h3>
							<ul>
								<li>
									<a href="https://bloodmallet.com/" target="_blank" rel="noreferrer">
										Трини для ДД bloodmallet
									</a>
								</li>
								<li>
									<a href="https://questionablyepic.com/live/" target="_blank" rel="noreferrer">
										Трини для хила questionablyepic
									</a>
								</li>
							</ul>
						</section>
					</section>
					<section>
						<h2>ГРУППОВОЙ И РЕЙДОВЫ КОНТЕНТ</h2>
						<p>Полезные ресурсы, викауры, аддоны.</p>
						<section>
							<h3>КЛЮЧИ</h3>
							<ul>
								<li>
									<a href="https://murlok.io/" target="_blank" rel="noreferrer">
										Шмот, камни, таланты, чарки топовых игроков murlok
									</a>
								</li>
								<li>
									<a href="https://u.gg/wow" target="_blank" rel="noreferrer">
										Шмот, камни, таланты, чарки топовых игроков u.gg
									</a>
								</li>
								<li>
									<a href="https://keystone.guru/" target="_blank" rel="noreferrer">
										Роуты keystone.guru
									</a>
								</li>
								<li>
									<a href="https://mythicstats.com/meta" target="_blank" rel="noreferrer">
										Статистика по ключам mythicstats
									</a>
								</li>
								<li>
									<a href="https://bestkeystone.com/" target="_blank" rel="noreferrer">
										Статистика по ключам bestkeystone
									</a>
								</li>
								<li>
									<a href="https://mythicplus.gg/#/" target="_blank" rel="noreferrer">
										Статистика по ключам mythicplus
									</a>
								</li>
								<br />
								<li>
									<a href="https://wago.io/plater/plater-profiles" target="_blank" rel="noreferrer">
										Plater Профили
									</a>
								</li>
								<li>
									<a href=" https://wago.io/LyVvlKxvs" target="_blank">
										Spell CDs on Nameplate
									</a>
								</li>
							</ul>
							<br />
						</section>
						<section>
							<h3>РЕЙДЫ</h3>
							{/* <Link to="/amirdrassil/smolderon">
								<h2>{`>> ИНФА ПО ПЕПЛОРОНУ <<`}</h2>
							</Link> */}
							<li>
								<a href='https://wago.io/h9W7GhwQU'
									target='_blank'
									rel="noreferrer">
										Вика - Гнев анархии
									</a>
							</li>
							<li>
								<a href='https://wago.io/FG3MEpb6s'
									target='_blank'
									rel="noreferrer">
										Interrupt Anchoring (MRT ONLY) TWW Mod	
									</a>
							</li>
														<li>
								<a href='https://wago.io/LiquidWeakAuras'
									target='_blank'
									rel="noreferrer">
										Якорь Liquid
									</a>
							</li>
							<h2></h2>

							<ul>
								<h4>Аддоны</h4>
								<li>
									<a
										href="https://www.curseforge.com/wow/addons/big-wigs"
										target="_blank"
										rel="noreferrer"
									>
										BigWigs Bossmods
									</a>
								</li>
								<li>
									<a
										href="https://www.curseforge.com/wow/addons/elwigo"
										target="_blank"
										rel="noreferrer"
									>
										ElWigo
									</a>
								</li>
								<li>
									<a
										href="https://www.curseforge.com/wow/addons/weakauras-2"
										target="_blank"
										rel="noreferrer"
									>
										WeakAuras
									</a>
								</li>
								<li>
									<a
										href="https://www.curseforge.com/wow/addons/method-raid-tools"
										target="_blank"
										rel="noreferrer"
									>
										Method Raid Tools
									</a>
								</li>
								<h4>Полезные сайты</h4>
								<li>
									<a href="https://www.mythictrap.com/ru" target="_blank" rel="noreferrer">
										Изучаем тактики - MYTHIC TRAP
									</a>
								</li>
								<li>
									<a
										href="https://tacticalairhorse.itch.io/amirdrassil"
										target="_blank"
										rel="noreferrer"
									>
										Изучаем тактики играя!
									</a>
								</li>
								<li>
									<a href="https://www.warcraftlogs.com/" target="_blank" rel="noreferrer">
										Изучаем логи - Warcraftlogs
									</a>
								</li>
								<li>
									<a href="https://lorrgs.io/" target="_blank" rel="noreferrer">
										Смотрим где жмут кнопки топы - Lorrgs
									</a>
								</li>
								<li>
									<a href="https://wowanalyzer.com/" target="_blank" rel="noreferrer">
										Сравним свои логи с топами - WoWanalyzer
									</a>
								</li>
								<h4>WeakAuras</h4>
								<li>
									<a href="https://wago.io/n7l5uN3YM" target="_blank" rel="noreferrer">
										Kaze MRT/ERT Timers Notifications
									</a>
								</li>
								<li>
									<a href="https://wago.io/V1wblU7RH" target="_blank" rel="noreferrer">
										Общая WA на весь рейд
									</a>
								</li>
								<br />
								<li>
									<a
										href="https://www.wowhead.com/ru/item=188152/%D0%BE%D1%81%D0%BA%D0%BE%D0%BB%D0%BE%D0%BA-%D1%83%D0%BF%D1%80%D0%B0%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D1%8F-%D0%B2%D1%80%D0%B0%D1%82%D0%B0%D0%BC%D0%B8"
										target="_blank"
										rel="noreferrer"
									>
										Юзать гейты по бинду
									</a>
								</li>
							</ul>
						</section>
					</section>
				</div>
			</div>
		</section>
	);
}
