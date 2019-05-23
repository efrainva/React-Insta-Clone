import React from 'react';
import './App.css';
import Post from './instagram/components/PostContainer/Post';
import Search from './instagram/components/PostContainer/Search';



class App extends React.Component {
  constructor(props){
    super()
  }

  // componentDidMount(){}

  render(){
  return (
    <div className="App">
      <div> post
      <Search />
      <Post />
      
      </div>
    </div>
  );
  }
}

export default App;
