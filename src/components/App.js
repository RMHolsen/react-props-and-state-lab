import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  // CALLBACK FUNCTION: OnChangeType
  onChangeType = ({target: value}) => {
    this.setState({filters: { ...this.state.filters, type: value}})
    // remember the format for changing states when the state is nested: topLevel { ...this.state.topLevel, 2ndLevel: newThing}
  }

  // CALLBACK FUNCTION: fetchPets
  fetchPets = () => {
    let url = '/api/pets'
    // we want this to be a let because we might want to add things to it: the optional query parameter 

    if (this.state.filters.type !== 'all') {
      url += `?type=${this.state.filters.type}`
    } // remember your formatting, it's on the readme

    fetch(url)
    .then(res => res.json())
    .then(
      pets => this.setState({pets: pets})
    )
  }

  // CALLBACK FUNCTION: onAdoptPet
  onAdoptPet = (petId) => {
    const pets = this.state.pets.map(pet => {
      return pet.id === petId ? { ...pet, isAdopted: true } : pet;
      // either return that the pet is adopted or return the pet object, depending. ternary operator! remember the name is ternary operator!
    })
    // we can use the const because we're just changing the array once and not expecting to do so repeatedly or in different circumstances 

    // and since we're returning that new array (map returns as a new array) as the variable pets
    this.setState({pets: pets})

  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.fetchPets}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
