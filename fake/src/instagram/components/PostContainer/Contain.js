import React from 'react';

const Contain = ( props ) =>{
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
      {props.Item.map(section=>{
        return
      })}
      

      </div>

    </div>
  )
}

export default Contain;