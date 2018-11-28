import React, { Component } from 'react';
import Navbar from './navbar';
import Nav_link from './nav_link'
import Header from './header';
import Body from './body'
import Footer from './footer'

export default class App extends Component {
  render() {
    return (
      <div className='app'>
      {Navbar()} 
      <Header />
      <h2>ABOUT ME</h2>
      <Body />
      {Footer()}
      </div>
    );
  }
}
