import React from 'react';
import { CardImg } from 'reactstrap';

function Nasaimage(props) {
	const { url } = props;
	const { noImage } = props;
	return (
		<div>
			<CardImg top width='400' src={url} alt={noImage} />
		</div>
	);
}

export default Nasaimage;
