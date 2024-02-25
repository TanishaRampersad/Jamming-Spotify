import React from 'react';
import './App.css';
import './Playlist.module.css';
import './SearchBar.module.css';
import './SearchReults.module,css';
import { SearchBar } from "../SearchBar";
import { SearchResults } from "../SearchResults.module.css";
import { Playlist } from "../Playlist";

class App extends React.Component {
  render() {
      return (
        <div>
        <h1>
          Ja<span className="highlight">mmm</span>ing
        </h1>
        <div className="App">
          {/* <!-- Add a SearchBar component --> */}
          <SearchBar/>

          <div className="App-playlist">
            {/* <!-- Add a SearchResults component --> */}
            <SearchResults/>

            {/* <!-- Add a Playlist component --> */}
            <Playlist/>
          </div>
        </div>
      </div>
      );
    }
  }

export default App;
