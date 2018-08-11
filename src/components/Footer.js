import React, {Component} from 'react';
import {Segment} from 'semantic-ui-react/dist/commonjs';

export default class Footer extends Component{
	render(){
		return(
			<Segment textAlign="center" inverted attached="top">© 2018 PET - Todos os direitos reservados</Segment>
		);
	}
}