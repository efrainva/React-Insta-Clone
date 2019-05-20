import React from 'react';
import './App.css';
import Post from './instagram/components/PostContainer/Post';


function App() {
  return (
    <div className="App">
      <div> post
      <Post />
      <img src='https://tk-assets.lambdaschool.com/c432f179-8bd7-4758-959d-d88a21f96bca_37105899_432228420518610_5035444036064772096_n.jpg'/>
      </div>
    </div>
  );
}

export default App;
