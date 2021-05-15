import React, {useState} from 'react';
import {Form, Button} from 'react-bootstrap';
import axios from 'axios'

const Memoryform = () => {
	return (
		<div>
			<Form>
				<Form.Group controlId="memory-form">
					<Form.Label>Name</Form.Label>
					<Form.Control type="text" placeholder="Name" />
					<Form.Label>Brand</Form.Label>
					<Form.Control type="text" placeholder="Brand" />
					<Form.Label>Capacity</Form.Label>
					<Form.Control type="number" placeholder="Capacity" />
					<Form.Label>Unit</Form.Label>
					<Form.Control as="select">
				    	<option>GB</option>
				    	<option>TB</option>
				    </Form.Control>
				    <Form.Label>Memory Type</Form.Label>
				    <Form.Control as="select">
				    	<option>DDR1</option>
				    	<option>DDR2</option>
				    	<option>DDR3</option>
				    	<option>DDR4</option>
				    </Form.Control>
				    <Form.Label>Memory Pin Type</Form.Label>
					<Form.Control type="text" placeholder="Memory Slot pins" />
				</Form.Group>
				<Button variant="primary" type="submit">Submit</Button>
			</Form>
		</div>
	)
}
export default Memoryform;