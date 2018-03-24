import React, { Component } from 'react';
import './App.css';
import Today from './Today/today'
import History from './History/history'

class App extends Component {
  render() {
    return (
      <div className="">
          <div className="topheader">
              <header className="container">
                  <nav className="navbar">
                      <div className="navbar-brand">
                          <span className="navbar-item">Pusher Currency</span>
                      </div>
                      <div className="navbar-end">
                          <a className="navbar-item" href="https://pusher.com" target="_blank" rel="noopener noreferrer">Pusher Currency</a>
                      </div>
                  </nav>
              </header>
          </div>

          <section className="results-section">
              <div className="container">
                  <h1>Pusher Currency is a realtime price information about<br></br> BTC, ETH and LTC.</h1>
              </div>
              <div className="results-section-inner">
                  <Today />

                  <History />
              </div>
          </section>
          
      </div>
    );
  }
}

export default App;