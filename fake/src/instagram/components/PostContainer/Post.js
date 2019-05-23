import React from 'react';
import dummyData from '../../src/dummy-data';
import Contain from './Contain';

class Post extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      data:[]
    }
  }

  componentDidMount () {
    this.setState({data: dummyData})
  }



  render(){
    return ( 
    <div>top

      {this.state.data.map((item,i)=>{
        return  <Contain Item={item} key={i} />
      })}

    </div>

    )
  }
}

export default Post ;