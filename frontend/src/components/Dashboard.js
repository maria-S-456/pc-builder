import React, {useEffect, useState} from 'react';
import {Container, Tabs, Tab} from 'react-bootstrap';
import Casefanlisting from './Dashboardmenu/Casefanlisting';
import Caselisting from './Dashboardmenu/Caselisting';
import Cpufanlisting from './Dashboardmenu/Cpufanlisting';
import Cpulisting from './Dashboardmenu/Cpulisting';
import Gpulisting from './Dashboardmenu/Gpulisting';
import Hddlisting from './Dashboardmenu/Hddlisting';
import Mblisting from './Dashboardmenu/Mblisting';
import Memorylisting from './Dashboardmenu/Memorylisting';
import Psulisting from './Dashboardmenu/Psulisting';
import Ssdlisting from './Dashboardmenu/Ssdlisting';
import Testpartpage from './Dashboardmenu/Testpartpage';
import axios from 'axios';

const Dashboard = () => {
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
			<Container>
				<h1>Hello</h1>
				<Tabs defaultActiveKey="MB" id="menu-tabs">
					<Tab eventKey="mb" title="MB"> 
						<Mblisting prod={products} />
					</Tab>
					<Tab eventKey="cpu" title="CPU"> 
						<Cpulisting prod={products} />
					</Tab>
					<Tab eventKey="hdd" title="HDD"> 
						<Hddlisting prod={products} />
					</Tab>
					<Tab eventKey="ssd" title="SSD"> 
						<Ssdlisting prod={products} />
					</Tab>
					<Tab eventKey="memory" title="Memory"> 
						<Memorylisting prod={products} />
					</Tab>
					<Tab eventKey="case" title="Case"> 
						<Caselisting prod={products} />
					</Tab>
					<Tab eventKey="psu" title="PSU"> 
						<Psulisting prod={products} />
					</Tab>
					<Tab eventKey="gpu" title="GPU"> 
						<Gpulisting prod={products} />
					</Tab>
					<Tab eventKey="casefan" title="Case Fan"> 
						<Casefanlisting prod={products} />
					</Tab>
					<Tab eventKey="cpufan" title="CPU Fan"> 
						<Cpufanlisting prod={products} />
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