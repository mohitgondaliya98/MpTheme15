import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Login from './modules/login';
import Dashboard from './modules/dashboard';
import Innerpage from './modules/innerpage';
import Header from '../src/modules/shared/header.js'
import Sidebar from '../src/modules/shared/sidebar.js';
import Footer from '../src/modules/shared/footer';
import Errorpage from './modules/shared/error-404';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="wrapper">
          <Header></Header>
          <div className="content-body">
            <Sidebar></Sidebar>
            <Route path={`${process.env.PUBLIC_URL}/`} exact component={Login} />
            <Route path={`${process.env.PUBLIC_URL}/dashboard`} exact component={Dashboard} />
            <Route path={`${process.env.PUBLIC_URL}/innerpage`} component={Innerpage} />
            <Route path={`${process.env.PUBLIC_URL}/error`} component={Errorpage} />
          </div>
        </div>
        <Footer></Footer>
      </Router>
    );
  }
}

export default App;
