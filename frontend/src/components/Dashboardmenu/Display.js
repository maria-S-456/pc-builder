import React, {useState, useEffect} from 'react';
import {Row, Col} from 'react-bootstrap';
import axios from 'axios'
import {navigate} from '@reach/router'

const Display = (props) =>{
	//const [mybuilds, setMybuilds] = useState([])
	//console.log(props.partId)
	const tableStyle = {
		textAlign : 'left'
	}
	function updateBuild(e){
		console.log(e)
	}
		
	

return (
	<>	
		{
			props.products.filter(product => product._id === props.partId).map(filteredPart => (
			<>
			{/* title */}
			{Object.keys(filteredPart).map((value, index) => {
				if(value === 'name')							
					return <h2>{filteredPart[Object.keys(filteredPart)[index]]}</h2>
			})}

			{/* image */}
			{	Object.keys(filteredPart).map((value, index) => {
					if(value === 'img')							
						return <img height='150' src={filteredPart[Object.keys(filteredPart)[index]]} />
			})}

			<Row><h3>Features:</h3></Row>
			<table className="table table-striped">
			
			<tbody>
				{Object.keys(filteredPart).map((value, index) => {
					{/* list values */}
					if(value !== 'img' && value !== '_id' && value !== 'partType' && filteredPart[Object.keys(filteredPart)[index]] !== '' && typeof filteredPart[Object.keys(filteredPart)[index]] !== "boolean")		
						return( 
								<tr style={tableStyle} keys={value}>
									<th>{value}</th>
									<td>{filteredPart[Object.keys(filteredPart)[index]]}</td>
								</tr>
								)				
					else if(typeof filteredPart[Object.keys(filteredPart)[index]] === "boolean")
						/* List true/false values */
						return(
								<tr style={tableStyle} keys={value}>
									<th>{value}</th>
									<td>{filteredPart[Object.keys(filteredPart)[index]].toString()}</td>
								</tr>
								)				
				})}		
			</tbody>	
			</table>

			{/* Add to build button */}
			{Object.keys(filteredPart).map((value, index) => {
				if(value === '_id')							
					return <button onClick={(e) => {updateBuild(filteredPart)}}>
						Add to build
					</button>
			})}
			
			</>

		))}		
		
	</>
	)
}

export default Display;