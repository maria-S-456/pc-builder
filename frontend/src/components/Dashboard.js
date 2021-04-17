import React from 'react';
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
					<Tab eventKey="hdd" title="HDD"> 
						<Hddlisting />
					</Tab>
					<Tab eventKey="ssd" title="SSD"> 
						<Ssdlisting />
					</Tab>
					<Tab eventKey="memory" title="Memory"> 
						<Memorylisting />
					</Tab>
					<Tab eventKey="case" title="Case"> 
						<Caselisting />
					</Tab>
					<Tab eventKey="psu" title="PSU"> 
						<Psulisting />
					</Tab>
					<Tab eventKey="gpu" title="GPU"> 
						<Gpulisting />
					</Tab>
					<Tab eventKey="casefan" title="Case Fan"> 
						<Casefanlisting />
					</Tab>
					<Tab eventKey="cpufan" title="CPU Fan"> 
						<Cpufanlisting />
					</Tab>
				</Tabs>
			</Container>
		</>
	)
}

export default Dashboard;