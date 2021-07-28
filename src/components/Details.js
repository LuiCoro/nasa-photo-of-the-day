import React from 'react';
import styled from 'styled-components';

// Styling

const CardTitle = styled.h3`
	color: rgb(224, 224, 224);
`;

const CardText = styled.p`
	color: red;
`;

const CardDate = styled.h4`
	color: purple;
`;

const Details = props => {
	const { name, date, detail } = props;

	return (
		<div>
			<CardTitle>Name: {name}</CardTitle>
			<CardText>
				<CardDate>{date}</CardDate>
				{!detail ? 'No Details Sorry!' : `${detail}`}
			</CardText>
		</div>
	);
};

export default Details;
