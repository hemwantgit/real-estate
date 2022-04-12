import React from 'react';
import { Label, Menu} from 'semantic-ui-react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './App.css';
import Home from './views/Home';
import Activity from './views/Activity';

const routeMapping = {
  "/home": {
    name: "home",
    displayName: "Home",
  },
  "/activity": {
    name: "activity",
    displayName: "Activity",
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);

    let path = window.location.pathname.substring(1);
    let activeItem = path === '' ? 'home' : path;
    this.state = {
      activeItem
    }
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state;
    return (
      <Router>
        <div >
          <Menu inverted >
            <Menu.Menu>
              <Menu.Item style={{"width":"200px"}}>
                <img alt="SD" src={require('./sd_logo2.png')} />
                <Label>Signature Dreams</Label>
              </Menu.Item>
              {
                Object.keys(routeMapping).map((key) => (
                  <Menu.Item name={routeMapping[key].name} as={Link} key={key} to={key} onClick={this.handleItemClick} active={activeItem === routeMapping[key].name} color={'grey'}>
                    {routeMapping[key].displayName}
                  </Menu.Item>))
              }
              
            </Menu.Menu>
          </Menu>
          <div style={{ paddingTop: '12px' }}>

            <Route path="/" exact component={Home} />
            <Route path="/home" exact component={Home} />
            {/* <Route path="/messages/:id" exact render={(props) => <CustomDashboard isDataProcessEnabled={true} {...props} />} /> */}
            <Route path="/activity" component={Activity} />
          </div>
        </div>
      </Router>
    )
  }


}


export default App;
