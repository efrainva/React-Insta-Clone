
import React from 'react' ;

const Comment = (props) => {
  return(
    <div>
      <p>
        {props.Item.username}
        {props.Item.text}
      </p>
    </div>
  )
}



export default Comment;