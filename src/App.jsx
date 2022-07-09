import React from 'react';
import { Label, Menu, Button, Sidebar, Segment, Icon, Image, Header } from 'semantic-ui-react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './App.css';
import Home from './views/Home';
import Activity from './views/Activity';
import Contacts from './views/Contacts';

const routeMapping = {
  "/home": {
    name: "home",
    displayName: "Home",
    icon:"home"
  },
  "/activity": {
    name: "activity",
    displayName: "Activity",
    icon:"sticky note"
  },
  "/contacts": {
    name: "contacts",
    displayName: "Contacts",
    icon:"group"
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);

    let path = window.location.pathname.substring(1);
    let activeItem = path === '' ? 'home' : path;
    this.state = {
      activeItem,
      openMenuItems: false
    }
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name,  openMenuItems: false})


  render() {
    const { activeItem } = this.state;
    return (
      <Router>
        <div >

        <div class="small-screen">
          <Menu inverted class="small-screen">
            <Menu.Menu>
              <Menu.Item >
                <img alt="SD" src={require('./sd_logo2.png')} />
                <Label style={{
                  "letterSpacing": "5px",
                  "height": "37px",
                  "fontSize": "22px",
                  "marginLeft": 0,
                }}>SD</Label>
              </Menu.Item>
              <Menu.Item >
                <Button icon={this.state.openMenuItems ? "close" : "sidebar"} class="left" onClick={() => this.setState({ openMenuItems: !this.state.openMenuItems })} />
              </Menu.Item>
            </Menu.Menu>
          </Menu>
        </div>
          <div class="large-screen">
            <Menu inverted >
              <Menu.Menu>
                <Menu.Item style={{ "width": "200px" }}>
                  <img alt="SD" src={require('./sd_logo2.png')} />
                  <Label style={{
                    "letterSpacing": "5px",
                    "height": "37px",
                    "fontSize": "15px",
                    "marginLeft": 0,
                  }}>Signature Dreams</Label>
                </Menu.Item>
                {
                  Object.keys(routeMapping).map((key) => (
                    <Menu.Item name={routeMapping[key].name} as={Link} key={key} to={key} onClick={this.handleItemClick} active={activeItem === routeMapping[key].name} color={'grey'}>
                      {routeMapping[key].displayName}
                    </Menu.Item>))
                }

              </Menu.Menu>
            </Menu>
          </div>

          <Sidebar.Pushable as={Segment}>
            <Sidebar
              as={Menu}
              animation='overlay'
              icon='labeled'
              inverted
              vertical
              visible={this.state.openMenuItems}
              width='thin'
              direction='right'
            >
              {
                  Object.keys(routeMapping).map((key) => (
                    <Menu.Item name={routeMapping[key].name} as={Link} key={key} to={key} onClick={this.handleItemClick} active={activeItem === routeMapping[key].name} color={'grey'}>
                      <Icon name={routeMapping[key].icon} />{routeMapping[key].displayName}
                    </Menu.Item>))
                }
            </Sidebar>

            <Sidebar.Pusher>
              <div>

                <Route path="/" exact component={Home} />
                <Route path="/home" exact component={Home} />
                {/* <Route path="/messages/:id" exact render={(props) => <CustomDashboard isDataProcessEnabled={true} {...props} />} /> */}
                <Route path="/activity" component={Activity} />
                <Route path="/contacts" component={Contacts} />
              </div>

            </Sidebar.Pusher>
          </Sidebar.Pushable>
        </div>
      </Router>
    )
  }
}

export default App;
