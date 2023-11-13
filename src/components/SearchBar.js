import React from 'react'

function SearchBar ({HandleInput}) {
  return (
    <div>
        <input type='text' placeholder='Search Comment'/>
        <button onSubmit={HandleInput}>Submit</button>
    </div>
  )
}
 export default SearchBar