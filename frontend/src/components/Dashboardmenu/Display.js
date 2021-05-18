import React, {useState, useEffect} from 'react';
import {Row, Col} from 'react-bootstrap';
import axios from 'axios'
import {navigate} from '@reach/router'

const Display = (props) =>{
	const {setBuildid} = props;

	const tableStyle = {
		textAlign : 'left'
	}
	function updateBuild(e){
		//console.log(e)

		//console.log(props.mybuilds)
		props.mybuilds.filter(mybd => mybd.partType === e.partType).map(filter => (
				axios.put("http://localhost:5000/api/mybuilds/" + filter._id,{
					partType: e.partType,
					name: e.name,
					brand: e.brand,
					series: e.series,
					max_gpu_length: e.max_gpu_length,
					img: e.img,
					capacity: e.capacity,
					unit: e.unit,
					memory_type: e.memory_type,
					socketType: e.socketType,
					numOfSlots: e.numOfSlots,
					memorySlotPins: e.memorySlotPins,
					maxMemorySupported: e.maxMemorySupported,
					memoryStandard: e.memoryStandard,
					cpuStandard: e.cpuStandard,
					cpubrand: e.cpubrand,
					supportedChannel: e.supportedChannel,
					formFactor: e.formFactor,
					storageSsd: e.storageSsd,
					storageHhd: e.storageHhd,
					storagem2: e.storagem2,
					pin_type: e.pin_type,
					input_volt_min: e.input_volt_min,
					input_volt_max: e.input_volt_max,
					psutype: e.psutype,
					max_power: e.max_power,
					max_psu_length: e.max_psu_length,
					cpuSocketType: e.cpuSocketType,
					numCores: e.numCores,
					max_height: e.max_height,
					compatibility: e.compatibility,
					size: e.size
				})
				.then((res) => {
					if(res.data.errors){
						console.log(res.data.errors)
					}
				})
				.catch((err) => console.log(err))
			
		))

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