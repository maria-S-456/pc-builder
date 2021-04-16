import React from 'react';
import {Form, Button} from 'react-bootstrap';

const Hddform = () => {
	return (
		<div>
			<Form>
				<Form.Group controlId="hdd-form">
					<Form.Label>Name</Form.Label>
					<Form.Control type="text" placeholder="Name" />
					<Form.Label>Brand</Form.Label>
					<Form.Control type="text" placeholder="Brand" />
					<Form.Label>Series</Form.Label>
					<Form.Control type="text" placeholder="Series" />
					<Form.Label>Capacity</Form.Label>
					<Form.Control type="number" placeholder="Capacity" />
					<Form.Label>Unit</Form.Label>
					<Form.Control as="select">
				    	<option>GB</option>
				    	<option>TB</option>
				    </Form.Control>
				</Form.Group>
				<Button variant="primary" type="submit">Submit</Button>
			</Form>
		</div>
	)
}
export default Hddform;