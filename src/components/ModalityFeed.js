import React, { Component } from 'react';
import {Card} from 'semantic-ui-react';
import ModalityCard from './../components/ModalityCard';
import "../css/modalityFeed.css";

export default class ModalityFeed extends Component{
    render(){
        return(
            <Card.Group centered="true" className="modality-feed-container">
              <ModalityCard header="A" subHeader="Prova Teórica" content="Problemas matemáticos, de raciocínio e lógica de programação" meta="8º e 9º anos"/>
              <ModalityCard header="B" subHeader="Prova Teórica" content="Problemas matemáticos, de raciocínio e lógica de programação" meta="Ensino Médio"/>
              <ModalityCard header="C" subHeader="Prova Prática" content="Problemas de programação" meta="8º e 9º anos ou Ensino Médio"/>
            </Card.Group>
        );
    }
}
