import React, {useEffect, useState} from 'react';
import {Row, Col} from 'react-bootstrap';
//import products from '../../products';
import axios from 'axios';

const Cpulisting = () =>{
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
		<h2>CPU Fan Listing</h2>
		<Row>
			{products.filter(product => product.partType === 'cpufan').map(filteredPart => (
				<Col>
					{filteredPart.name}
				</Col>
			))}
		</Row>
		</>
	)
}

export default Cpulisting;