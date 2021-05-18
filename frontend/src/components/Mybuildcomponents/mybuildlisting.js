import React, {useState} from 'react';
import {Row} from 'react-bootstrap';

const Mybuildlisting = (props) =>{	
	// motherboard maxMemorySupported >= memory capacity true
	const {setBuildid} = props;	
	const [conflict, setConflict] = useState("");

 	function checkCompatibility(fpart){
		var bd = props.mybuilds;
		if(fpart.partType === 'mb'){
			if(!(bd[0].memorySlotPins === bd[1].pin_type))
				return <Row>Pin type is not compatible with memory!</Row>
			if(!(bd[0].socketType === bd[5].cpuSocketType))
				return <Row>Socket type is not compatible with cpu!</Row>
			if(!(bd[0].memoryStandard === bd.[1].memory_type))
				return <Row> Memory Standard is not compatible with this motherboard!</Row>
		}
		
		console.log(bd[0].memorySlotPins)
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