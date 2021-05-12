import React, {useState} from 'react';
import Dashboard from './Dashboard';
import Mybuildpage from './Mybuildpage';
import {Tabs, Tab} from 'react-bootstrap';
import Authpage from './Authpage';

const Main = () => {
	return (
		<div className="main-styles">
		<Tabs style={{justifyContent: 'center', marginBottom: "0.5em" }} variant="pills" defaultActiveKey="Search" id="main-tabs">
			<Tab eventKey="Search" title="Search"> 
				<Dashboard />
			</Tab>
			<Tab eventKey="MyBuild" title="My Build"> 
				<Mybuildpage />
			</Tab>
		</Tabs>
		</div>
	)
}

export default Main;