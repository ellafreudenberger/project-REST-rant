const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
          <main>
            <h1>{ data.place.name }</h1>
            <div classname="Rating Section"> 
            <h2> Rating </h2>
            <h3>Currently Unrated </h3>  
            </div>
            <div classname="Comments Section"> 
            <h2> Comments </h2>
            <h3> No comments yet!</h3>
            </div>
            <a href={`/places/${data.id}/edit`} className="btn btn-warning"> 
            Edit
            </a>     
            <form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
            <button type="submit" className="btn btn-danger">
            Delete
            </button>
            </form> 
          </main>
        </Def>
    )
} 



module.exports = show

