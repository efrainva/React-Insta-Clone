import React from 'react';

class Commentfun extends React.Component {
    constructor(props){
    super(props)
        this.state={
            text:''
        }
    }
    handleChages = e => {
        this.setState({ [e.target.name]: e.target.value });
      };
    
      sub = (e, item) => {
        e.preventDefault();
        const newtext = {
          text:item
        };
        this.setState({
          text: [...this.state.text,{ text:newtext}]
        });
      };
    

    render(){
    return(
        <div>
        {console.log(this.state.newtext)}
        {this.state.newtext}
        <form onSubmit={this.sub}>

            
            <input
                value={this.props.text}
                onChange={this.props.handleChages}
                
                name="text"
                />
        <button onClick={this.sub}>add</button>
        </form>
                </div>
    )
    }
};

export default Commentfun;