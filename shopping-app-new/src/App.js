// Will Jantscher and Rex Ayers

// npx create-react-app shopping-app

// https://github.com/willjantscher/Docker_shopping_app_new.git
// to run: npm start in shopping-app-new


// to run with docker
// docker run -p 3001:3000 willjantscher/shopping-app-new:latest      

import './App.css';
import React from 'react'
import List from './list'
import AddItem from './addItem'
import ShoppingCart from './shoppingCart'



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
      cart:[{}],
    }
  }


handleAddToCart = (e) => {
  // console.log('adding to cart')
  // console.log(e.target.id)
}

handleRemoveItem = (e) => {
  // console.log('removing item')
  let tempItem = this.state.list[e.target.id];
  console.log(tempItem)
  let tempList = this.state.list.filter((item) => item !== tempItem);
  console.log(tempList)
  this.setState({list: tempList});
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
          <ShoppingCart cart={this.state.cart} />
          <br></br>
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
