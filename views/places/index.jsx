const React = require('react');
const Def = require('../default')

function Index (data) {
    let placesFormatted = data.places.map((place) => {
        return (
            <div>
                <h2>{place.name}</h2>
                <img src={place.pic} alt={place.name}/>
            </div>
        )
    })
    return (
      <Def>
          <div>
              <h1>PLACES INDEX PAGE</h1>
              { placesFormatted }
          </div>
      </Def>
    )
}

module.exports = Index;  