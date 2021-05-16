import React from 'react';
import {Row} from 'react-bootstrap';


const Mybuildlisting = (props) =>{	
	//const {setBuildid} = props; 
	console.log(props);
	return (
		<>
		
		{props.mybuilds.map(filteredPart => (
				Object.keys(filteredPart).map((value, index) => {
					return <Row>{filteredPart[Object.keys(filteredPart)[index]]}</Row>
				})
			))}
		</>
	)
}

export default Mybuildlisting;