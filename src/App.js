import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { Routes } from 'react-router-dom';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import LoadingBar from "react-top-loading-bar";


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      category: 'general',
      dateto: '2025-04-12',
      datefrom: '2025-04-11',
      api : process.env.REACT_APP_API_KEY
    };
  }
  state = {
    progress: 0,
  }
  setProgress = (progress) => {
    this.setState({ progress: progress });
  }
  handleEconomcis = () => {
    this.setState({ category: 'economics' });
  }
  handleGeneral = () => {
    this.setState({ category: 'general' });
  }
  handleSports = () => {
    this.setState({ category: 'sports' });
  }
  handlePolitical = () => {
    this.setState({ category: 'political' });
  }
  handleHealth = () => {
    this.setState({ category: 'health' });
  }
  handleEntertaiment = () => {
    this.setState({ category: 'entertainment' });
  }
  handleSetSearch = (msg) => {
    this.setState({ category: msg });
    console.log(msg);
  }
  
  
  render() {
    return (
      <div style={{backgroundColor: "#E7D3BB"}}>
        <Router>
        <Navbar 
        handleEconomcis={this.handleEconomcis}
        handleEntertaiment={this.handleEntertaiment}
        handleGeneral={this.handleGeneral} 
        handleHealth={this.handleHealth} 
        handlePolitical={this.handlePolitical} 
        handleSports={this.handleSports} 
        handleDate={this.handleDate}
        handleSetSearch={this.handleSetSearch} />
         <LoadingBar
        color="blue"
        progress={this.state.progress}
        height={3}/>
        <Routes>
        <Route path="/" element={<News setProgress={this.setProgress} api={this.state.api} category="general" />} />
        <Route path="/general" element={<News setProgress={this.setProgress} api={this.state.api} category="general" />} />
        <Route path="/sports" element={<News setProgress={this.setProgress} api={this.state.api} category="sports" />} />
        <Route path="/political" element={<News setProgress={this.setProgress} api={this.state.api} category="political" />} />
        <Route path="/economics" element={<News setProgress={this.setProgress} api={this.state.api} category="economics" />} />
        <Route path="/health" element={<News setProgress={this.setProgress} api={this.state.api} category="health" />} />
        <Route path="/entertainment" element={<News setProgress={this.setProgress} api={this.state.api} category="entertainment" />} />
        <Route path="/search" element={<News setProgress={this.setProgress} api={this.state.api} category={this.state.category} />} />
        </Routes>
        </Router>
      </div>
    )
  }
}



