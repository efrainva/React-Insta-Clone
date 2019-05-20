import React from 'react' ;

const MidContain = (props) => {
  return(
    <div>
      <p>
        {props.Item.likes}
      </p>
        
      {props.Item.timestamp}

    </div>
  )
}


export default MidContain;