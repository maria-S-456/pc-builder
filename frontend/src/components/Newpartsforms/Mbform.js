import React, {useState} from 'react';
import {Form, Button} from 'react-bootstrap';
import axios from 'axios'

const Mbform = () => {
	return (
		<div>
			<Form>
				<Form.Group controlId="mb-form">
					<Form.Label>Name</Form.Label>
					<Form.Control type="text" placeholder="Name" />
					<Form.Label>Brand</Form.Label>
					<Form.Control type="text" placeholder="Brand" />					
					<Form.Label>CPU Socket Type</Form.Label>
					<Form.Control type="text" placeholder="Socket Type" />
					<Form.Label>Number of Memory slots</Form.Label>
					<Form.Control type="number" placeholder="Number of slots" />
					<Form.Label>Memory Pin Type</Form.Label>
					<Form.Control type="text" placeholder="Memory Slot pins" />
					<Form.Label>Maximum Memory Supported</Form.Label>
					<Form.Control type="text" placeholder="Max memory" />
					<Form.Label>Memory Standard</Form.Label>
					<Form.Control type="text" placeholder="Memory standard" />
					<Form.Label>CPU brand</Form.Label>
					<Form.Control as="select">
				    	<option>Intel</option>
				    	<option>AMD</option>
				    </Form.Control>
					<Form.Label>Channel Supported</Form.Label>
					<Form.Control type="text" placeholder="Channel Supported" />
					<Form.Label>Form Factor</Form.Label>
					<Form.Control as="select">
				    	<option>ATX</option>
				    	<option>Micro-ATX</option>
				    	<option>Mini-ITX</option>
				    	<option>Nano-ITX</option>
				    </Form.Control>
				    <Form.Label>Supported Storage Types</Form.Label>
				    <Form.Check label="HDD" />
				    <Form.Check label="SSD" />
				    <Form.Check label="M.2" />
				</Form.Group>
				<Button variant="primary" type="submit">Submit</Button>
			</Form>
		</div>
	)
}
export default Mbform;