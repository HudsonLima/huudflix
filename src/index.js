import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/Home';
import AddMovie from './pages/register/movie';
import AddCategory from './pages/register/category';
import {  BrowserRouter, Switch, Route} from 'react-router-dom';
import './index.css';

const Error404Page = () => (<div><h1>Error 404 Not Found</h1></div>);

ReactDOM.render(
  <BrowserRouter>
  <Switch>
    <Route path="/" component={Home} exact />
    <Route path="/register/movie" component={AddMovie} />
    <Route path="/register/category" component={AddCategory} />
    <Route component={Error404Page} />
  </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
