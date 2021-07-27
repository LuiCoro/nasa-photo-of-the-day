import React from 'react';

function Nasaimage(props) {
	const { url } = props;
	const { noImage } = props;
	return (
		<div>
			<img src={url} alt={noImage} />
		</div>
	);
}

export default Nasaimage;
