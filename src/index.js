import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/Home';
import FormVideo from './pages/manage/video';
import FormCategory from './pages/manage/category';
import {  BrowserRouter, Switch, Route} from 'react-router-dom';
import './index.css';

const Error404Page = () => (<div><h1>Error 404 Not Found</h1></div>);

ReactDOM.render(
  <BrowserRouter>
  <Switch>
    <Route path="/" component={Home} exact />
    <Route path="/manage/video" component={FormVideo} />
    <Route path="/manage/category" component={FormCategory} />
    <Route component={Error404Page} />
  </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
