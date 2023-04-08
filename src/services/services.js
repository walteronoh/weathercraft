const sendMailService = (body) => {
    return fetch(process.env.NEXT_PUBLIC_SEND_EMAIL_URL, { method: "post", headers: { "Content-Type": "Application/Json" }, body: JSON.stringify(body) });
}

const getUserLocation = async () => {
    let url = "http://ip-api.com/json/";
    return fetch(url).then(response => response.json());
}

const getCurrentWeather = async () => {
    let url = process.env.NEXT_PUBLIC_WEATHER_URL + "?lat=-1.2841&lon=36.8155&appid=" + process.env.NEXT_PUBLIC_WEATHER_API_KEY;
    return fetch(url).then((response) => response.json());
}

export { sendMailService, getUserLocation, getCurrentWeather }