import React from 'react';
import {Row, Col} from 'react-bootstrap';

const Hddlisting = (props) =>{
	return (
		<>
		<h2>HDD Listing</h2>
		<Row>
			{props.prod.filter(product => product.partType === 'hdd').map(filteredPart => (
				<Col>
					{filteredPart.name}
				</Col>
			))}
		</Row>
		</>
	)
}

export default Hddlisting;