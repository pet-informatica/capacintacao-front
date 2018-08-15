import React, {Component} from 'react';
import {Button} from 'semantic-ui-react/dist/commonjs';
import Section from '../components/Section';
import Navbar from '../components/Navbar';
import TopBanner from '../components/TopBanner';

export default class Registration extends Component {
	render(){
		return(
			<Navbar>
				<div className="index-page">
					<TopBanner/>
					<div className="index-anchor" id="word"/>
					<Section title="WORD">
						<div style={{textAlign: "center"}}>
							<div>
								<div className="index-iframe">
								<iframe title="spread" src="https://goo.gl/forms/JKery7lu5pUtgOLm1" width="700" height="520" frameborder="100" marginheight="0" marginwidth="0">Carregando…</iframe>
									{/* <iframe title="spread" style={{border: "none", height: "600px"}} src="https://drive.google.com/file/d/1xDfe5g7Vhcj4jXPJY-QKRMIqgDW_X2P5/preview" width="640" height="480"></iframe> */}
								</div>
							</div>
						</div>
					</Section>
					<div className="index-anchor" id="ppt"/>
					<Section title="POWER POINT">
						<div style={{textAlign: "center"}}>
							<div>
								<div className="index-iframe">
								<iframe title="spread" src="https://goo.gl/forms/drPTHuv0BFk9K6Dd2" width="700" height="520" frameborder="0" marginheight="0" marginwidth="0">Carregando…</iframe>
									{/* <iframe title="spread" style={{border: "none", height: "600px"}} src="https://drive.google.com/file/d/1xDfe5g7Vhcj4jXPJY-QKRMIqgDW_X2P5/preview" width="640" height="480"></iframe> */}
								</div>
							</div>
						</div>
					</Section><div className="index-anchor" id="excel"/>
					<Section title="EXCEL">
						<div style={{textAlign: "center"}}>
							<div>
								<div className="index-iframe">
								<iframe title="spread" src="https://goo.gl/forms/T8w3Xi8zZqTBZkDS2" width="700" height="520" frameborder="0" marginheight="0" marginwidth="0">Carregando…</iframe>
									{/* <iframe title="spread" style={{border: "none", height: "600px"}} src="https://drive.google.com/file/d/1xDfe5g7Vhcj4jXPJY-QKRMIqgDW_X2P5/preview" width="640" height="480"></iframe> */}
								</div>
							</div>
						</div>
					</Section>
					<div className="index-anchor" id="gsuite"/>
					<Section title="G SUITE">
						<div style={{textAlign: "center"}}>
							<div>
								<div className="index-iframe">
								<iframe title="spread" src="https://goo.gl/forms/LDOUQE1XYJlgmqpy1" width="700" height="520" frameborder="0" marginheight="0" marginwidth="0">Carregando…</iframe>
									{/* <iframe title="spread" style={{border: "none", height: "600px"}} src="https://drive.google.com/file/d/1xDfe5g7Vhcj4jXPJY-QKRMIqgDW_X2P5/preview" width="640" height="480"></iframe> */}
								</div>
							</div>
						</div>
					</Section>
				</div>
			</Navbar>
		);
	}
}
