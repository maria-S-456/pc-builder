import React from 'react';
import {Row} from 'react-bootstrap';


const Mybuildlisting = (props) =>{	
	const {setBuildid} = props;	
	console.log(props)
	return (
		<>
		
		{props.mybuilds.map(filteredPart => (
				Object.keys(filteredPart).map((value, index) => {
					if(value !== '_id')
						return <Row onClick={(e) => setBuildid(e.target.name)} keys={value} className="Row grow" name={filteredPart.value}>
							{filteredPart[Object.keys(filteredPart)[index]]}
							
						</Row>
					
				})
			))}
		</>
	)
}

export default Mybuildlisting;