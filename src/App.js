import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

import NasaImage from './components/Nasa_img';
import Details from './components/Details';

function App() {
	const [data, setData] = useState({});

	useEffect(() => {
		const nasaData = () => {
			axios
				.get(
					'https://api.nasa.gov/planetary/apod?api_key=CNjbGis4yHtuqq0Z5WfnMQSfFH4BwEcEl6kVsOCA'
				)
				.then(response => {
					setData(response.data);
				})
				.catch(err => {
					console.log('ERROR', err);
				});
		};
		nasaData();
	}, []);

	return (
		<div className='App'>
			<h1>NASA's Picure Of The Day!</h1>
			<NasaImage url={data.url} noImage={data.title} />
			<Details name={data.title} date={data.date} detail={data.explanation} />
		</div>
	);
}

export default App;
