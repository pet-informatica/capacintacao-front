import React, {Component} from 'react';
import {Embed} from 'semantic-ui-react/dist/commonjs';
import HistoryFeed from '../components/HistoryFeed';
import Section from '../components/Section';
import Navbar from '../components/Navbar';
import TopBanner from '../components/TopBanner';

export default class Summary extends Component{
	render(){
		return(
			<Navbar>
				<div className="index-page">
					<TopBanner/>
					<div className="index-anchor" id="word"/>
					<Section title="Word">
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
  {/* list-style-type: circle;
	margin-left: 1em; */}
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
					<div className="index-anchor" id="objetivo"/>
					<Section title="OBJETIVO">
						<p className="index-sectionText">A OPEI procura despertar nos alunos o interesse pela computação, imprescindível na formação básica dos estudantes atualmente, através de uma atividade que envolve desafio, engenhosidade e uma saudável dose de competição. Ela também permite que os competidores possam conhecer de forma mais abrangente a carreira na área, procurando engajar os participantes em ações após a competição, como visitas guiadas no <a rel="noopener noreferrer" target="_blank" href="https://www.ufpe.br/cin">Centro de Informática (CIn)</a> e oferecimento de <a rel="noopener noreferrer" target="_blank" href="https://pet-informatica.github.io/programa-de-ferias/">cursos de computação</a>. Por fim, a olimpíada almeja preparar melhor e despertar o interesse de alunos pernambucanos para as competições nacionais e internacionais de programação, como a OBI, e a ACM/ICPC.</p>
						<Embed id="mHW1Hsqlp6A" source='youtube' placeholder="https://res.cloudinary.com/dkbuneg9h/image/upload/v1511325108/Ruchi-facebook-first-female-enginer_min_r2pssr.jpg"/>
					</Section>
					<div className="index-anchor" id="historico"/>
					<Section title="HISTÓRICO">
						<p className="index-sectionText">A OPEI é uma olimpíada recente. Sua história começa em 2015, quando o PET-Informática decide incentivar o estudo de computação em âmbito estadual. Desde então, ela vem crescendo rapidamente a cada edição! </p>
						<br/><br/><HistoryFeed/>
					</Section>
				</div>
			</Navbar>
		);
	}
}
