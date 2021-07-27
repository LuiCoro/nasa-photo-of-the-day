import React from 'react';

const Details = props => {
	const { name, date, detail } = props;
	return (
		<div>
			<h1>Name: {name}</h1>
			<h2>{date}</h2>
			<p>{detail}</p>
		</div>
	);
};

export default Details;
