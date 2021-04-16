import React from 'react';
import {Form, Button} from 'react-bootstrap';

const Casefanform = () => {
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
					<Form.Label>Size</Form.Label>
					<Form.Control type="number" placeholder="Size" />
				</Form.Group>
				<Button variant="primary" type="submit">Submit</Button>
			</Form>
		</div>
	)
}
export default Casefanform;