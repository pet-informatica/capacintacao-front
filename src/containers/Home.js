import React, { Component } from 'react';
import {Card, Image, Icon} from 'semantic-ui-react/dist/commonjs';
import CalendarFeed from '../components/CalendarFeed';
import Section from '../components/Section';
import ModalityFeed from '../components/ModuleFeed';
import Navbar from '../components/Navbar';
import TopBanner from '../components/TopBanner';

const realizacao = require('../assets/realizacao_PET.png');
const apoio = require('../assets/apoio_CIn_UFPE.png');

export default class Home extends Component{
    render(){
        return(
          <Navbar>
			<div className="index-content">
                <TopBanner/>
                <div className="index-anchor" id="modalidades"/>
                <Section title="MÓDULOS">
                    <ModalityFeed/>
                </Section>
                <div className="index-anchor" id="calendario"/>
                <Section title="CALENDÁRIO">
                    <CalendarFeed/>
                </Section>
                <div className="index-anchor" id="contato"/>
                <Section title="CONTATO">
                  <Card.Group centered="true" style={{justifyContent: "center"}}>
                    <Card>
                        <Card.Content>
                            <Card.Description>
                                Precisa falar conosco? Basta mandar uma mensagem na página do facebook, ou enviar um e-mail. Vamos te responder em um instante!
                            </Card.Description>
                        </Card.Content>
                    </Card>
                    <Card>
                        <Card.Content extra>
                            <div style={{display: "flex"}}>
                                <Icon name='mail outline' />
                                <p>petinformatica-l@cin.ufpe.br</p>
                            </div>
                            <div style={{display: "flex"}}>
                                <Icon name='facebook' />
                                <a href="https://www.facebook.com/petinformatica" rel="noopener noreferrer" target="_blank">Página do PET-Informática</a>
                            </div>
                        </Card.Content>
                    </Card>
                  </Card.Group>
                </Section>
                <div>
                <Image style={{marginTop:"120px"}} centered size="large" src={realizacao}/>
                <Image centered size="medium" src={apoio}/>
                </div>
            </div>
          </Navbar>
        );
    }
}
