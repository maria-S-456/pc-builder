import React from 'react';
import {Form, Button} from 'react-bootstrap';

const Cpufanform = () => {
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
					<Form.Label>CPU Socket Compatibility</Form.Label>					
					<Form.Check label="AMD Socket" />
				    <Form.Check label="Intel LGA" />
				    <Form.Check label="2066" />
				    <Form.Check label="2011" />
				    <Form.Check label="1366" />
				    <Form.Check label="1200" />
				    <Form.Check label="1156" />
				    <Form.Check label="1155" />
				    <Form.Check label="1151" />
				    <Form.Check label="1150" />
				    <Form.Check label="775" />
				    <Form.Check label="AM3+" />
				    <Form.Check label="AM3" />
				    <Form.Check label="AM2+" />
				    <Form.Check label="AM2" />
				    <Form.Check label="FM2+" />
				    <Form.Check label="FM2" />
				    <Form.Check label="FM1" />
				    <Form.Label>Max Height</Form.Label>
					<Form.Control type="number" placeholder="Max Height" />		   
				</Form.Group>
				<Button variant="primary" type="submit">Submit</Button>
			</Form>
		</div>
	)
}
export default Cpufanform;