import React from 'react';
import dummyData from '../../src/dummy-data';


import Comment from './Comment';


// super(props)
// this.state = {
//   data:dummyData,
//   comments:({
//     username:'',
//     text:''
//   })
// }

class Contain extends React.Component{
  constructor(props){
    super(props)
      this.state = {
        comments:({
          username:'',
          text:''
        })
  }
  }

  render(props){
    return (
      <div>
        <div>  
          <img src={props.Item.thumbnailUrl} alt='thumbnail'/>
          <p>{props.Item.username}</p>
        </div>
        <img src={props.Item.imageUrl} alt='post'/>
        <div>
          <p>
            {props.Item.likes}
          </p>

          <p>
            {props.Item.timestamp}
          </p>

          <p>
            {this.state.comments.map(section=>{
              return <Comment Item={section}/>
            })}
          </p> 
            
        </div>

      </div>
    )
  }
}

export default Contain;