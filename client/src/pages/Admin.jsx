import React from 'react'

export default function Admin() {

// const [movieName, setMovieName] = useState('')




  return (
    <div className='main-container'>
        <h1>ADMIN DASHBOARD</h1>
        <div className='insert-section'>
            <h1>Insert Movie into DATABASE</h1>

            <div className="form">

                <h3>Movie Name </h3>
                <input type="text" name="movieName"/>

                <h3>Genre </h3>
                <input type="text" name="genre"/>

                <h3>Director </h3>
                <input type="text" name="director"/>

                <h3>Actor </h3>
                <input type="text" name="actor"/>

                <h3>Release Date </h3>
                <input type="date" name="releaseDate"/>

                <h3>Plot </h3>
                <input type="text" name="plot"/>

                <h3>Trailer </h3>
                <input type="text" name="trailer"/>

                <h3>Movie Image </h3>
                <input type="text" name="movieImg"/>
            </div>
        </div>

        
    </div>
  )
}
