import React, { Component } from 'react';
import {Card} from 'semantic-ui-react/dist/commonjs';
import ModuleCard from './ModuleCard';
import "../css/moduleFeed.css";

export default class ModuleFeed extends Component{
    render(){
        return(
            <Card.Group centered="true" className="module-feed-container">
              <ModuleCard header="Word" subHeader="5 dias" content="Conteúdo básico e avançado"/>
              <ModuleCard header="PowerPoint" subHeader="4 dias" content="Conteúdo básico e avançado"/>
              <ModuleCard header="Excel" subHeader="5 dias" content="Conteúdo básico e avançado"/>
              <ModuleCard header="G Suite" subHeader="5 dias" content="Recursos do Drive, Calendar e Gmail"/>
            </Card.Group>
        );
    }
}
