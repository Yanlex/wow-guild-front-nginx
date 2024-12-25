/* eslint-disable import/no-unresolved */
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Page from './Components/Page';
import Header from './Components/Header';
import Footer from './Components/Footer';
import MplusTop from './Components/MplusTop';
import AboutGuild from './Components/AboutGuild';
import Guides from './Components/Guides';
import Smolderon from 'Components/Guides/Smolderon';

export default function App() {
	const [baseUrl, setBasename] = useState('');
useEffect(() => {
  const currentUrl = window.location.pathname;
  const match = currentUrl.match(/^\/([^/]+)(?:\/|$)/);
  const basename = match ? match[1] : '';
  setBasename(basename);
  console.log(currentUrl)
  console.log("HE",basename);
}, []);

	const homePageTitle = (
		<p>
			Приветствуем вас в обновленной гильдии ⭐ Ключик в дурку ⭐ - устремленной к профессионализму
			и полному погружению в мир World of Warcraft. Мы эволюционировали из казуальной группы в семью
			настоящих семи-хардкорных игроков !
		</p>
	);
	return (
		<BrowserRouter basename={baseUrl}>
			<Routes>
				<Route
					path="/"
					element={
						<Page>
							<Header title="ГИЛЬДИЯ КЛЮЧИК В ДУРКУ" p={homePageTitle} />
							<main role="main">
								<AboutGuild />
								<MplusTop />
							</main>
							<Footer />
						</Page>
					}
				/>
				<Route
					path="/guides"
					element={
						<Page>
							<Header
								title="ГАЙДЫ"
								p="Полезная информация о вашем КЛАССЕ / СПЕКЕ. Бис шмот, трини. Ссылки на полезные ресурсы на рейдовый и групповой контент."
							/>
							<main role="main">
								<Guides />
							</main>
							<Footer />
						</Page>
					}
				/>
				<Route
					path="/amirdrassil/smolderon"
					element={
						<Page>
							<Header title="ПЕПЛОРОН" p="Контент по боссу, тактики галактики" />
							<main role="main">
								<Smolderon />
							</main>
							<Footer />
						</Page>
					}
				/>
			</Routes>
		</BrowserRouter>
	);
}
