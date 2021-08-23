import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    const petCards = this.props.pets.map(pet => (
      <Pet pet={pet} key={pet.id} onAdoptPet={this.props.onAdoptPet} />
      // calling the Pet object from Pet.js
      // the key for the Pet object is the pet id from the pets array passed into ... thingie. from this.prop.pets
      // all of this becomes the array petCards, an array of rendering for pets in the form of individual cards
    ));
    return <div className="ui cards">{petCards}</div>
    // then call the array so it actually gets displayed
  }
}

export default PetBrowser
