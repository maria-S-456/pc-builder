import React from 'react';
import {Container, Tabs, Tab} from 'react-bootstrap';
import Mblisting from './Dashboardmenu/Mblisting';
import Cpulisting from './Dashboardmenu/Cpulisting';


const Dashboard = () => {
	return (
		<>
			<Container>
				<h1>Hello</h1>
				<Tabs defaultActiveKey="MB" id="menu-tabs">
					<Tab eventKey="mb" title="MB"> 
						<Mblisting />
					</Tab>
					<Tab eventKey="cpu" title="CPU"> 
						<Cpulisting />
					</Tab>
				</Tabs>
			</Container>
		</>
	)
}

export default Dashboard;