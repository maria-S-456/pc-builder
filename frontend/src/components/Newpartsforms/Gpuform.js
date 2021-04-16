import React from 'react';
import {Form} from 'react-bootstrap';

const Gpuform = () => {
	return (
		<div>
			<Form>
				<Form.Group controlId="gpu-form">
					<Form.Label>Name</Form.Label>
					<Form.Control type="text" placeholder="Name" />
					<Form.Label>Brand</Form.Label>
					<Form.Control type="text" placeholder="Brand" />
				</Form.Group>
			</Form>
		</div>
	)
}
export default Gpuform;