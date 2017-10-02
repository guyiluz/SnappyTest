// lib


// components
import React from 'react'

import GetGift from './GetGift'

// other


class Layout extends React.Component {
  constructor(props){
super(props)
    this.state = {
        giftData: {}
       
      };

  }

  

  sendData=(data)=>{
    fetch('http://localhost:8080/api', {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }, 
        body:data

    }).then(res => res.json())
    .then((data)=>{
        this.setState({
            giftData:data

        })

      
    })
}

    
    render() {
        
      


        return (
            <div className="layout">
            
    
     <GetGift sendData={this.sendData}/>
   
          </div>  
          
        )
    }
}

export default Layout;

