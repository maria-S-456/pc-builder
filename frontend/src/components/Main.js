import React, {useState} from 'react';
import Dashboard from './Dashboard';
import Mybuildpage from './Mybuildpage';
import {Tabs, Tab} from 'react-bootstrap';
import Authpage from './Authpage';
import useToken from './useToken'

const Main = () => {
	const {token, setToken} = useToken()

	if(!token){
		return <Authpage setToken={setToken} />
	}

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