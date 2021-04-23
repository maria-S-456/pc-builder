import React from 'react';
import {Row, Col} from 'react-bootstrap';

const Ssdlisting = (props) =>{
	
	return (
		<>
		<h2>SSD Listing</h2>
		<Row>
			{props.prod.filter(product => product.partType === 'ssd').map(filteredPart => (
				<Col>
					{filteredPart.name}
				</Col>
			))}
		</Row>
		</>
	)
}

export default Ssdlisting;