import React, {useEffect, useState} from 'react';
import {Container, Tab, Tabs} from 'react-bootstrap';
import Mbform from './Newpartsforms/Mbform';
import Cpuform from './Newpartsforms/Cpuform';
import Hddform from './Newpartsforms/Hddform';
import Ssdform from './Newpartsforms/Ssdform';
import Memoryform from './Newpartsforms/Memoryform';
import Caseform from './Newpartsforms/Caseform';
import Psuform from './Newpartsforms/Psuform';
import Casefanform from './Newpartsforms/Casefanform';
import Cpufanform from './Newpartsforms/Cpufanform';
import axios from 'axios';

const Newpart = () => {
	return (
		<>
			<h2>Add new Component</h2>
			<Container>
				
				<Tabs defaultActiveKey="MB" id="menu-tabs">
					<Tab eventKey="mb" title="MB"> 
						<Mbform />
					</Tab>
					<Tab eventKey="cpu" title="CPU"> 
						<Cpuform />
					</Tab>
					<Tab eventKey="hdd" title="HDD">
						<Hddform />
					</Tab>
					<Tab eventKey="ssd" title="SSD">
						<Ssdform />
					</Tab>
					<Tab eventKey="memory" title="RAM">
						<Memoryform />
					</Tab>
					<Tab eventKey="case" title="Case">
						<Caseform />
					</Tab>
					<Tab eventKey="psu" title="PSU">
						<Psuform />
					</Tab>
					<Tab eventKey="casefan" title="Case Fan">
						<Casefanform />
					</Tab>
					<Tab eventKey="cpufan" title="CPU Fan">
						<Cpufanform />
					</Tab>
				</Tabs>
				
			</Container>
		</>
	)
}
export default Newpart;