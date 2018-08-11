import React, { Component } from 'react';
import Section from '../components/Section';
import Navbar from '../components/Navbar';
import TopBanner from '../components/TopBanner';

const word = require('../assets/word.png');
const ppt = require('../assets/ppt.png');
const excel = require('../assets/excel.png');
const gsuite = require('../assets/gsuite.png');

export default class Summary extends Component {
	render() {
		return (
			<Navbar>
				<div className="index-page">
					<TopBanner />
					<div className="index-anchor" id="word" />
					<Section title="Word">
					<div style={{textAlign: "center"}}>
					<img src={word} alt="Logo Word" height="50" width="50"/>
					</div>
						<p className="index-sectionText">
							<h4>Gmail</h4>
							<ul>
								<li>Criação de email</li>
								<li>Utilização do email (ler, enviar, anexar arquivos, encaminhar, deletar e restaurar emails)</li>
								<li>Função da/s caixas (estrela e spam)</li>
								<li>Criação de filtros</li>
							</ul>
							<h4>Calendar</h4>
							<ul>
								<li>Criação de eventos únicos ou recorrentes</li>
								<li>Criação de lembretes</li>
								<li>Organização de eventos em diferentes agendas</li>
							</ul>
							<h4>Drive</h4>
							<ul>
								<li>O que é e para que serve a Nuvem</li>
								<li>Como acessar</li>
								<li>Adicionando pastas e arquivos do computador</li>
								<li>Organização do Drive: criação de novas pastas</li>
								<li>Como compartilhar arquivos e visualizar arquivos compartilhados</li>
								<li>Recursos:</li>
								<ul>
									<li>Documentos Google</li>
									<li>Planilhas Google</li>
									<li>Apresentações Google</li>
									<li>Formulários Google</li>
								</ul>

							</ul>
						</p>
						{/* <Embed id="7ubYlXGk7KY" source='youtube' placeholder="https://res.cloudinary.com/dkbuneg9h/image/upload/v1492118391/Prepare-se2_q5eozu.png"/> */}
					</Section>
					<div className="index-anchor" id="ppt" />
					<Section title="PowerPoint">
					<div style={{textAlign: "center"}}>
					<img src={ppt} alt="Logo PowerPoint" height="50" width="50"/>
					</div>
						<p className="index-sectionText">
							<h4>Gmail</h4>
							<ul>
								<li>Criação de email</li>
								<li>Utilização do email (ler, enviar, anexar arquivos, encaminhar, deletar e restaurar emails)</li>
								<li>Função da/s caixas (estrela e spam)</li>
								<li>Criação de filtros</li>
							</ul>
							<h4>Calendar</h4>
							<ul>
								<li>Criação de eventos únicos ou recorrentes</li>
								<li>Criação de lembretes</li>
								<li>Organização de eventos em diferentes agendas</li>
							</ul>
							<h4>Drive</h4>
							<ul>
								<li>O que é e para que serve a Nuvem</li>
								<li>Como acessar</li>
								<li>Adicionando pastas e arquivos do computador</li>
								<li>Organização do Drive: criação de novas pastas</li>
								<li>Como compartilhar arquivos e visualizar arquivos compartilhados</li>
								<li>Recursos:</li>
								<ul>
									<li>Documentos Google</li>
									<li>Planilhas Google</li>
									<li>Apresentações Google</li>
									<li>Formulários Google</li>
								</ul>

							</ul>
						</p>
					</Section>
					<div className="index-anchor" id="excel" />
					<Section title="Excel">
					<div style={{textAlign: "center"}}>
					<img src={excel} alt="Logo Excel" height="50" width="50"/>
					</div>
						<p className="index-sectionText">
							<h4>Gmail</h4>
							<ul>
								<li>Criação de email</li>
								<li>Utilização do email (ler, enviar, anexar arquivos, encaminhar, deletar e restaurar emails)</li>
								<li>Função da/s caixas (estrela e spam)</li>
								<li>Criação de filtros</li>
							</ul>
							<h4>Calendar</h4>
							<ul>
								<li>Criação de eventos únicos ou recorrentes</li>
								<li>Criação de lembretes</li>
								<li>Organização de eventos em diferentes agendas</li>
							</ul>
							<h4>Drive</h4>
							<ul>
								<li>O que é e para que serve a Nuvem</li>
								<li>Como acessar</li>
								<li>Adicionando pastas e arquivos do computador</li>
								<li>Organização do Drive: criação de novas pastas</li>
								<li>Como compartilhar arquivos e visualizar arquivos compartilhados</li>
								<li>Recursos:</li>
								<ul>
									<li>Documentos Google</li>
									<li>Planilhas Google</li>
									<li>Apresentações Google</li>
									<li>Formulários Google</li>
								</ul>

							</ul>
						</p>
					</Section>
					<div className="index-anchor" id="gsuite" />
					<Section title="G Suite">
					<div style={{textAlign: "center"}}>
					<img src={gsuite} alt="Logo GSuite" height="50" width="275"/>
					</div>
						<p className="index-sectionText">
							<h4>Gmail</h4>
							<ul>
								<li>Criação de email</li>
								<li>Utilização do email (ler, enviar, anexar arquivos, encaminhar, deletar e restaurar emails)</li>
								<li>Função da/s caixas (estrela e spam)</li>
								<li>Criação de filtros</li>
							</ul>
							<h4>Calendar</h4>
							<ul>
								<li>Criação de eventos únicos ou recorrentes</li>
								<li>Criação de lembretes</li>
								<li>Organização de eventos em diferentes agendas</li>
							</ul>
							<h4>Drive</h4>
							<ul>
								<li>O que é e para que serve a Nuvem</li>
								<li>Como acessar</li>
								<li>Adicionando pastas e arquivos do computador</li>
								<li>Organização do Drive: criação de novas pastas</li>
								<li>Como compartilhar arquivos e visualizar arquivos compartilhados</li>
								<li>Recursos:</li>
								<ul>
									<li>Documentos Google</li>
									<li>Planilhas Google</li>
									<li>Apresentações Google</li>
									<li>Formulários Google</li>
								</ul>

							</ul>
						</p>
					</Section>
				</div>
			</Navbar>
		);
	}
}
