import React from 'react'
import ReactTyped from "react-typed";
import '@geoapify/geocoder-autocomplete/styles/minimal.css'
import Footer from '../components/footer/footer'
// import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { getCurrentWeather, getPlaceGeoAPIfy, getUserLocationGeoAPIfy } from '../services/services'
import Utils from '../utils/util'
let timer;

export default function Home() {
  const utils = new Utils();
  const [weatherInfo, setWeatherInfo] = React.useState(null);
  const [tagText, setTagText] = React.useState("");
  const [place, setPlace] = React.useState("");
  const [placesSuggestions, setPlacesSuggestions] = React.useState([]);

  React.useEffect(() => {
    getUserLocationGeoAPIfy().then((resp) => {
      let coordinates = {
        lat: resp.location.latitude,
        lon: resp.location.longitude
      };
      updateWeatherDisplay(coordinates);
    })
  }, []);

  const updateWeatherDisplay = (coordinates, timezone) => {
    getCurrentWeather(coordinates).then((response) => {
      let weather = response.weather[0].main;
      setWeatherInfo(utils.getWeatherInfo(weather, timezone));
      setTagText(utils.getWeatherText(weather));
    });
  };

  const getPlace = () => {
    if (place.length >= 3) {
      getPlaceGeoAPIfy(place).then((response) => {
        let address = [];
        response.features.map((value) => {
          address.push({
            address_line: value.properties.address_line1 + ", " + value.properties.address_line2,
            timezone: {
              offset_STD: value.properties.timezone.offset_STD
            },
            coordinates: {
              lat: value.properties.lat,
              lon: value.properties.lon
            }
          });
        });
        setPlacesSuggestions(address);
      });
    }
  };

  const debounce = (func) => {
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => { func.apply(this, args); }, 1000)
    };
  }

  const handleChange = (e) => {
    setPlace(e.target.value);
    const debouncedGetPlace = debounce(() => getPlace());
    debouncedGetPlace();
  };

  return (
    <div style={weatherInfo ? weatherInfo.style : {}} className={styles.background}>
      {/* <p>{tagText && <ReactTyped strings={[tagText]} typeSpeed={40} />}</p> */}
      <div className={styles.inputs}>
        <input onChange={handleChange} className={styles.searchInput} type="search" value={place} placeholder="Search place..." />
        {placesSuggestions.length > 0 &&
          <ul className={styles.dropdown}>
            {placesSuggestions.map((value, index) => {
              return <li key={index} onClick={(e) => updateWeatherDisplay(value.coordinates, value.timezone)}>{value.address_line}</li>
            })}
          </ul>}
      </div>
      {weatherInfo && <Footer accredit={weatherInfo.alt} />}
    </div>
  )
}
