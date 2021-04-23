import React from 'react';
import {Row, Col} from 'react-bootstrap';

const Casefanlisting = (props) =>{
	return (
		<>
		<h2>Case Fan Listing</h2>
		<Row>
			{props.prod.filter(product => product.partType === 'casefan').map(filteredPart => (
				<Col>
					{filteredPart.name}
				</Col>
			))}
		</Row>
		</>
	)
}

export default Casefanlisting;