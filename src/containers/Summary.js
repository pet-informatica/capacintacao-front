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
							<h4>Dicionário de sinônimos</h4>
							<h4>Recursos de autocorreção</h4>
							<ul>
								<li>Opções de autocorreção</li>
							</ul>
							<h4>Controlando alterações em um documento</h4>
							<h4>Modos de exibição</h4>
							<ul>
								<li>Estrutura de texto por tópicos</li>
								<li>Layout de impressão</li>
							</ul>
							<h4>Aprendendo estilos</h4>
							<ul>
								<li>Aplicando estilos existentes</li>
								<li>Criando</li>
								<li>Removendo</li>
							</ul>
							<h4>Definindo tabulações</h4>
							<h4>Sumário</h4>
							<ul>
								<li>Criando</li>
								<li>Alterando</li>
								<li>Atualizando</li>
							</ul>
							<h4>Inserindo notas de fim e notas de rodapé</h4>
							<h4>Criando índice de legendas</h4>
							<h4>Criando índice remissivo</h4>
							<h4>Criando envelopes e etiquets</h4>
							<h4>Tabela</h4>
							<ul>
								<li>Inserindo tabelas, linhas e colunas</li>
								<li>Formatação da tabela</li>
								<li>Excluindo tabelas, linhas e colunas</li>
								<li>Classificando os dados</li>
								<li>Alinhamento</li>
								<li>Propriedades</li>
							</ul>
							<h4>Inserindo gráficos e SmartArt</h4>
							<h4>Mala direta</h4>
							<ul>
								<li>Tipo de mala direta</li>
								<li>Criando base de dados</li>
								<li>Criando documento de mala direta</li>
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
							<h4>Introdução</h4>
							<ul>
								<li>Tela do PowerPoint</li>
								<li>Elementos da Tela do PowerPoint</li>
								<li>Criar Apresentações</li>
								<li>Criação de filtros</li>
								<li>Selecionar Slide</li>
								<li>Layout</li>
							</ul>
							<h4>Inserção/Modificação</h4>
							<ul>
								<li>Inserir Texto</li>
								<li>Formatar Texto</li>
								<li>Verificação Ortográfica </li>
								<li>Inserir Símbolos Especiais</li>
								<li>Marcadores e Numeração</li>
								<li>Inserir Novo Slide</li>
								<li>Alterar a Ordem dos Slides</li>
								<li>Excluir Slide</li>
								<li>Inserir Figuras</li>
								<li>Cabeçalho e Rodapé</li>
								<li>Inserir Tabela</li>
								<li>Inserir Mídias (Vídeo, Áudio, Gravação de Tela)</li>
								<li>Inserir Botão de Ação</li>
								<li>Alterar Plano de Fundo</li>
								<li>Limpar Formatação</li>
							</ul>
							<h4>Arquivo</h4>
							<ul>
								<li>Salvar arquivo</li>
								<li>Sair do PowerPoint</li>
								<li>Abrir arquivo</li>
								<li>Impressão no PowerPoint</li>
							</ul>
							<h4>Apresentação de Slides</h4>
							<ul>
								<li>Criar Apresentação Personalizada</li>
								<li>Transição de Slides</li>
								<li>Configurar a Apresentação de Slides</li>
								<li>Exibir Apresentação</li>
							</ul>
							<h4>Requisitos</h4>
						</p>
					</Section>
					<div className="index-anchor" id="excel" />
					<Section title="Excel">
					<div style={{textAlign: "center"}}>
					<img src={excel} alt="Logo Excel" height="50" width="50"/>
					</div>
						<p className="index-sectionText">
							<h4>Introdução</h4>
							<ul>
								<li>Primeiro acesso</li>
								<li>Definição dos termos</li>
								<li>Localização e funções:</li>
								<ul>
								<li>Faixa de Opções (guias, seções)</li>
								<li>Barra de acesso rápido</li>
								<li>Botão do office</li>
								<li>Opções do Excel</li>
								<li>Célula</li>
								<li>Planilha</li>
								<li>Pasta</li>
								<li>Modo de Visualização</li>
								</ul>
							</ul>
							<h4>Ações básicas</h4>
							<ul>
								<li>Novo documento a partir de um modelo</li>
								<li>Salvar como</li>
							</ul>
							<h4>Edição básica</h4>
							<ul>
								<li>Selecionar célula</li>
								<li>Inserir texto</li>
								<li>Inserir números</li>
								<li>Editar dados</li>
								<li>Copiar, recortar e colar</li>
								<li>Dados em sequência</li>
								<li>Inserir e excluir planilha</li>
								<li>Alterar o nome de uma planilha</li>
							</ul>
							<h4>Alterar o formato da planilha</h4>
							<ul>
								<li>Dados numéricos</li>
								<li>Ajustar a largura de uma coluna</li>
								<li>Ajustar a altura de uma linha</li>
								<li>Alinhamento de conteúdo</li>
								<li>Regras de formatação</li>
								<li>Encontrar dados</li>
								<li>Inserir linha ou coluna</li>
								<li>Excluir linha ou coluna</li>
								<li>Inserir ou excluir célula</li>
								<li>Mesclar células</li>
							</ul>
							<h4>Alterar a aparência da planilha</h4>
							<ul>
								<li>Trocar a fonte</li>
								<li>Pincel</li>
								<li>Bordas e sombreamento</li>
								<li>Autoformatação</li>
							</ul>
							<h4>Opções de exibição dos dados</h4>
							<ul>
								<li>Ocultar e reexibir linhas e colunas</li>
								<li>Congelar linhas e colunas</li>
								<li>Filtros</li>
							</ul>
							<h4>Cálculos básicos</h4>
							<ul>
								<li>Sinais matemáticos</li>
								<li>Soma</li>
								<li>Subtração</li>
								<li>Multiplicação</li>
								<li>Divisão</li>
								<li>Porcentagem</li>
							</ul>
							<h4>Funções financeiras e lógicas</h4>
							<ul>
								<li>Prever pagamentos</li>
								<li>Juros acumulados</li>
								<li>Quanto rende um investimento</li>
								<li>Cálculos com condições</li>
							</ul>
							<h4>Gráficos</h4>
							<ul>
								<li>Inserindo um gráfico</li>
								<li>Editar gráfico</li>
							</ul>
							<h4>Opções de impressão</h4>
							<ul>
								<li>Cabeçalho e rodapé</li>
								<li>Posição na página</li>
								<li>Orientação da página</li>
								<li>Quebras de página</li>
								<li>Área de impressão</li>
								<li>Visualizar impressão</li>
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
