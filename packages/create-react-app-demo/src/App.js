import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    
  }
  componentDidMount(){
    var xmlhttprequest = null;
    if(window.XMLHttpRequest){
        xmlhttprequest=new XMLHttpRequest();
        if(xmlhttprequest.overrideMimeType){
            xmlhttprequest.overrideMimeType("text/xml");
        }
    }else if(window.ActiveXObject){
        
        var activeName = ['MSXML2.XMLHTTP.5.0', 'MSXML2.XMLHTTP.4.0', 'MSXML2.XMLHTTP.3.0', 'MSXML2.XMLHTTP', 'Microsoft.XMLHTTP'];
        for(var i=0;i<activeName.length;i++){
            try{
                xmlhttprequest=new window.ActiveXObject(activeName[i]);
                break;
            }catch(e){
                alert("创建XMLHttpRequest对象失败");
            }
        }
    }
    console.log('window.ActiveXObject->', window.ActiveXObject);
    
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
