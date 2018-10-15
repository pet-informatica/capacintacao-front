import React, {Component} from 'react';
import Section from '../components/Section';
import Navbar from '../components/Navbar';
import TopBanner from '../components/TopBanner';

const word = require('../assets/word.png');
const ppt = require('../assets/ppt.png');
const excel = require('../assets/excel.png');
const gsuite = require('../assets/gsuite.png');

export default class Booklet extends Component {
	render(){
		return(
			<Navbar>
				<div className="index-page">
					<TopBanner/>
					<div className="index-anchor" id="word" />
					<Section title="Word">	
						<div style={{textAlign: "center"}}>
							<div>
								<img src={word} alt="Logo Word" height="50" width="50"/>
								<div className="index-iframe" style={{height: "600px"}}>
									<iframe title="apostWord" style={{border: "none", height: "600px"}} src="https://drive.google.com/file/d/0BwmoDrJMQ2D8T2RyWDRwOUZaU0U/preview" width="640" height="480"></iframe>
								</div>
							</div>
						</div>
					</Section>
					<div className="index-anchor" id="ppt" />
					<Section title="PowerPoint">
						<div style={{textAlign: "center"}}>
							<div>
								<img src={ppt} alt="Logo PowerPoint" height="50" width="50"/>
								<div className="index-iframe" style={{height: "600px"}}>
									<iframe title="apostPpt" style={{border: "none", height: "600px"}} src="https://drive.google.com/file/d/0B2D6K3x1RqyOcFlzZFE0ckNPRlk/preview" width="640" height="480"></iframe>
								</div>
							</div>
						</div>
					</Section>
					<div className="index-anchor" id="excel" />
					<Section title="Excel">
						<div style={{textAlign: "center"}}>
							<div>
								<img src={excel} alt="Logo Excel" height="50" width="50"/>
								<div className="index-iframe" style={{height: "600px"}}>
									<iframe title="apostExcel" style={{border: "none", height: "600px"}} src="https://drive.google.com/file/d/1S9CZcKRVPJOMJ_03ygQ7tLHvAaZ-iugX/preview" width="640" height="480"></iframe>
								</div>
							</div>
						</div>
					</Section>
					<div className="index-anchor" id="gsuite" />
					<Section title="G Suite">
						<div style={{textAlign: "center"}}>
							<div>
								<img src={gsuite} alt="Logo GSuite" height="50" width="275"/>
								<div className="index-iframe" style={{height: "600px"}}>
									<iframe title="apostGSuite" style={{border: "none", height: "600px"}} src="https://drive.google.com/file/d/1JuxndicRchunboTFsQInkUVoi28Zfhph/preview" width="640" height="480"></iframe>
								</div>
							</div>
						</div>
					</Section>
				</div>
				
			</Navbar>
		);
	}
}
