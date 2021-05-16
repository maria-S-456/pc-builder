import React, {useState, useEffect} from 'react';
import Dashboard from './Dashboard';
import Mybuildpage from './Mybuildpage';
import {Tabs, Tab} from 'react-bootstrap';
import Authpage from './Authpage';
import axios from 'axios';

const Main = (props) => {
	const [myBuild, setMyBuild] = useState([])
	useEffect(() => {
		const fetchMyBuild = async () => {
			const {data} = await axios.get('/api/mybuilds')

			setMyBuild(data)
		}
		fetchMyBuild()
	}, [])
	return (
		<div className="main-styles">
		<Tabs style={{justifyContent: 'center', marginBottom: "0.5em" }} variant="pills" defaultActiveKey="Search" id="main-tabs">
			<Tab eventKey="Search" title="Search"> 
				<Dashboard />
			</Tab>
			<Tab eventKey="MyBuild" title="My Build"> 
				<Mybuildpage mybd={myBuild} />
			</Tab>
		</Tabs>
		</div>
	)
}

export default Main;