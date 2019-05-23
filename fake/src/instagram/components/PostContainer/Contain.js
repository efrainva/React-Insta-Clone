import React from 'react';
import Comments from '../CommentSection/Comments';
import Commentfun from '../CommentSection/Commentfun';


class Contain extends React.Component{
  constructor(props){
    super(props)
    this.state={// text:''
      text:""
    }
    
  }
//     changed = (e) => {
//       e.preventDefault();
//       this.setState({

//         texts:[
//           ...this.state.texts,
//             {text: this.state.text}
//         ]
//       });
//     };
//   changing = (e) => {
//     console.log(e.target.value);
//     this.setState({ [e.target.name]: e.target.value });
//   };

  addText = (e,stuff) => {
    e.preventDefault();
    const newT={
      text:stuff
    }
    this.setState({
      text:[...this.state.text,newT]
    })
  }

  // const Contain =(props) =>{
    render(){
    return (
      
      <div>
      {/* {console.log(this.props.Item.comments.map(i=>i.text),this.state.text)} */}
      
        <div>  

          <img src={this.props.Item.thumbnailUrl} alt='thumbnail'/>
          <p>{this.props.Item.username}</p>
        </div>
          <img src={this.props.Item.imageUrl} alt='post'/>
        <div>
          <p>
            {this.props.Item.likes}
          </p>

          <p>
            {this.props.Item.timestamp}
          </p>

          <p>{this.props.Item.comments.map((sec,key)=>{ return <Comments Come={sec} key={key}/>})}</p>
            <Commentfun />
            {/* {console.log(this.state.texts.map(i=>{
              return i
            }))} */}
          </div>

      </div>
    )
        }
}


export default Contain;