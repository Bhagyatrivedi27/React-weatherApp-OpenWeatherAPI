import './App.css';
import SearchComp from './components/SearchComp';
import DateTimeAndLocComp from './components/DateTimeAndLocComp';
import TempFetchComp from './components/TempFetchComp';
import WeatherForcastComp from './components/WeatherForecastComp';
import {manipulateWeather1, manipulateWeather2, manipulateWeather3,manipulateWeather4,manipulateWeather5} from './services/getAllWeatherServices';
import {useState, useEffect } from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import DaysComp from './components/DaysComp';

function App() {

  const [query, setQuery] = useState({q: "boston"});
  const [units, setUnits] = useState('metric');
  const [weather1, setWeather1] = useState(null)
  const [weather2, setWeather2] = useState(null)
  const [weather3, setWeather3] = useState(null)
  const [weather4, setWeather4] = useState(null)
  const [weather5, setWeather5] = useState(null)

  useEffect(() => {
    const fetchWeather1 = async() => {

      await manipulateWeather1({...query, units}).then((data)=>{
        setWeather1(data);
      });  
    };
    const fetchWeather2 = async() => {

      await manipulateWeather2({...query, units}).then((data)=>{
        setWeather2(data);
      });  
    };
    const fetchWeather3 = async() => {

      await manipulateWeather3({...query, units}).then((data)=>{
        setWeather3(data);
      });  
    };
    const fetchWeather4 = async() => {

      await manipulateWeather4({...query, units}).then((data)=>{
        setWeather4(data);
      });  
    };
    const fetchWeather5 = async() => {

      await manipulateWeather5({...query, units}).then((data)=>{
        setWeather5(data);
      });  
    };
    
    fetchWeather1();
    fetchWeather2();
    fetchWeather3();
    fetchWeather4();
    fetchWeather5();
  }, [query, units]);



  return (
    <div className='mx-auto  mt-4 py-10 px-32 bg-gradient-to-br from-cyan-300 to-black h-fit '>
      <SearchComp setQuery={setQuery} setUnits={setUnits}></SearchComp>
      {weather1 && weather2 && weather3 && weather4 && weather5 &&(
        <div>
      <DateTimeAndLocComp weather={weather1}></DateTimeAndLocComp>
      <TempFetchComp weather={weather1}></TempFetchComp>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<div><WeatherForcastComp title='daily forecast' items={weather1.daily}></WeatherForcastComp><DaysComp></DaysComp></div>}>
        </Route>
        <Route path="/Monday" element={<div>

        <WeatherForcastComp title='daily forecast' items={weather1.daily}></WeatherForcastComp><DaysComp></DaysComp> <WeatherForcastComp title='hourly forecast' items={weather1.hourly} ></WeatherForcastComp></div>}>
        </Route>
        <Route path="/Tuesday" element={<div>

        <WeatherForcastComp title='daily forecast' items={weather1.daily}></WeatherForcastComp><DaysComp></DaysComp> <WeatherForcastComp title='hourly forecast' items={weather2.hourly}></WeatherForcastComp></div>}>
        </Route>
        <Route path="/Wednesday" element={<div>

        <WeatherForcastComp title='daily forecast' items={weather1.daily}></WeatherForcastComp><DaysComp></DaysComp> <WeatherForcastComp title='hourly forecast' items={weather3.hourly}></WeatherForcastComp></div>}>
        </Route>
        <Route path="/Thursday" element={<div>

        <WeatherForcastComp title='daily forecast' items={weather1.daily}></WeatherForcastComp><DaysComp></DaysComp> <WeatherForcastComp title='hourly forecast' items={weather4.hourly}></WeatherForcastComp></div>}>
        </Route>
        <Route path="/Friday" element={<div>

        <WeatherForcastComp title='daily forecast' items={weather1.daily}></WeatherForcastComp><DaysComp></DaysComp> <WeatherForcastComp title='hourly forecast' items={weather5.hourly}></WeatherForcastComp></div>}>
        </Route>
      </Routes>
      </BrowserRouter>
        </div>
      )}
      
    </div>
  );
}

export default App;
