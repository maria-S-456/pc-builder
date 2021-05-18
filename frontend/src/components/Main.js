import React, {useState, useEffect} from 'react';
import Dashboard from './Dashboard';
import Mybuildpage from './Mybuildpage';
import {Tabs, Tab} from 'react-bootstrap';
import Authpage from './Authpage';
import axios from 'axios';

const Main = () => {
	const [myBuild, setMyBuild] = useState([]);
	const [products, setProducts] = useState([]);

	useEffect(() => {
		const fetchMyBuild = async () => {
			const {data} = await axios.get('/api/mybuilds')
			setMyBuild(data)
		}
		fetchMyBuild()		
	}, [])


	useEffect(() => {
		const fetchProducts = async () => {
			const {data} = await axios.get('/api/products')

			setProducts(data)
		}

		fetchProducts()
	}, [])
	
	return (
		<div className="main-styles">
		<Tabs style={{justifyContent: 'center', marginBottom: "0.5em" }} variant="pills" defaultActiveKey="Search" id="main-tabs">

			<Tab eventKey="Search" title="Search"> 
				<Dashboard mybd={myBuild} prod={products} />
			</Tab>
			<Tab eventKey="MyBuild" title="My Build"> 
				<Mybuildpage mybd={myBuild} prod={products} />
			</Tab>
			
		</Tabs>
		</div>
	)
}

export default Main;