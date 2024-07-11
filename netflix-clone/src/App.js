import './App.css';
import Footer from './components/Footer';
import Heropage from './components/Heropage';
import MoviesRow from './components/MoviesRow';
import Navpage from './components/Navpage';
import "./resource/requests";
import requests from './resource/requests';

function App() {
  return (
    <div className="App">
      <Navpage />
      <Heropage title="Rondom" url="requests.action"/>
      <MoviesRow title="Action" url={requests.action} posterLarge/>
      <MoviesRow title="Adventure" url={requests.adventure} />
      <MoviesRow title="Animation" url={requests.animation} />
      <MoviesRow title="Comedy" url={requests.comedy} />
      <MoviesRow title="Crime" url={requests.crime} />
      <MoviesRow title="Documentary" url={requests.documentary} />
      <MoviesRow title="Family" url={requests.family} />
      <MoviesRow title="War" url={requests.war} />
      <Footer/>
    </div>
  );
}

export default App;
