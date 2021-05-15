import React, {useState} from 'react';
import {Form, Button} from 'react-bootstrap';
import axios from 'axios'

const Cpufanform = () => {

	const [partType, setPartType] = useState("");
	const [name, setName] = useState("");
	const [brand, setBrand] = useState("");
	const [series, setSeries] = useState("");
	const [size, setSize] = useState("");
	const [compatibility, setCompatibility] = useState("");
	const [amd, setAmd] = useState(false);
	const [intel, setIntel] = useState(false);
	const [c2066, set2066] = useState(false);
	const [c2011, set2011] = useState(false);
	const [c1366, set1366] = useState(false);
	const [c1200, set1200] = useState(false);
	const [c1156, set1156] = useState(false);
	const [c1155, set1155] = useState(false);
	const [c1151, set1151] = useState(false);
	const [c1150, set1150] = useState(false);
	const [c775, set775] = useState(false);
	const [am3plus, setam3plus] = useState(false);
	const [am3, setam3] = useState(false);
	const [am2plus, setam2plus] = useState(false);
	const [am2, setam2] = useState(false);
	const [fm2plus, setfm2plus] = useState(false);
	const [fm2, setfm2] = useState(false);
	const [fm, setfm] = useState(false);
	const [maxheight, setMaxheight] = useState("")
    const [errs, setErrs] = useState({});

    const createCase = (e) => {
    	e.preventDefault();
    	axios.post("http://localhost:5000/api/products", {
    		
    		name: name,
    		partType: "cpufan",
    		brand: brand,
    		series: series,
    		size: size,
    		compatibility: compatibility,
    		amd: amd,
    		intel: intel,
    		c2066: c2066,
    		c2011: c2011,
    		c1366: c1366,
    		c1200: c1200,
    		c1156: c1156,
    		c1155: c1155,
    		c1151: c1151,
    		c1150: c1150,
    		c775: c775,
    		am3plus: am3plus,
    		am3: am3,
    		am2plus: am2plus,
    		am2: am2,
    		fm2plus: fm2plus,
    		fm2: fm2,
    		fm: fm,
    		maxheight: maxheight
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