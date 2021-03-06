import React from 'react';
import './App.css';
import { Content } from './components/content';
import { Footer } from './components/footer';
import { Header } from './components/header';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends React.Component {

  render() {

    return (

      <Router>

        <div className="App">

          <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">My App</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/read">Read</Nav.Link>
              <Nav.Link href="/create">Create</Nav.Link>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-info">Search</Button>
            </Form>
          </Navbar>

          <Switch>
            <Route path='/' component={Content} exact></Route>
            <Route path='/read' component={Header} ></Route>
            <Route path='/create' component={Footer} ></Route>
          </Switch>

          {/*<Header></Header>
        <Content></Content>
        <Footer></Footer>*/}
        </div>

      </Router>
    );

  }

}

export default App;
