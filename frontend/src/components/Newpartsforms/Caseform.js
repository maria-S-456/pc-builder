import React from 'react';
import {Form, Table, Button} from 'react-bootstrap';
import axios from 'axios'

const Caseform = () => {

	
	/*
	const [partType, setPartType] = useState("");
	const [name, setName] = useState(""),
	const [brand, setBrand] = useState(""),
    const [type, setType] = useState(""),
    const [compatibility, setCompatibility] = useState(""),
    const [gpulength, setGpulength] = useState(""),
    const [psulength, setPsulength] = useState("");

    const createCase = (e) => {
    	e.preventDefault();
    	axios.post("http://localhost:5000/api/products", {
    		partType: partType,
    		name: name,
    		brand: brand,
    		type: type,
    		compatibility: compatibility,
    		gpulength: gpulength,
    		psulength: psulength
    	})
    	.then((res) => {
    		if(res.data.errors){
    			setErrs(res.data.errors)
    		} else{
    			navigate("/api/products/" + res.data._id)
    		}
    	})
    	.catch((err) => console.log(err));
    } */

	return (
		<div>
			<Form>
				<Form.Group controlId="case-form">
					<Form.Label>Name</Form.Label>
					<Form.Control type="text" placeholder="Name" />
					<Form.Label>Brand</Form.Label>
					<Form.Control type="text" placeholder="Brand" />
					<Form.Label>Type</Form.Label>
					<Form.Control type="text" placeholder="Type" />
					<Form.Label>Motherboard Size Compatibility</Form.Label>
				    <Form.Check label="ATX" />
				    <Form.Check label="Micro-ATX" />
				    <Form.Check label="Mini-ITX" />
				    <Form.Check label="Nano-ITX" />	
				    <Form.Label>Max GPU Length</Form.Label>
					<Form.Control type="number" placeholder="GPU Length" />	
					<Form.Label>Max PSU Length</Form.Label>
					<Form.Control type="number" placeholder="PSU Length" />		    
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
								<td><Form.Check aria-label="front-120" /></td>
								<td><Form.Check aria-label="front-140" /></td>
								<td><Form.Control type="number" placeholder="#" /></td>
							</tr>
							<tr>
								<td>Rear</td>
								<td><Form.Check aria-label="rear-120" /></td>
								<td><Form.Check aria-label="rear-140" /></td>
								<td><Form.Control type="number" placeholder="#" /></td>
							</tr>
							<tr>
								<td>Top</td>
								<td><Form.Check aria-label="top-120" /></td>
								<td><Form.Check aria-label="top-140" /></td>
								<td><Form.Control type="number" placeholder="#" /></td>
							</tr>
							<tr>
								<td>Bottom</td>
								<td><Form.Check aria-label="bottom-120" /></td>
								<td><Form.Check aria-label="bottom-140" /></td>
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