import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import { CardBody } from 'reactstrap';
import styled from 'styled-components';

import NasaImage from './components/Nasa_img';
import Details from './components/Details';

// Styling

const CardBoarder = styled.div`
	border: solid 5px black;
	width: 450px;
	color: blue;
	font-size: 30px;
`;

const Card = styled.div`
	display: flex;
	justify-content: center;
	margin: 100px;
`;

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
			<Card>
				<CardBoarder>
					NASA's Picure Of The Day!
					<CardBody>
						<NasaImage url={data.url} noImage={data.title} />
						<Details
							name={data.title}
							date={data.date}
							detail={data.explanation}
						/>
					</CardBody>
				</CardBoarder>
			</Card>
		</div>
	);
}

export default App;
