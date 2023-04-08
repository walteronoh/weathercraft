const sendMailService = (body) => {
    return fetch(process.env.NEXT_PUBLIC_SEND_EMAIL_URL, { method: "post", headers: { "Content-Type": "Application/Json" }, body: JSON.stringify(body) });
}

const getUserLocation = async () => {
    let url = "http://ip-api.com/json/";
    return fetch(url).then(response => response.json());
}

const getCurrentWeather = async (coordinates) => {
    let url = process.env.NEXT_PUBLIC_WEATHER_URL + `?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=` + process.env.NEXT_PUBLIC_WEATHER_API_KEY;
    return fetch(url).then((response) => response.json());
}

const getUserLocationGeoAPIfy = async () => {
    let url = "https://api.geoapify.com/v1/ipinfo?&apiKey=" + process.env.NEXT_PUBLIC_GEOAPIFY_API_KEY;
    return fetch(url).then((response) => response.json());
}

export { sendMailService, getUserLocation, getCurrentWeather, getUserLocationGeoAPIfy }