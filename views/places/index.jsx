const React = require('react');
const Def = require('../default')

function Index (data) {
    let placesFormatted = data.places.map((place, index) => {
        return (
            <div className='col' key={index}>
                <h2>{place.name}</h2>
                <p className='text-center'>
                    { place.cuisines }
                </p>
                <img className='placesImg' src={place.pic} alt={place.name}/>
                <p className='test-center'>
                    Located in { place.city }, { place.state }
                </p>
            </div>
        )
    })
    return (
      <Def>
          <div>
              <h1>PLACES INDEX PAGE</h1>
              <div className='row'>
                { placesFormatted }
              </div>
          </div>
      </Def>
    )
}

module.exports = Index;  