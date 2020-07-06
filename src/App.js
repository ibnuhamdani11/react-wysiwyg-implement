import React, { Component } from 'react';
// import { Router, Route } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// import ReactRichEditor from 'react-rich-text-editor'
import TinymceExample from './TinymceExample.js'
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import 'font-awesome/css/font-awesome.css';

// import RootComponent from './TinymceExample';
import Home from './Home';
import Report from './Report';


class App extends Component {
    render() {
        return (
            <Router>
			    <Route render={({ location, history }) => (
			        <React.Fragment>
			            <SideNav
			                onSelect={(selected) => {
			                    const to = '/' + selected;
			                    if (location.pathname !== to) {
			                        history.push(to);
			                    }
			                }}
			            >
			                <SideNav.Toggle />
			                <SideNav.Nav defaultSelected="home">
			                    <NavItem eventKey="home">
			                        <NavIcon>
			                            <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
			                        </NavIcon>
			                        <NavText>
			                            Home
			                        </NavText>
			                    </NavItem>
			                    <NavItem eventKey="report">
			                        <NavIcon>
			                            <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
			                        </NavIcon>
			                        <NavText>
			                            Report
			                        </NavText>
			                    </NavItem>
			                </SideNav.Nav>
			            </SideNav>
			            <div style={{marginLeft: 100}}>
			            <main>
			                <Route path="/" exact component={props => <Home />} />
			                <Route path="/home" component={props => <Home />} />
			                <Route path="/report" component={props => <Report />} />
			            </main>
			            </div>
			        </React.Fragment>
			    )}
			    />
			</Router>
        )
    }    
}

export default App;