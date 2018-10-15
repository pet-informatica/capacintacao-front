import React, {Component} from 'react';
import TimelineCard from './TimelineCard';
import {Grid, Icon} from 'semantic-ui-react/dist/commonjs';

export default class HistoryFeed extends Component{
    render(){
        return(
          <Grid columns={2} divided>
                {/* <Grid.Row>
                    <Grid.Column textAlign="right">
                        <Icon name="file word outline" size="huge"></Icon>
                    </Grid.Column>
                    <Grid.Column>
                        <TimelineCard align='left' header='Word' meta="01/10 - 05/10"/>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column floated='right'>
                        <TimelineCard align='right' header='Power Point' meta="08/10 - 11/10"/>
                    </Grid.Column>
                    <Grid.Column floated='left'>
                        <Icon name="file powerpoint outline" size="huge"></Icon>
                    </Grid.Column>
                </Grid.Row> */}
                <Grid.Row>
                    <Grid.Column textAlign="right">
                        <Icon name="google" size="huge"></Icon>
                    </Grid.Column>
                    <Grid.Column>
                        <TimelineCard align='left' header='Google Suite - Turma 1' meta="15/10 - 19/10"/>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column floated='right'>
                        <TimelineCard align='right' header='Google Suite - Turma 2' meta="22/10 - 26/10"/>
                    </Grid.Column>
                    <Grid.Column floated='left'>
                        <Icon name="google" size="huge"></Icon>
                    </Grid.Column>
                </Grid.Row>
                {/* <Grid.Row>
                    <Grid.Column floated='right'>
                        <TimelineCard align='right' header='Excel' meta="22/10 - 26/10"/>
                    </Grid.Column>
                    <Grid.Column floated='left'>
                        <Icon name="file excel outline" size="huge"></Icon>
                    </Grid.Column>
                </Grid.Row> */}
            </Grid>
        );
    }
}
