import React, {useState} from 'react';
import {Form, Table, Button} from 'react-bootstrap';
import axios from 'axios';
import { navigate } from '@reach/router';

const Caseform = () => {
	
	const [partType, setPartType] = useState("");
	const [name, setName] = useState("");
	const [brand, setBrand] = useState("");
    const [formfactor, setFormfactor] = useState("");
    const [compatibility, setCompatibility] = useState("");
    const [gpulength, setGpulength] = useState("");
    const [psulength, setPsulength] = useState("");
    const [front120, setFront120] = useState(false);
    const [front140, setFront140] = useState(false);
    const [bottom120, setBottom120] = useState(false);
    const [bottom140, setBottom140] = useState(false);
    const [rear120, setRear120] = useState(false);
    const [rear140, setRear140] = useState(false);
    const [top120, setTop120] = useState(false);
    const [top140, setTop140] = useState(false);
    const [errs, setErrs] = useState({});

    // Checkboxes
    /*
    const state = {
    	front120: false,
    	front140: false,
    	rear120: false,
    	rear140: false,
    	top120: false,
    	top140: false,
    	bottom120: false,
    	bottom140: false
    }
    */

    const createCase = (e) => {
    	e.preventDefault();
    	axios.post("http://localhost:5000/api/products", {
    		
    		name: name,
    		partType: "case",
    		brand: brand,
    		compatibility: compatibility,
    		gpulength: gpulength,
    		psulength: psulength,
    		front120: front120,
    		front140: front140,
    		rear120: rear120,
    		rear140: rear140,
    		top120: top120,
    		top140: top140,
    		bottom120: bottom120,
    		bottom140: bottom140
    	})
    	.then((res) => {
    		if(res.data.errors){
    			setErrs(res.data.errors)
    		} else{
    			window.location = "/main";
    		}
    	})
    	.catch((err) => console.log(err));
    } 

	return (
		<div>
			<Form onSubmit={createCase}>
				<Form.Group controlId="case-form">
					<Form.Label>Name</Form.Label>
					<Form.Control name="name" type="text" placeholder="Name" onChange={(e) => setName(e.target.value)}/>
					<Form.Label>Brand</Form.Label>
					<Form.Control name="brand" type="text" placeholder="Brand" onChange={(e) => setBrand(e.target.value)} />
					
					<Form.Label>Motherboard Size Compatibility</Form.Label>
				    <Form.Check label="ATX" />
				    <Form.Check label="Micro-ATX" />
				    <Form.Check label="Mini-ITX" />
				    <Form.Check label="Nano-ITX" />	
				    <Form.Label>Max GPU Length</Form.Label>
					<Form.Control name="gpulength" type="number" placeholder="GPU Length" />	
					<Form.Label>Max PSU Length</Form.Label>
					<Form.Control name="psulength" type="number" placeholder="PSU Length" />		    
				</Form.Group>
				<Form.Group>
					<Form.Label>Fans</Form.Label>
					<Table striped bordered>
						<thead>
							<tr>
								<th>Fan Position</th>
								<th>120mm</th>
								<th>140mm</th>
								<th># of</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>Front</td>
								<td><Form.Check aria-label="front120" onChange={(e) => setFront120(e.target.value)} /></td>
								<td><Form.Check aria-label="front140" onChange={(e) => setFront140(e.target.value)} /></td>
								<td><Form.Control type="number" placeholder="#" /></td>
							</tr>
							<tr>
								<td>Rear</td>
								<td><Form.Check aria-label="rear120" onChange={(e) => setRear120(e.target.value)} /></td>
								<td><Form.Check aria-label="rear140" onChange={(e) => setRear140(e.target.value)} /></td>
								<td><Form.Control type="number" placeholder="#" /></td>
							</tr>
							<tr>
								<td>Top</td>
								<td><Form.Check aria-label="top120" onChange={(e) => setTop120(e.target.value)} /></td>
								<td><Form.Check aria-label="top140" onChange={(e) => setTop140(e.target.value)} /></td>
								<td><Form.Control type="number" placeholder="#" /></td>
							</tr>
							<tr>
								<td>Bottom</td>
								<td><Form.Check aria-label="bottom120" onChange={(e) => setBottom120(e.target.value)} /></td>
								<td><Form.Check aria-label="bottom140" onChange={(e) => setBottom140(e.target.value)} /></td>
								<td><Form.Control type="number" placeholder="#" /></td>
							</tr>
						</tbody>
					</Table>
				</Form.Group>
				<Button variant="primary" type="submit">Submit</Button>
			</Form>
		</div>
	)
}
export default Caseform;