import './App.css';
import Heropage from './components/Heropage';
import MoviesRow from './components/MoviesRow';
import Navpage from './components/Navpage';

function App() {
  return (
    <div className="App">
      <Navpage />
      <Heropage />
      <MoviesRow />
      <MoviesRow />
      <MoviesRow /> 
      <MoviesRow />
      <MoviesRow />
      <MoviesRow />
      <MoviesRow />
      <MoviesRow />
    </div>
  );
}

export default App;
