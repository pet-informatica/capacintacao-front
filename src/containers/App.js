import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Summary from './Summary';
import Footer from '../components/Footer';
import Booklet from './Booklet';
import Registration from './Registration';
// import Practice from './Practice';
// import PracticeC from './PracticeC';
// import Spread from './Spread';
// import FAQ from './FAQ';
import Ads from './Ads';

export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/inscricoes' component={Registration}/>
            <Route exact path='/ementa' component={Summary}/>
            <Route exact path='/apostila' component={Booklet}/>
            {/* <Route exact path='/pratique-teorica' component={Practice}/>
            <Route exact path='/pratique-pratica' component={PracticeC}/>
            <Route exact path='/divulgue' component={Spread}/>
            <Route exact path='/faq' component={FAQ}/> */}
            <Route exact path='/ads' component={Ads}/>
          </Switch>
        </BrowserRouter>
        <Footer/>
      </div>
    );
  }
}
