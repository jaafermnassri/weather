
import React from 'react'
import './weathercard.css'

const WeatherCard = ({el}) => {
   console.log(el);
    
    
  return (
    <div>
        <div className="container">
  <div className="card card-1">
    <div id="demo" className="carousel slide" data-ride="carousel">
      {/* Indicators */}
      <ul className="carousel-indicators">
        <li data-target="#demo" data-slide-to={0} className="active" />
        <li data-target="#demo" data-slide-to={1} />
        <li data-target="#demo" data-slide-to={2} />
      </ul>
      {/* The slideshow */}
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="row">
            <div className="col-6">
              <div className="temp">{el.current&&el.current.temp_c}°C</div> 
              <div className="location">{el.location&&el.location.name}</div>
            </div>
            <div className="col-6 justify-content-right">
              <img className="img-fluid" src={el.current&&el.current.condition.icon} />
              
            </div>
            
          </div>
          <p>{el.current&&el.current.condition.text}</p>
        </div>
      </div>
    </div>
  </div>
  <div className="card card-2">
    
      {/* Indicators */}
      {/* <ul className="carousel-indicators">
        <li data-target="#demo" data-slide-to={0} />
        <li data-target="#demo" data-slide-to={1} className="active" />
        <li data-target="#demo" data-slide-to={2} />
      </ul> */}
      {/* The slideshow */}
      {/* <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="row">
            <div className="col">
              <div className="row row1">21°</div>
              <div className="row row2"><img className="img-fluid" src="https://img.icons8.com/ios/100/000000/sun.png" /></div>
              <div className="row row3">12:00</div>
              <div className="row row4">PM</div>
            </div>
            <div className="col">
              <div className="row row1">20°</div>
              <div className="row row2"><img className="img-fluid" src="https://img.icons8.com/ios/100/000000/sun.png" /></div>
              <div className="row row3">1:00</div>
              <div className="row row4">PM</div>
            </div>
            <div className="col">
              <div className="row row1">20°</div>
              <div className="row row2"><img className="img-fluid" src="https://img.icons8.com/windows/100/000000/cloud.png" /></div>
              <div className="row row3">2:00</div>
              <div className="row row4">PM</div>
            </div>
            <div className="col">
              <div className="row row1">19°</div>
              <div className="row row2"><img className="img-fluid" src="https://img.icons8.com/windows/100/000000/cloud.png" /></div>
              <div className="row row3">3:00</div>
              <div className="row row4">PM</div>
            </div>
            <div className="col">
              <div className="row row1">18°</div>
              <div className="row row2"><img className="img-fluid" src="https://img.icons8.com/cotton/64/000000/rain--v3.png" /></div>
              <div className="row row3">4:00</div>
              <div className="row row4">PM</div>
            </div>
          </div>
        </div>
      </div> */}
    
  </div>
  <div className="card card-3">
    <div id="demo" className="carousel slide" data-ride="carousel">
      {/* Indicators */}
      <ul className="carousel-indicators">
        <li data-target="#demo" data-slide-to={0} />
        <li data-target="#demo" data-slide-to={1} />
        <li data-target="#demo" data-slide-to={2} className="active" />
      </ul>
      {/* The slideshow */}
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="row">
            <div className="col">
              <div className="row row1">21°</div>
              <div className="row row2"><img className="img-fluid" src="https://img.icons8.com/ios/100/000000/sun.png" /></div>
              <div className="row row3">{el.forecast&&el.forecast.forecastday.value.date}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default WeatherCard