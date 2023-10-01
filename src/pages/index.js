import React from 'react'
import ReactTyped from "react-typed";
import Footer from '../components/footer/footer'
import Image from 'next/image'
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
  const [selectedPlace, setSelectedPlace] = React.useState("");

  React.useEffect(() => {
    getUserLocationGeoAPIfy().then((resp) => {
      setSelectedPlace(resp.state.name + ", " + resp.country.name);
      let coordinates = {
        lat: resp.location.latitude,
        lon: resp.location.longitude
      };
      updateWeatherDisplay(coordinates);
    })
  }, []);

  const updateWeatherDisplay = (coordinates, timezone) => {
    getCurrentWeather(coordinates).then((response) => {
      let weather = response;
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
    if (e.target.value != "") {
      const debouncedGetPlace = debounce(() => getPlace());
      debouncedGetPlace();
    } else {
      setPlacesSuggestions([]);
    }
  };

  const handleSelect = (value) => {
    updateWeatherDisplay(value.coordinates, value.timezone);
    setSelectedPlace(value.address_line);
  }

  return (
    <div style={weatherInfo ? weatherInfo.style : {}} className={styles.background}>
      {/* <p>{tagText && <ReactTyped strings={[tagText]} typeSpeed={40} />}</p> */}
      <div className={styles.inputs}>
        <input onChange={handleChange} className={styles.searchInput} type="search" value={place} placeholder="Search place..." />
        {placesSuggestions.length > 0 &&
          <ul className={styles.dropdown}>
            {placesSuggestions.map((value, index) => {
              return <li key={index} onClick={(e) => handleSelect(value)}>{value.address_line}</li>
            })}
          </ul>}
        {weatherInfo &&
          <div className={styles.card}>
            <p>{selectedPlace}</p>
            <div className={styles.weatherInfo}>
              <p>{weatherInfo.weatherDescription.description}</p>
            </div>
            <div className={styles.daylights}>
              <div><Image src="/images/sunrise.png" width="50" height="50" /><p>{weatherInfo.daylight.sunrise}</p></div>
              <div><Image src="/images/watch.png" width="50" height="50" /><p>{weatherInfo.daylight.time}</p></div>
              <div><Image src="/images/sunset.png" width="50" height="50" /><p>{weatherInfo.daylight.sunset}</p></div>
            </div>
          </div>
        }
      </div>
      {weatherInfo && <Footer accredit={weatherInfo.alt} />}
    </div>
  )
}
