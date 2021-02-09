import React from 'react';
import Hero from '../globals/Hero.css.js';
import homeBcg from '../../images/homeBcg.jpeg';
import { PrimaryBtn } from '../globals/Button';
import BannerWrapper from '../globals/Banner.js';

export default function Header() {
	return (
		<Hero img={homeBcg}>
			<BannerWrapper
				greeting="Welcome to "
				title="beach resort"
				text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus temporibus aliquid esse exercitationem error corporis."
			>
				<PrimaryBtn t="1rem">View details</PrimaryBtn>
			</BannerWrapper>
		</Hero>
	);
}
