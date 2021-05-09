import React, {useEffect, useState} from 'react';
import {Container, Tabs, Tab} from 'react-bootstrap';
import Casefanpage from './Dashboardmenu/Casefanpage';
import Casepage from './Dashboardmenu/Casepage';
import Cpufanpage from './Dashboardmenu/Cpufanpage';
import Cpupage from './Dashboardmenu/Cpupage';
import Gpupage from './Dashboardmenu/Gpupage';
import Hddpage from './Dashboardmenu/Hddpage';
import Mbpage from './Dashboardmenu/Mbpage';
import Memorypage from './Dashboardmenu/Memorypage';
import Psupage from './Dashboardmenu/Psupage';
import Ssdpage from './Dashboardmenu/Ssdpage';
import Testpartpage from './Dashboardmenu/Testpartpage';
import axios from 'axios';

const Dashboard = () => {
	const [products, setProducts] = useState([])

	useEffect(() => {
		const fetchProducts = async () => {
			const {data} = await axios.get('/api/products')

			setProducts(data)
		}

		fetchProducts()
	}, [])
	return (
		<>
			<Container>
				<Tabs defaultActiveKey="MB" id="menu-tabs">
					<Tab eventKey="mb" title="MB"> 
						<Mbpage prod={products} />
					</Tab>
					<Tab eventKey="cpu" title="CPU"> 
						<Cpupage prod={products} />
					</Tab>
					<Tab eventKey="hdd" title="HDD"> 
						<Hddpage prod={products} />
					</Tab>
					<Tab eventKey="ssd" title="SSD"> 
						<Ssdpage prod={products} />
					</Tab>
					<Tab eventKey="memory" title="Memory"> 
						<Memorypage prod={products} />
					</Tab>
					<Tab eventKey="case" title="Case"> 
						<Casepage prod={products} />
					</Tab>
					<Tab eventKey="psu" title="PSU"> 
						<Psupage prod={products} />
					</Tab>
					<Tab eventKey="gpu" title="GPU"> 
						<Gpupage prod={products} />
					</Tab>
					<Tab eventKey="casefan" title="Case Fan"> 
						<Casefanpage prod={products} />
					</Tab>
					<Tab eventKey="cpufan" title="CPU Fan"> 
						<Cpufanpage prod={products} />
					</Tab>
					<Tab eventKey="testpage" title="Test"> 
						<Testpartpage prod={products} />
					</Tab>
				</Tabs>
			</Container>
		</>
	)
}

export default Dashboard;