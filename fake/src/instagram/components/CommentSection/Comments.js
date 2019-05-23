import React from 'react';

const Comments =(props) => {
  return(
    <div>
      <span>{props.Come.username}-</span>
      <span>{props.Come.text}</span>
    </div>
  )
}

export default Comments;