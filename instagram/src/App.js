import React, { Component } from 'react';
import './App.css';
import instaData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';

class App extends Component {
  constructor() {
    super()
    this.state = {
      instaData: instaData,
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="Insta-Clone-App">React Insta Clone</h1>
        </header>
        <SearchBar />
        {/* <PostContainer instaData={instaData}/> */}
      </div>
    );
  }
}

export default App;
