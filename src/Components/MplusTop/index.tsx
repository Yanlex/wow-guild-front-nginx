import React from 'react';
import MplusTopList from './MplusTopList';

export default function MplusTop() {
	return (
		<section className="mplus__top">
			<div className="container">
				<section className="topmplus__main">
					<h2>ЛУЧШИЕ КЛЮЧНИКИ КВД</h2>
					<div className="topmplus__main-ul">
						<MplusTopList slice={[0, 10]} olstart={0} />
						<MplusTopList slice={[10, 20]} olstart={10} />
					</div>
				</section>
			</div>
		</section>
	);
}
