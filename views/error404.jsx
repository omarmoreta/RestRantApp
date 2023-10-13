const React = require('react')
const Def = require('./default')

function error404 () {
  return (
  <Def>
    <main>
      <h1>404: PAGE NOT FOUND</h1>
      <p>Oops, sorry, we can't find this page, but we found a Pup!</p>
      <div>
        <img src="/images/dog.jpg" alt="a cute puppy with this tongue out" />
      </div>
      <div className='credit'>
        Photo by <a href="https://unsplash.com/@escape_your_mind?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Michael G</a> on <a href="https://unsplash.com/photos/GFPrsgfQSPM?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
      </div>
    </main>
  </Def>
  )
  }
  

module.exports = error404
