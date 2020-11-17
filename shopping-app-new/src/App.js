// Will Jantscher and Rex Ayers
// npm init
// npm install
// npm install express
// npx create-react-app shopping-app

// https://github.com/willjantscher/Docker_Shopping_app.git
// to run: npm start in /src cd


import './App.css';
import React from 'react'
import List from './list'
import AddItem from './addItem'



class App extends React.Component  {
  constructor(props) {
    super(props)
    this.state = {
      list: [{
        name: 'banannas',
        qty: 4,
        unit: 'bunch',
      }], //item, qty, unit
      tempItem: [],
    }
  }


handleAddToCart = (e) => {
  console.log('adding to cart')
  console.log(e.target)
}

handleRemoveItem = (e) => {
  console.log('removing item')
}

handleInputChange = (e) => {
  let item = [];
  item = this.state.tempItem;
  item[e.target.id] = e.target.value;
  this.setState({tempItem: item})
  //console.log(this.state.tempItem)
}

handleAddItem = (e) => {
  e.preventDefault();
  let tempList = this.state.list;
  tempList.push(
    {
      name: this.state.tempItem[0],
      qty: this.state.tempItem[1],
      unit: this.state.tempItem[2]
    }
  )
  this.setState({list: tempList})
}


  render () {
    return (
      <div className="App">
      <header className="App-header">
        <p>
          <List
            list={this.state.list}
            onAddToCart={this.handleAddToCart}
            onRemoveItem={this.handleRemoveItem}
          />
          <AddItem
            onInputChange={this.handleInputChange}
            onAddItem={this.handleAddItem}
          />
        </p>
      </header>
    </div>
    )
  }
}

export default App;
