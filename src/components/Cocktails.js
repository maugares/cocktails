import React, { Component } from 'react'

export default class Cocktails extends Component {

  renderCocktailList(cocktail) {
    console.log(cocktail)
    return <li key={cocktail.strCategory}>{cocktail.strCategory}</li>
  }


  render() {
    const { list } = this.props
    console.log(list)
    return (
      <div>
          {list ? <ul>{list.map(this.renderCocktailList)}</ul> : 'Loading...'}
      </div>
    )
  }
}