// lib


// components
import React from 'react'

import GetGift from './GetGift'
import Admin from './Admin'

// other


class Layout extends React.Component {
  constructor(props){
super(props)
    this.state = {
        giftData: "",
        rend:false
       
      };

  }

  componentDidMount(){
    fetch('https://snappyser.herokuapp.com/api', {                    
                        }).then(res => res.json())
                        .then((data)=>{
                           
                            this.setState({
                                giftData:data
                               
    
                            })
                            console.log(data)
                          
                        })
  
                    }


  sendData=(data)=>{
    fetch('http://localhost:8080/api', {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }, 
        body:data

    })
}

    
    render() {
        
      
const {giftData, rend} = this.state
console.log(giftData)
        return (
            <div className="layout">
            
    
     <GetGift sendData={this.sendData}/>
     <Admin giftData={giftData}/>
 
   
          </div>  
          
        )
    }
}

export default Layout;

