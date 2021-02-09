import React from 'react';
import About from '../components/home/About';
import Header from '../components/home/Header';
import Rooms from '../components/home/Rooms';

export default function Home() {
	return (
		<div>
			<Header />
			<About />
			<Rooms />
		</div>
	);
}
