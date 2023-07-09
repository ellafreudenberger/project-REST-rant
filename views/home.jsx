const React = require('react')
const Def = require('./default')

function home () {
    return (
        <Def>
            <main>
                <h1>HOME</h1>
                <div>
                  <img src="./images/pancake.jpg" alt="Pancake"/>
                </div>
                 <div>
                 Photo by <a href="AUTHOR_LINK">Chad Montano</a> on <a href="UNSPLASH_LINK">Unsplash</a>
                  </div>

                <a href="/places">
                    <button className="btn-primary">Places Page</button>
                </a>
            </main>
        </Def>
    )
}

module.exports = home
