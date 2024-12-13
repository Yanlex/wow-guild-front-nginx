import React from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function Smolderon() {
	const id = uuidv4();
	return (
		<section className="page-About">
			<div className="container">
				<div className="guides-content">
					<section className="section1">
						<h2>WeakAuras</h2>
						<ul>
							<li>
								<a href="https://wago.io/hR_WvJEoV/1" rel="noreferrer" target="_blank">
									Стой после сока епт!
								</a>
							</li>
							<li>
								<a href="https://wago.io/ub0BK4cxE" rel="noreferrer" target="_blank">
									Убирает "лишние" эффекты на пеплороне
								</a>
							</li>
							<li>
								<a href="https://wago.io/nI0vVBYXa" rel="noreferrer" target="_blank">
									Визуализация следующих колец
								</a>
							</li>
							<li>
								<a href="https://wago.io/wlFcB2r_Q" rel="noreferrer" target="_blank">
									Сколько сфер собрал
								</a>
							</li>
							<li>
								<a href="https://wago.io/G90E3qQJ_/" rel="noreferrer" target="_blank">
									Amani Mythic Smolderon
								</a>
							</li>
							<li>
								<a href="https://wago.io/zBCjIEOME/" rel="noreferrer" target="_blank">
									WA Макрос, очередь
								</a>
							</li>
						</ul>
					</section>
					<section className="section2">
						<h2>Макросы</h2>
						<pre>
							/run C_ChatInfo.SendAddonMessage("CAUSESE_SF", UnitGUID("player"), "RAID")
							<br />
							/отметка [@player]предупреждение
						</pre>
					</section>
					<section className="section3">
						<h2>ВИЗУАЛ</h2>
						<h3>Как стоять</h3>
						<img src="./assets/img/position-smolderon.png"></img>
						<h3>Контент с ютуба</h3>
						<iframe
							width="560"
							height="315"
							src="https://www.youtube.com/embed/SiyTJMJTuRA?si=N4DLJiOQ-M4NVuIT&amp;start=1"
							title="YouTube video player"
							frameborder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							allowfullscreen
						></iframe>
						<iframe
							width="560"
							height="315"
							src="https://www.youtube.com/embed/x1dawGGB0FI?si=RYT-KIjYyoSzm7UC&amp;start=1"
							title="YouTube video player"
							frameborder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							allowfullscreen
						></iframe>
						<iframe
							width="560"
							height="315"
							src="https://www.youtube.com/embed/cH6uV4-AZic?si=6FLkZ_WdQMGG81EF&amp;start=1"
							title="YouTube video player"
							frameborder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							allowfullscreen
						></iframe>
						<iframe
							width="560"
							height="315"
							src="https://www.youtube.com/embed/1j38_qUK_2E?si=vQliQeA9zL8U4jLU"
							title="YouTube video player"
							frameborder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							allowfullscreen
						></iframe>
					</section>
				</div>
			</div>
		</section>
	);
}
