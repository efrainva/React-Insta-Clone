import React from 'react';
import dummyData from '../../src/dummy-data';
import TopContain from './TopContain';
import MidContain from './MidContain';



class Post extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      data:dummyData,
      username:'',
      thumbnailUrl:'',
      imageUrl:'',
      likes:'',
      timestamp:'',
      comments:''
    }
  }

  render(){
    return ( 
    <div>top{this.state.data.map(item=>{
      return <TopContain Item={item}/>  
    })}

    mid
    {this.state.data.map(item=>{
      return <MidContain Item={item}/>  
    })}
    </div>

    )
  }
}
  


export default Post ;