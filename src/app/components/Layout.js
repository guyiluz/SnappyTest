// lib

Search
// components
import React from 'react'
import Nav from './Nav'
import Search from './Search'
import Chart from './Chart'
// other


class Layout extends React.Component {
  constructor(props){
super(props)
    this.state = {
        data: false,
        users:"",
        did:""
      };

  }

  componentDidMount() {
    console.log('Child did mount.');
    fetch( `https://api.github.com/search/users?q=guy`)
    .then((response)=>{
        if (!response.ok) {
        throw Error(response.statusText);
        }
        return response.json()
    }).then((data)=>{
        this.setState({
            did:data
        })
        console.log(this.state.did)
    }).catch((error)=> {
        console.log(error);
    });


  }

  

getData=(data)=>{
    if(data.length!==0)
    
    fetch( `http://api.openweathermap.org/data/2.5/weather?q=${data}&appid=40a2227f4f354415c67895e3a7709571&units=metric`)
    .then((response)=>{
        if (!response.ok) {
        throw Error(response.statusText);
        }
        return response.json()
    }).then((data)=>{
        this.setState({
            users:data
        })
        console.log(this.state.users)
    }).catch((error)=> {
        console.log(error);
    });


}






    
    render() {
        
        const {users, did} = this.state;


        return (
            <div className="layout">
                {this.state.data}
    
     <Search getData ={this.getData}/>
     <Chart users={users} did={did}/>
          </div>  
          
        )
    }
}

export default Layout;

