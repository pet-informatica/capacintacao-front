import React, {Component} from 'react';
import {Image} from 'semantic-ui-react/dist/commonjs';
import '../css/topBanner.css';

const logo = require('../assets/logoCapa.svg');

export default class TopBanner extends Component{
	render(){
		return(
      <div className="top-banner-container">
				<div className="index-anchor" id="capa"/>
        <Image src={logo} size="big" centered/>
      </div>
		);
	}
}
