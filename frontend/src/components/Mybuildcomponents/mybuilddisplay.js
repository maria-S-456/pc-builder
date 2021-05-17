import React from 'react';
import {Row} from 'react-bootstrap';


const Mybuilddisplay = (props) =>{	
	const tableStyle = {
		textAlign : 'left'
	}
	//console.log(props);
	return (
		<>
			{
			props.mybuilds.filter(mybuild => mybuild._id === props.buildid).map(filteredPart => (
			<>

				{	Object.keys(filteredPart).map((value, index) => {
						if(value === 'name')							
							return <h2>{filteredPart[Object.keys(filteredPart)[index]]}</h2>
				})}
				
				{	Object.keys(filteredPart).map((value, index) => {
						if(value === 'img')							
							return <img height='150' src={filteredPart[Object.keys(filteredPart)[index]]} />
				})}
				<Row><h3>Features:</h3></Row>
				<table className="table table-striped">
				
				<tbody>
					{	Object.keys(filteredPart).map((value, index) => {
							if(value !== 'img' && value !== '_id' && value !== 'partType' && filteredPart[Object.keys(filteredPart)[index]] !== '' && typeof filteredPart[Object.keys(filteredPart)[index]] !== "boolean")							
								return( 
										<tr style={tableStyle} keys={value}>
											<th>{value}</th>
											<td>{filteredPart[Object.keys(filteredPart)[index]]}</td>
										</tr>
										)
							
							else if(typeof filteredPart[Object.keys(filteredPart)[index]] === "boolean")
								return (
										<tr style={tableStyle} keys={value}>
											<th>{value}</th>
											<td>{filteredPart[Object.keys(filteredPart)[index]].toString()}</td>
										</tr>
										)
					
					})}		
				</tbody>	
				</table>
			</>

			))}	
		</>
	)
}

export default Mybuilddisplay;