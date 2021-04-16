import React from 'react';
import {Form, Button} from 'react-bootstrap';

const Cpuform = () => {
	return (
		<div>
			<Form>
				<Form.Group controlId="cpu-form">
					<Form.Label>Name</Form.Label>
					<Form.Control type="text" placeholder="Name" />
					<Form.Label>Brand</Form.Label>
					<Form.Control as="select">
				    	<option>Intel</option>
				    	<option>AMD</option>
				    </Form.Control>
				    <Form.Label>Series</Form.Label>
					<Form.Control type="text" placeholder="Series" />
					<Form.Label>Socket Type</Form.Label>
					<Form.Control type="text" placeholder="Socket Type" />
					<Form.Label>Number of Cores</Form.Label>
					<Form.Control as="select">						
				    	<option>2</option>
				    	<option>4</option>
				    	<option>6</option>
				    	<option>8</option>
				    	<option>10</option>
				    	<option>12</option>
				    </Form.Control>
				    <Form.Label>Memory Type</Form.Label>
					<Form.Control type="text" placeholder="Socket Type" />		
				</Form.Group>
				<Button variant="primary" type="submit">Submit</Button>
			</Form>
		</div>
	)
}
export default Cpuform;