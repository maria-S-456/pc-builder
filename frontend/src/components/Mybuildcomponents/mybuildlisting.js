import React, {useState} from 'react';
import {Row} from 'react-bootstrap';

const Mybuildlisting = (props) =>{	
	const {setBuildid} = props;	

 	function checkCompatibility(fpart){
		var bd = props.mybuilds;
		if(fpart.partType === 'mb'){
			if(!(bd[0].memorySlotPins === bd[1].pin_type))
				return <Row>Pin type is not compatible with memory!</Row>
			if(!(bd[0].socketType === bd[5].cpuSocketType))
				return <Row>Socket type is not compatible with cpu!</Row>
			if(!(bd[0].memoryStandard === bd.[1].memory_type))
				return <Row>Memory Standard is not compatible with this motherboard!</Row>
			if(!(bd[0].cpubrand === bd[5].brand))
				return <Row>CPU brand does not work with this motherboard!</Row> 
			if(!(bd[0].formFactor === bd[7].caseType))
				return <Row>Case size is not compatible with this motherboard!</Row>
		}
		if(fpart.partType === 'gpu'){
			if(!(parseInt(bd[7].gpulength, 10) > parseInt(bd[6].max_gpu_length, 10)))
				return <Row>This GPU is too big for the selected case!</Row>
		}
		if(fpart.partType === 'psu'){
			if(!(parseInt(bd[7].psulength, 10) > parseInt(bd[2].max_psu_length, 10)))
				return <Row>This PSU is too big for the selected case!</Row>
		}
	}
	return (
		<>				
			{props.mybuilds.map(filteredPart => (
				<>
					<Row key={filteredPart._id} className="Row grow" onClick={(e) => setBuildid(e.target.getAttribute('name'))} name={filteredPart._id}>
					{filteredPart.partType} : {filteredPart.name}					
					</Row>			
					{checkCompatibility(filteredPart)}
				</>
			))}

			
		</>
	)
}

export default Mybuildlisting;