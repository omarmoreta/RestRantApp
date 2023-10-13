const React = require('react');
const Def = require('./default')

function Home () {
    return (
        <Def>
            <main>
                <h1>HOME</h1>
                <div>
                    <img id='homeImg' src="/images/tacos.jpg" alt="a plate of tacos on a table" />
                </div> 
                <div className='text-center'>
                    Photo by <a href="https://unsplash.com/@edgarraw?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Edgar Castrejon</a> on <a href="https://unsplash.com/photos/J04BD4ysoh8?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
                </div>               
                <a href="/places">
                    <button className="btn btn-primary">Places Page</button>
                </a>
            </main>
        </Def>
    )
   
}

module.exports = Home;