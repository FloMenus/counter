import React from 'react'
import Counter from './components/Counter'
import './App.css'

class App extends React.Component {
  constructor() {
    super()
    
    this.state = {
      value: 0
    }
  }

  handleClickMinus = () => {
    if (this.state.value > 0) {
    this.setState({value: this.state.value -1})
    }
  }
  handleClickPlus = () => {
    this.setState({value: this.state.value +1})
  }


  render() {
    return (
      <div className="App">
        <h1>Counter</h1>
        <div className="Counter-wrapper">
          <Counter count={this.state.value} increment={this.handleClickPlus} substract ={this.handleClickMinus}/>
          {console.log (Counter)}
        </div>
      </div>
    )
  }
}

export default App



