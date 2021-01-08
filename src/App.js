import React, { Component } from 'react'
import './App.css';
import Main from './Components/MainComponent.js'
import { BrowserRouter } from 'react-router-dom'
import {conigureStore} from './/redux/configureStore';
import {Provider} from 'react-redux'


const store = conigureStore();

class App extends Component {

  
  render() {
    
    return (
     <Provider store={store}>
       <BrowserRouter>
          <div className="App">
            <Main />
          </div>
        </BrowserRouter>
     </Provider>
        
    
        

    )
  }
}

export default App;

