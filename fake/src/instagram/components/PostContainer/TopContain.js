import React from 'react';

const TopContain = ( props ) =>{
  return (
    <div>
      <img src={props.Item.thumbnailUrl} alt='thumbnail'/>

      <p>{props.Item.username}</p>
    </div>
  )
}

export default TopContain;