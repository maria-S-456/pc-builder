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
import axios from 'axios';

const Dashboard = props => {

	return (
		<>
			<Container>
				<Tabs defaultActiveKey="MB" id="menu-tabs">
					<Tab eventKey="mb" title="MB"> 
						<Mbpage prod={props.prod} mybd={props.mybd} setMybd={props.setMybd} />
					</Tab>
					<Tab eventKey="cpu" title="CPU"> 
						<Cpupage prod={props.prod} mybd={props.mybd} setMybd={props.setMybd} />
					</Tab>
					<Tab eventKey="hdd" title="HDD"> 
						<Hddpage prod={props.prod} mybd={props.mybd} setMybd={props.setMybd} />
					</Tab>
					<Tab eventKey="ssd" title="SSD"> 
						<Ssdpage  prod={props.prod} mybd={props.mybd} setMybd={props.setMybd} />
					</Tab>
					<Tab eventKey="memory" title="Memory"> 
						<Memorypage  prod={props.prod} mybd={props.mybd} setMybd={props.setMybd} />
					</Tab>
					<Tab eventKey="case" title="Case"> 
						<Casepage  prod={props.prod} mybd={props.mybd} setMybd={props.setMybd} />
					</Tab>
					<Tab eventKey="psu" title="PSU"> 
						<Psupage  prod={props.prod} mybd={props.mybd} setMybd={props.setMybd} />
					</Tab>
					<Tab eventKey="gpu" title="GPU"> 
						<Gpupage prod={props.prod} mybd={props.mybd} setMybd={props.setMybd} />
					</Tab>
					<Tab eventKey="casefan" title="Case Fan"> 
						<Casefanpage prod={props.prod} mybd={props.mybd} setMybd={props.setMybd} />
					</Tab>
					<Tab eventKey="cpufan" title="CPU Fan"> 
						<Cpufanpage prod={props.prod} mybd={props.mybd} />
					</Tab>
					
				</Tabs>
			</Container>
		</>
	)
}

export default Dashboard;