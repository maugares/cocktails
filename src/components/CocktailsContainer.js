import React, { Component } from 'react'
import Cocktails from './Cocktails'
import * as request from 'superagent'

export default class CocktailsContainer extends Component {
  state = { cocktail: null }

  componentDidMount() {
    request
      .get('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list')
      .then(response => this.getList(response.body.drinks))
      .catch(console.error)
  }

  getList(cocktails) {
    this.setState({
      cocktail: cocktails
    })
  }

  render() {
    return (
      <div>
        <Cocktails list={this.state.cocktail}/>
      </div>
    )
  }
}
