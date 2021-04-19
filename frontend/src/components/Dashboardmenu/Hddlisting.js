import React, {useEffect, useState} from 'react';
import {Row, Col} from 'react-bootstrap';
//import products from '../../products';
import axios from 'axios';

const Hddlisting = () =>{
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
		<h2>HDD Listing</h2>
		<Row>
			{products.filter(product => product.partType === 'hdd').map(filteredPart => (
				<Col>
					{filteredPart.name}
				</Col>
			))}
		</Row>
		</>
	)
}

export default Hddlisting;