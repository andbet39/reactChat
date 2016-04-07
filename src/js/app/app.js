import React from 'react'
import ChatMain from './components/chat/chat-main';
import Room from './components/room/room';
import MainApplication from './components/main/main'
import { Router, Route, hashHistory } from 'react-router'
import Register from './components/auth/register'
import Login from './components/auth/login'
import { browserHistory } from 'react-router'
import SimpleMentionEditor from './components/editor/editor'

export default class App extends React.Component
{
  render(){
    return (
      <div>
        <Router history={browserHistory}>
          <Route path="/" component={MainApplication}/>
          <Route path="/main" component={MainApplication}/>
          <Route path="/auth/register" component={Register}/>
          <Route path="/auth/login" component={Login}/>
          <Route path="/testeditor" component={SimpleMentionEditor}/>
        </Router>

      </div>


    )
  }
}
