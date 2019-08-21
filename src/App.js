import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{
  constructor(){
    super()
    this.state = {
      numero: 0
    }
    this.handleRandom = this.handleRandom.bind(this);
    this.handleRandomType = this.handleRandomType.bind(this);
  }

  componentDidMount(){
    this.handleRandom();
  }

  //Llamar a la API del Backend
  callApi = async (a) => {
    let response;
    if(a === undefined){//Validar el parametro
      response = await fetch('/api/random');
    }else{
      response = await fetch(`/api/random/${a}`);
    }

    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);
    return body
  };

  //Definir el metodo handleRandom
  handleRandom(){
    this.callApi()
    .then(res => {
      this.setState({numero: numero})
    })
    .catch(err => console.log(err))
  }
  handleRandomType(type){
    this.callApi(type)
    .then(res => {
      let numero = res.number;
      this.setState({numero: numero});
    })
    .catch(err => console.log(err))
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
