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
					<div className="index-anchor" id="inscricao"/>
					<Section title="INSCRIÇÃO">
						<div style={{textAlign: "center"}}>
							<div>
								<div className="registration-menuContainer">
									<p className="index-sectionText" style={{marginBottom: "40px"}}>Inscrições para o CapaCIntação de 2018!</p>
									{/* <Button secondary href="https://drive.google.com/uc?id=1xDfe5g7Vhcj4jXPJY-QKRMIqgDW_X2P5&export=download">Baixar Cartaz!</Button> */}
								</div>
								<div className="index-iframe">
								<iframe title="spread" src="https://docs.google.com/forms/d/e/1FAIpQLSdlqjfDXjbXt6FtHuiBwSgLTpPVqMFg2Uchp100OcukihhHtg/viewform?embedded=true" width="700" height="520" frameborder="0" marginheight="0" marginwidth="0">Carregando…</iframe>
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
