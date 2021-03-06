import React, { Component } from 'react';
import {Card, Icon} from 'semantic-ui-react/dist/commonjs';
import '../css/moduleCard.css';

export default class ModuleCard extends Component{
    render(){
        return(
            <Card>
                <Card.Content>
                    <Card.Header textAlign="center">{this.props.header}</Card.Header>
                    <Card.Meta textAlign="center">{this.props.subHeader}</Card.Meta>
                    <Card.Description textAlign="center">{this.props.content}</Card.Description>
                </Card.Content>
                {/* <Card.Content extra>
                    <div className="modality-card-extra">
                        <Icon name='user' className="modality-card-icon"/>
                        <div>{this.props.meta}</div>
                    </div>
                </Card.Content> */}
            </Card>
        );
    }
}
