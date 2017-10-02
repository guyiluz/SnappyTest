// lib
import {Table, List} from 'semantic-ui-react'
// import Slider, { Range } from 'rc-slider';
import React from 'react'
// components

// other




class Chart extends React.Component {
  
rednerUsers=()=>{
    const uData =this.props.users 
   if(typeof uData!=='object'){
       return ''
   }else
 console.log(uData)
 
   
  
   




   
  
return (
    <List>
    <List.Item>
      <List.Icon name='thermometer empty' />
      <List.Content>{uData.main.temp}</List.Content>
    </List.Item>
    <List.Item>
      <List.Icon name='marker' />
      <List.Content>{uData.name}</List.Content>
    </List.Item>
    <List.Item>
      <List.Icon name='find' />
      <List.Content>
        {uData.weather["0"].description}
      </List.Content>
    </List.Item>
    <List.Item>
      <List.Icon name='linkify' />
      <List.Content>
        <a href='http://www.semantic-ui.com'>semantic-ui.com</a>
      </List.Content>
    </List.Item>
  </List>


)}

 




    
    render() {
     
        return (
            <div className="chart">
     {this.rednerUsers()}
          </div>  
          
        )
    }
}

export default Chart;

