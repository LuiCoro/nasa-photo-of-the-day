import React from 'react';
import { CardSubtitle, CardText } from 'reactstrap';
import styled from 'styled-components';

// Styling

const CardTitle = styled.h3`
	color: blue;
`;

const Details = props => {
	const { name, date, detail } = props;

	return (
		<div>
			<CardSubtitle tag='h3'>Name: {name}</CardSubtitle>
			<CardText color='info' tag='p'>
				<CardTitle>{date}</CardTitle>
				<>{detail}</>
			</CardText>
		</div>
	);
};

export default Details;
