import React from 'react';
import { LoginScreen, RegisterScreen } from '../../pages/Auth';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../../pages/Home';
import { TicketListScreen, CreateTicketScreen } from '../../pages/Ticket';
import { ProfileScreen } from 'src/pages/User';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={LoginScreen} />
        <Route exact path="/register" component={RegisterScreen} />
        <Route exact path="/tickets" component={TicketListScreen} />
        <Route exact path="/create-ticket" component={CreateTicketScreen} />
        <Route exact path="/profile" component={ProfileScreen} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
