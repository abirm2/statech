import React from 'react'
import './App.css';
import Youma from './yuma.jpg'


class App extends React.Component  {
 // constructor(){
   // super()
   
   state={Person :[{fullName:'abir'},{bio:'great one '}, {imgSrc:Youma}, {profession:'developer'}],
    toggle:false,count:0}

   handletoggle=()=>{this.setState({ toggle: !this.state.toggle  })}
  
    
   componentDidMount() {
    this.timerID = setInterval(
      () => 
      
       this.setState({count: this.state.count+1})  ,1000 );}
     
     
  render (){
  
  return (
   <div>

  
      <button   onClick={this.handletoggle} >    { this.state.toggle ? "hide" :"show" }    </button>
      {this.state.toggle  ?   
      
      <>
     { this.state.Person.map(el=> <div>
          <h1> {el.fullName}</h1>
          <h1>{el.bio}</h1>
          <img   src={el.imgSrc } />
          <h1>{el.profession}</h1>
          
          </div>)}
          
          <h1>{this.state.count}</h1>
          </>
          
          :null }  

    </div>
    
  );
     }
}
export default App;
