import moment from "moment"

export default class Utils {
    getWeatherText(weather) {
        let weatherText = this.getRandomWeatherText(weather);
        return weatherText;
    }

    getDayLightTimes(sunriseUnix, sunsetUnix, datetime) {
        return {
            sunrise: moment.unix(sunriseUnix).format("hh:mm a"),
            sunset: moment.unix(sunsetUnix).format("hh:mm a"),
            time: moment(datetime).format("hh:mm a")
        }
    }

    getTimeOfDay(offset_STD) {
        let now = moment();
        if (offset_STD) {
            now = moment().utcOffset(offset_STD);
        }
        let hour = now.hour();
        let timeOfDay = "";
        if (hour >= 5 && hour < 12) {
            timeOfDay = 'morning';
        } else if (hour >= 12 && hour < 16) {
            timeOfDay = 'afternoon';
        } else if (hour >= 16 && hour < 19) {
            timeOfDay = 'evening';
        } else {
            timeOfDay = 'night'
        }
        return { timeOfDay: timeOfDay, datetime: now };
    }

    getWeatherInfo(weather, timezone) {
        let timeOfDay = timezone ? this.getTimeOfDay(timezone.offset_STD) : this.getTimeOfDay();
        let dt = timeOfDay.timeOfDay;
        let weatherInfo = {
            style: {
                backgroundImage: "",
                backgroundSize: "cover",
                color: ""
            },
            alt: ""
        };
        let weatherDescription = {
            description: weather.weather[0].description,
            temperature: weather.main.temp,
            humidity: weather.main.humidity,
            pressure: weather.main.pressure,
            speed: weather.wind.speed,
        }
        let daylight = this.getDayLightTimes(weather.sys.sunrise, weather.sys.sunset, timeOfDay.datetime);
        switch (weather.weather[0].main) {
            case 'Rain':
                if (dt == 'morning') {
                    weatherInfo = {
                        style: {
                            backgroundImage: "url('/images/rainy_morning.jpg')",
                            backgroundSize: "cover",
                            color: "white",
                        },
                        alt: <p>Photo by <a href="https://unsplash.com/it/@ak1?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Anna Atkins</a> on <a href="https://unsplash.com/photos/rNBaaxyeWWM?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></p>
                    }
                }
                else if (dt == 'afternoon') {
                    // rainy_afternoon image
                    weatherInfo = {
                        style: {
                            backgroundImage: "url('/images/rainy_afternoon.jpg')",
                            backgroundSize: "cover",
                            color: "white",
                        },
                        alt: <p>Photo by <a href="https://unsplash.com/fr/@livvie_bruce?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Liv Bruce</a> on <a href="https://unsplash.com/photos/8yt8kBuEqok?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></p>
                    }
                }
                else if (dt == 'evening') {
                    // rainy_evening image
                    weatherInfo = {
                        style: {
                            backgroundImage: "url('/images/rainy_evening.jpg')",
                            backgroundSize: "cover",
                            color: "white",
                        },
                        alt: <p>Photo by <a href="https://unsplash.com/ja/@myr0326?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">natsuki</a> on <a href="https://unsplash.com/photos/4DsowKunk84?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></p>
                    }
                }
                else {
                    // rainy_night image
                    weatherInfo = {
                        style: {
                            backgroundImage: "url('/images/rainy_night.jpg')",
                            backgroundSize: "cover",
                            color: "white",
                        },
                        alt: <p>Photo by <a href="https://unsplash.com/es/@zhenhappy?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">PAN XIAOZHEN</a> on <a href="https://unsplash.com/photos/OKlo0r3gBcQ?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></p>
                    }
                }
                break;
            case 'Clouds':
                if (dt == 'morning') {
                    // clouds_morning image
                    weatherInfo = {
                        style: {
                            backgroundImage: "url('/images/cloudy_morning.jpg')",
                            backgroundSize: "cover",
                            color: "white",
                        },
                        alt: <p>Photo by <a href="https://unsplash.com/@tadej?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Tadej Skofic</a> on <a href="https://unsplash.com/photos/VWxiaKn-lVc?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></p>
                    }
                }
                else if (dt == 'afternoon') {
                    // clouds_afternoon image
                    weatherInfo = {
                        style: {
                            backgroundImage: "url('/images/cloudy_afternoon.jpg')",
                            backgroundSize: "cover",
                            color: "black",
                        },
                        alt: <p>Photo by <a href="https://unsplash.com/de/@carminesavarese?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Carmine Savarese</a> on <a href="https://unsplash.com/images/nature/cloud?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></p>
                    }
                }
                else if (dt == 'evening') {
                    // clouds_evening image
                    weatherInfo = {
                        style: {
                            backgroundImage: "url('/images/cloudy_evening.jpg')",
                            backgroundSize: "cover",
                            color: "white",
                        },
                        alt: <p>Photo by <a href="https://unsplash.com/@redreamer?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Wendy Bandurski-Miller</a> on <a href="https://unsplash.com/images/nature/cloud?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></p>
                    }
                }
                else {
                    // clouds_night image
                    weatherInfo = {
                        style: {
                            backgroundImage: "url('/images/cloudy_night.jpg')",
                            backgroundSize: "cover",
                            color: "white",
                        },
                        alt: <p>Photo by <a href="https://unsplash.com/@magnusostberg?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Magnus Östberg</a> on <a href="https://unsplash.com/photos/YKzzRSRCOWQ?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></p>
                    }
                }
                break;
            case 'Clear':
                if (dt == 'morning') {
                    // clear_morning image
                    weatherInfo = {
                        style: {
                            backgroundImage: "url('/images/clear_morning.jpg')",
                            backgroundSize: "cover",
                            color: "",
                        },
                        alt: <p>Photo by <a href="https://unsplash.com/@adriel?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Adriel Kloppenburg</a> on <a href="https://unsplash.com/photos/xP-CAEWg4RI?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></p>
                    }
                }
                else if (dt == 'afternoon') {
                    // clear_afternoon image
                    weatherInfo = {
                        style: {
                            backgroundImage: "url('/images/clear_afternoon.jpg')",
                            backgroundSize: "cover",
                            color: "black",
                        },
                        alt: <p>Photo by <a href="https://unsplash.com/@dianealkier?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Diane Alkier</a> on <a href="https://unsplash.com/photos/JkEqjCyLLUY?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></p>
                    }
                }
                else if (dt == 'evening') {
                    // clear_evening image
                    weatherInfo = {
                        style: {
                            backgroundImage: "url('/images/clear_evening.jpg')",
                            backgroundSize: "cover",
                            color: "white",
                        },
                        alt: <p>Photo by <a href="https://unsplash.com/@ahmetozer?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">ahmet engineer</a> on <a href="https://unsplash.com/photos/G2HcT8B6yyg?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></p>
                    }
                }
                else {
                    // clear_night image
                    weatherInfo = {
                        style: {
                            backgroundImage: "url('/images/clear_night.jpg')",
                            backgroundSize: "cover",
                            color: "white",
                        },
                        alt: <p>Photo by <a href="https://unsplash.com/@nevenkrcmarek?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Neven Krcmarek</a> on <a href="https://unsplash.com/photos/3ym-ev0Pe58?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></p>
                    }
                }
                break;
            default:
                if (dt == 'morning') {
                    // normal_morning image
                    weatherInfo = {
                        style: {
                            backgroundImage: "url('/images/normal_morning.jpg')",
                            backgroundSize: "cover",
                            color: "black",
                        },
                        alt: <p>Photo by <a href="https://unsplash.com/@davealmine?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Dawid Zawiła</a> on <a href="https://unsplash.com/photos/-G3rw6Y02D0?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></p>
                    }
                }
                else if (dt == 'afternoon') {
                    // normal_afternoon image
                    weatherInfo = {
                        style: {
                            backgroundImage: "url('/images/normal_afternoon.jpg')",
                            backgroundSize: "cover",
                            color: "black",
                        },
                        alt: <p>Photo by <a href="https://unsplash.com/@_nickwright_?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Nick Wright</a> on <a href="https://unsplash.com/photos/d1Zx5Q6Ep3k?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></p>
                    }
                }
                else if (dt == 'evening') {
                    // normal_evening image
                    weatherInfo = {
                        style: {
                            backgroundImage: "url('/images/normal_evening.jpg')",
                            backgroundSize: "cover",
                            color: "white",
                        },
                        alt: <p>Photo by <a href="https://unsplash.com/@thezenoeffect?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Shyam</a> on <a href="https://unsplash.com/photos/mhKKPSzSkE8?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></p>
                    }
                }
                else {
                    // normal_night image
                    weatherInfo = {
                        style: {
                            backgroundImage: "url('/images/normal_night.jpg')",
                            backgroundSize: "cover",
                            color: "white",
                        },
                        alt: <p>Photo by <a href="https://unsplash.com/@straz?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jim Strasma</a> on <a href="https://unsplash.com/photos/byEklXCLOyA?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></p>
                    }
                }
        }
        weatherInfo.daylight = daylight;
        weatherInfo.weatherDescription = weatherDescription;
        return weatherInfo;
    }

    getRandomWeatherText(weatherState) {
        let maxLength = 3;
        let randomText = "";
        let rainTexts = ["The sound of rain is so soothing, it's the perfect day for a nap.",
            "Rainy days are a great excuse to wear your favorite cozy sweater.",
            "Embrace the rain, it's nature's way of cleansing and refreshing the world."];
        let cloudTexts = ["A cloudy day is a perfect day to cuddle up with a good book!",
            "Don't let the clouds get you down, it's still a great day to be alive.",
            "The cloudy sky provides the perfect lighting for a peaceful and cozy day indoors."];
        let clearTexts = ["A clear blue sky is a perfect backdrop for a day full of adventure.",
            "The clear skies are a reminder of the beauty that surrounds us every day.",
            "Enjoy the clear skies and soak up the sunshine, it's a perfect day to be outside."];
        let normalTexts = ["Remember to take care of yourself today, both physically and mentally. Your well-being is important.",
            "No matter what the day brings, let's stay focused on our goals and keep moving forward towards them.",
            "Today is a new day, full of opportunities and possibilities. Let's make the most of it!"];
        let randomIndex = Math.floor(Math.random() * maxLength);
        switch (weatherState) {
            case 'Rain':
                randomText = rainTexts[randomIndex];
                break;
            case 'Clouds':
                randomText = cloudTexts[randomIndex];
                break;
            case 'Clear':
                randomText = clearTexts[randomIndex];
                break;
            default:
                randomIndex = normalTexts[randomIndex];
        }
        return randomText;
    }
}