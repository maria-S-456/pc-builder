import React from 'react';
import {Row} from 'react-bootstrap';

const Display = (props) =>{
	
	return (
		<>
		<h2>Display</h2>
		<Row>


		{props.products.filter(product => product._id === props.partId).map(filteredPart => (
				<>
				{
					Object.keys(filteredPart).map((value, index) => {
						return <p>{value} : {filteredPart[Object.keys(filteredPart)[index]]}</p>
					})}
				</>
			))}


		</Row>
		</>
	)
}

export default Display;