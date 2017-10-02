// lib
import { Button,Input } from 'semantic-ui-react'
import React from 'react'


// components

 
// other


class Search extends React.Component {
  constructor() {
    super();
    this.state = {value: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSubmit(event) {
    console.log('A name was submitted: ' + this.state.value);
    event.preventDefault();
    const searchVal =this.state.value
    this.props.getData(searchVal)
    

  }






  change = e=> {
this.setState({
[e.target.name]:e.target.value  
})
  }

    
    render() {
        return (
            <div className="search">
  
   <form onSubmit={this.handleSubmit} >
   <Input name="value" onChange={e=>this.change(e)}  action={{ color: 'teal', labelPosition: 'left', icon: 'search', content: 'search' }} placeholder='Search...' />
        </form>


   
  


          </div>  
          
        )
    }
}

export default Search;

