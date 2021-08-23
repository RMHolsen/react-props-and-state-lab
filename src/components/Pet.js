import React from 'react'

class Pet extends React.Component {
  render() {
    return (
      // wtf is this {/*'♀' OR '♂' */}
      // OH
      // still seems unnecessary
      <div className="card">
        <div className="content">
          <a className="header">
          {this.props.pet.name}
          {this.props.pet.gender === 'female' ? '♀' : '♂' }
          </a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {this.props.pet.isAdopted ? (<button className="ui disabled button">Already adopted</button>) : (
            <button onClick={() => this.props.onAdoptPet(this.props.pet.id)} className="ui primary button">Adopt pet</button>
          )}
        </div>
      </div>
    )
    // still hate that I can't comment directly under the various tags, even with an HTML-style comment
    // the basic information is pretty easy, this.props.[some attribute goes here] via interpolation
    // the extra content is tricky
    // not sure how to format it NOT as a ternary operator but at least I can remember the name for a ternary operator
    // so it's this.props.pet.isAdopted ? and then if true, the button is disabled and flagged with 'already adopted' so the code stays as is
    // and if false then there should be a button to adopt the pet with the click function going to the onAdoptPet function that we passed in in the App component
    // remember that onAdoptPet is a function, so treat it like an arrow function and feed it the pet object id
    // DO NOT FORGET THE WHOLE TERNANRY OPERATOR GOES INTO THE CURLY BRACES

  }
}

export default Pet
