import React, {useState} from 'react';
import {Form, Button} from 'react-bootstrap';
import axios from 'axios'

const Casefanform = () => {

	const [partType, setPartType] = useState("");
	const [name, setName] = useState("");
	const [brand, setBrand] = useState("");
	const [series, setSeries] = useState("");
	const [size, setSize] = useState("");
    const [errs, setErrs] = useState({});

    const createCase = (e) => {
    	e.preventDefault();
    	axios.post("http://localhost:5000/api/products", {
    		
    		name: name,
    		partType: "casefan",
    		brand: brand,
    		series: series,
    		size: size
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