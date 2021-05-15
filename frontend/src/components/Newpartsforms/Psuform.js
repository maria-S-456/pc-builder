import React, {useState} from 'react';
import {Form, Button} from 'react-bootstrap';
import axios from 'axios'

const Psuform = () => {
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
					<Form.Label>Input Voltage Minimum</Form.Label>
					<Form.Control type="number" placeholder="Input Voltage" />
					<Form.Label>Input Voltage Maximum</Form.Label>
					<Form.Control type="number" placeholder="Input Voltage" />
					<Form.Label>Type</Form.Label>
					<Form.Control type="text" placeholder="Type" />
					<Form.Label>Maximum Power</Form.Label>
					<Form.Control type="number" placeholder="Maximum Power" />
					<Form.Label>Max PSU Length</Form.Label>
					<Form.Control type="number" placeholder="Max PSU Length" />
				</Form.Group>
				<Button variant="primary" type="submit">Submit</Button>
			</Form>
		</div>
	)
}
export default Psuform;