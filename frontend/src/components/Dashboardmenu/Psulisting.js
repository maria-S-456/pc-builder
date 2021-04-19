import React, {useEffect, useState} from 'react';
import {Row, Col} from 'react-bootstrap';
//import products from '../../products';
import axios from 'axios';

const Psulisting = () =>{
	const [products, setProducts] = useState([])

	useEffect(() => {
		const fetchProducts = async () => {
			const {data} = await axios.get('/api')

			setProducts(data)
		}

		fetchProducts()
	}, [])
	return (
		<>
		<h2>PSU Listing</h2>
		<Row>
			{products.filter(product => product.partType === 'psu').map(filteredPart => (
				<Col>
					{filteredPart.name}
				</Col>
			))}
		</Row>
		</>
	)
}

export default Psulisting;