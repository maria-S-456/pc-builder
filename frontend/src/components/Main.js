import React, {useState, useEffect} from 'react';
import Dashboard from './Dashboard';
import Mybuildpage from './Mybuildpage';
import {Tabs, Tab} from 'react-bootstrap';
import Authpage from './Authpage';
import axios from 'axios';

const Main = (props) => {
	const [myBuild, setMyBuild] = useState([])

	//const [selected, setSelect] = useState([])

/*
 const setSelected  = (i)=>{

 	myBuild.forEach((obj,index)=>{
 		console.log(index)
 		if (obj.partType === i.partType){
 			const copyBuilds = {...myBuild}

 			copyBuilds[index] =i
 			setMyBuild(copyBuilds)
 			console.log("switche data=>",myBuild)

 		}
 	})



 	for (let a of myBuild){
 		
 	}

 	setMyBuild(i)



 }

 useEffect(()=>{
 	console.log('herrrrrrr===>',myBuild)

 },[myBuild])

*/

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
				<Dashboard  mybd={myBuild} />
			</Tab>
			<Tab eventKey="MyBuild" title="My Build"> 
				<Mybuildpage mybd={myBuild} />
			</Tab>
		</Tabs>
		</div>
	)
}

export default Main;