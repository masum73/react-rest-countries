import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';
import Countries from './components/Countries/Countries';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      {/* <LoadCountries></LoadCountries> */}
      {/* <Header></Header> */}
      <Header></Header>
      <Countries></Countries>
      <Footer></Footer>
    </div>
  );
}
/*
function LoadCountries(){
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data=> setCountries(data))
  }, [])

  return (
    <div>
      <h1>Visiting Every Countries of the world</h1>
      <h3>Available Countries: {countries.length}</h3>
      {
        countries.map(country => <Country name={country.name.common} population={country.population}></Country>)
      }
    </div>
  )
}
*/
/*
function Country(props){
  console.log(props);
  return(
    <div>
      <h2>Name: {props.name}</h2>
      <h2>Population: {props.population}</h2>
    </div>
  )
}
*/
export default App;
