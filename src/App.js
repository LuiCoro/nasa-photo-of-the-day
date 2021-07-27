import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

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
			<img src={data.url} alt={data.title} />
			<h2>Name: {data.title}</h2>
			<h3>{data.date}</h3>
			<p>{data.explanation}</p>
			<p>Copyright: {data.copyright}</p>
		</div>
	);
}

export default App;
