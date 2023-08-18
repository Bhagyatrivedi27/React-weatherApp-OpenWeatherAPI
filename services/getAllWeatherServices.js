import {DateTime} from 'luxon'

const API_KEY = 'b6e32a2b95f7a1511dd2db90ebae2741';
const BASE_URL = "https://api.openweathermap.org/data/2.5"

const fetchAllWeatherInfo = (infoType, searchParams) => {
    const url = new URL(BASE_URL + "/" + infoType);
    url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });
  
    return fetch(url).then((res) => res.json());
  };
  
  const currentWeather = (data) => {
    const {
      coord: { lat, lon },
      main: { temp,  temp_min, temp_max},
      name,
      dt,
      sys: { country },
      weather,
    } = data;
  
    const { main: details, icon } = weather[0];
  
    return {
      lat,
      lon,
      temp,
      temp_min,
      temp_max,
      name,
      dt,
      country,
      details,
      icon,
    };
  };
  
  
  const convertForecastedWeather1 = (data) => {
    let { timezone, daily, hourly} = data;
    daily = daily.slice(1, 6).map((d) => {
      return {
        title: ConvertToLocalTime(d.dt, timezone, "ccc"),
        temp: d.temp.day,
        icon: d.weather[0].icon,
      };
    });
    

    hourly = hourly.slice(1,6).map((d) => {
  
      return {
        title: ConvertToLocalTime(d.dt, timezone, "hh:mm a"),
        temp: d.temp,
        icon: d.weather[0].icon,
      };

    });
  
    return { timezone, daily, hourly};
  };
  const convertForecastedWeather2 = (data) => {
    let { timezone, daily, hourly} = data;
    daily = daily.slice(1, 6).map((d) => {
      return {
        title: ConvertToLocalTime(d.dt, timezone, "ccc"),
        temp: d.temp.day,
        icon: d.weather[0].icon,
      };
    });
    

    hourly = hourly.slice(11,16).map((d) => {
  
      return {
        title: ConvertToLocalTime(d.dt, timezone, "hh:mm a"),
        temp: d.temp,
        icon: d.weather[0].icon,
      };

    });
  
    return { timezone, daily, hourly};
  };

  const convertForecastedWeather3 = (data) => {
    let { timezone, daily, hourly} = data;
    daily = daily.slice(1, 6).map((d) => {
      return {
        title: ConvertToLocalTime(d.dt, timezone, "ccc"),
        temp: d.temp.day,
        icon: d.weather[0].icon,
      };
    });
    

    hourly = hourly.slice(20,25).map((d) => {
  
      return {
        title: ConvertToLocalTime(d.dt, timezone, "hh:mm a"),
        temp: d.temp,
        icon: d.weather[0].icon,
      };

    });
  
    return { timezone, daily, hourly};
  };
  const convertForecastedWeather4 = (data) => {
    let { timezone, daily, hourly} = data;
    daily = daily.slice(1,6).map((d) => {
      return {
        title: ConvertToLocalTime(d.dt, timezone, "ccc"),
        temp: d.temp.day,
        icon: d.weather[0].icon,
      };
    });
    

    hourly = hourly.slice(32,37).map((d) => {
  
      return {
        title: ConvertToLocalTime(d.dt, timezone, "hh:mm a"),
        temp: d.temp,
        icon: d.weather[0].icon,
      };

    });
  
    return { timezone, daily, hourly};
  };
  const convertForecastedWeather5 = (data) => {
    let { timezone, daily, hourly} = data;
    daily = daily.slice(1,6).map((d) => {
      return {
        title: ConvertToLocalTime(d.dt, timezone, "ccc"),
        temp: d.temp.day,
        icon: d.weather[0].icon,
      };
    });
    

    hourly = hourly.slice(42,47).map((d) => {
  
      return {
        title: ConvertToLocalTime(d.dt, timezone, "hh:mm a"),
        temp: d.temp,
        icon: d.weather[0].icon,
      };

    });
  
    return { timezone, daily, hourly};
  };
  
  const manipulateWeather1 = async (searchParams) => {
    const convertCurrentWeatherDetails = await fetchAllWeatherInfo(
      "weather",
      searchParams
    ).then(currentWeather);
  
    const { lat, lon } = convertCurrentWeatherDetails;
  
    const convertForecastWeatherDetails = await fetchAllWeatherInfo("onecall", {
      lat,
      lon,
      exclude: "current,minutely,alerts",
      units: searchParams.units,
    }).then(convertForecastedWeather1);
  
    return { ...convertCurrentWeatherDetails, ...convertForecastWeatherDetails };
  };

  const manipulateWeather2 = async (searchParams) => {
    const convertCurrentWeatherDetails = await fetchAllWeatherInfo(
      "weather",
      searchParams
    ).then(currentWeather);
  
    const { lat, lon } = convertCurrentWeatherDetails;
  
    const convertForecastWeatherDetails = await fetchAllWeatherInfo("onecall", {
      lat,
      lon,
      exclude: "current,minutely,alerts",
      units: searchParams.units,
    }).then(convertForecastedWeather2);
  
    return { ...convertCurrentWeatherDetails, ...convertForecastWeatherDetails };
  };
  const manipulateWeather3 = async (searchParams) => {
    const convertCurrentWeatherDetails = await fetchAllWeatherInfo(
      "weather",
      searchParams
    ).then(currentWeather);
  
    const { lat, lon } = convertCurrentWeatherDetails;
  
    const convertForecastWeatherDetails = await fetchAllWeatherInfo("onecall", {
      lat,
      lon,
      exclude: "current,minutely,alerts",
      units: searchParams.units,
    }).then(convertForecastedWeather3);
  
    return { ...convertCurrentWeatherDetails, ...convertForecastWeatherDetails };
  };
  const manipulateWeather4 = async (searchParams) => {
    const convertCurrentWeatherDetails = await fetchAllWeatherInfo(
      "weather",
      searchParams
    ).then(currentWeather);
  
    const { lat, lon } = convertCurrentWeatherDetails;
  
    const convertForecastWeatherDetails = await fetchAllWeatherInfo("onecall", {
      lat,
      lon,
      exclude: "current,minutely,alerts",
      units: searchParams.units,
    }).then(convertForecastedWeather4);
  
    return { ...convertCurrentWeatherDetails, ...convertForecastWeatherDetails };
  };
  const manipulateWeather5 = async (searchParams) => {
    const convertCurrentWeatherDetails = await fetchAllWeatherInfo(
      "weather",
      searchParams
    ).then(currentWeather);
  
    const { lat, lon } = convertCurrentWeatherDetails;
  
    const convertForecastWeatherDetails = await fetchAllWeatherInfo("onecall", {
      lat,
      lon,
      exclude: "current,minutely,alerts",
      units: searchParams.units,
    }).then(convertForecastedWeather5);
  
    return { ...convertCurrentWeatherDetails, ...convertForecastWeatherDetails };
  };
  
  const ConvertToLocalTime = (
    secs,
    zone,
    format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a"
  ) => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);
  
  const fetchIcons = (code) =>
    `http://openweathermap.org/img/wn/${code}@2x.png`;
  

  
  export {ConvertToLocalTime,fetchIcons,manipulateWeather1, manipulateWeather2, manipulateWeather3,manipulateWeather4,manipulateWeather5};