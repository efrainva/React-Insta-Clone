import React from 'react';
import dummyData from '../../src/dummy-data';
import Contain from './Contain';




class Post extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      data:dummyData,
      username:'',
      thumbnailUrl:'',
      imageUrl:'',
      likes:'',
      timestamp:''
    }
  }

  render(){
    return ( 
    <div>top
    {this.state.data.map(item=>{
      return <Contain Item={item} key={item}/>  
    })}


    </div>

    )
  }
}
  


export default Post ;