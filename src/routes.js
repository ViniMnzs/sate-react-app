import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Main from './pages/main/';
import Register from './pages/register/';
import Login from './pages/login/';
import Admin from './pages/admin/';
import Process from './pages/process/';
import Mapa from './pages/map/';
import DeleteStudent from './components/deleteStudent'
import UpdateStudent from './components/updateStudent'

export default function Routes() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={Login} />
        <Route exact path="/list" component={Main} />
        <Route exact path="/admin" component={Admin} />
        <Route exact path="/process" component={Process} />
        <Route exatc path='/register' component={Register} />
        <Route exatc path='/map' component={Mapa} />
        <Route path="/remove/:id" exact component={DeleteStudent} />
        <Route path="/update/:id" exact component={UpdateStudent} />

      </BrowserRouter>
    );
  }