import React from 'react';
import {Row} from 'react-bootstrap';


const Mybuildlisting = (props) =>{	
	const {setBuildid} = props;	
	//console.log(props)
	return (
		<>
		

			{props.mybuilds.map(filteredPart => (
				<Row key={filteredPart._id} className="Row grow" onClick={(e) => setBuildid(e.target.getAttribute('name'))} name={filteredPart._id}>
				{filteredPart.partType} : {filteredPart.name}
				</Row>
			))}
		</>
	)
}

export default Mybuildlisting;