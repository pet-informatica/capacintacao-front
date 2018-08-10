import React, {Component} from 'react';
import Section from '../components/Section';
import Navbar from '../components/Navbar';
import TopBanner from '../components/TopBanner';
import { HashLink as Link } from 'react-router-hash-link';

export default class Booklet extends Component {
	render(){
		return(
			<Navbar>
				<div className="index-page">
					<TopBanner/>
					<div className="index-anchor" id="word"/>
					<Section title="Apostila Word">
						<div style={{textAlign: "center"}}>
							<div>
								<div className="index-iframe">
									<iframe title="notice" style={{border: "none", height: "600px"}} src="https://drive.google.com/file/d/1QVhCrwtcPjzaLyuCULg3g9GhtCHRS71X/preview" width="640" height="480"></iframe>
								</div>
							</div>
						</div>
					</Section>
				</div>
				<div className="index-page">
					<TopBanner/>
					<div className="index-anchor" id="ppt"/>
					<Section title="Apostila PowerPoint">
						<div style={{textAlign: "center"}}>
							<div>
								<div className="index-iframe">
									<iframe title="notice" style={{border: "none", height: "600px"}} src="https://drive.google.com/file/d/1QVhCrwtcPjzaLyuCULg3g9GhtCHRS71X/preview" width="640" height="480"></iframe>
								</div>
							</div>
						</div>
					</Section>
				</div>
				<div className="index-page">
					<TopBanner/>
					<div className="index-anchor" id="excel"/>
					<Section title="Apostila Excel">
						<div style={{textAlign: "center"}}>
							<div>
								<div className="index-iframe">
									<iframe title="notice" style={{border: "none", height: "600px"}} src="https://drive.google.com/file/d/1QVhCrwtcPjzaLyuCULg3g9GhtCHRS71X/preview" width="640" height="480"></iframe>
								</div>
							</div>
						</div>
					</Section>
				</div>
				<div className="index-page">
					<TopBanner/>
					<div className="index-anchor" id="gsuite"/>
					<Section title="Apostila G Suite">
						<div style={{textAlign: "center"}}>
							<div>
								<div className="index-iframe">
									<iframe title="notice" style={{border: "none", height: "600px"}} src="https://drive.google.com/file/d/1QVhCrwtcPjzaLyuCULg3g9GhtCHRS71X/preview" width="640" height="480"></iframe>
								</div>
							</div>
						</div>
					</Section>
				</div>
			</Navbar>
		);
	}
}
