import React, {useEffect, useState} from 'react';
import {Row, Col} from 'react-bootstrap';
//import products from '../../products';
import axios from 'axios';

const Ssdlisting = () =>{
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
		<h2>SSD Listing</h2>
		<Row>
			{products.filter(product => product.partType === 'ssd').map(filteredPart => (
				<Col>
					{filteredPart.name}
				</Col>
			))}
		</Row>
		</>
	)
}

export default Ssdlisting;